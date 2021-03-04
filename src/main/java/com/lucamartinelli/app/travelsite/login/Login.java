package com.lucamartinelli.app.travelsite.login;

import java.io.ByteArrayInputStream;
import java.io.IOException;

import javax.annotation.PostConstruct;
import javax.inject.Inject;
import javax.inject.Provider;
import javax.json.Json;
import javax.json.JsonObject;
import javax.servlet.http.HttpServletResponse;
import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;

import org.eclipse.microprofile.config.inject.ConfigProperty;
import org.eclipse.microprofile.metrics.annotation.Counted;
import org.jboss.logging.Logger;

import com.lucamartinelli.app.travelsite.login.ejb.LoginDBEJB;
import com.lucamartinelli.app.travelsite.login.ejb.LoginEJB;
import com.lucamartinelli.app.travelsite.login.ejb.LoginInMemoryEJB;
import com.lucamartinelli.app.travelsite.login.utils.ValidateToken;
import com.lucamartinelli.app.travelsite.login.vo.CredentialsVO;

import io.smallrye.jwt.auth.principal.ParseException;

@Path("/")
public class Login {
	
	private LoginEJB ejb;
	
	@ConfigProperty(name = "login.mode", defaultValue = "IN_MEMORY")
	String mode;
	
	@Inject
	Logger log;
	
	@Inject
	Provider<LoginInMemoryEJB> inMemoryEJB;
	@Inject
	Provider<LoginDBEJB> dbEJB;
	
	@Context
	HttpServletResponse response;
	
	@PostConstruct
	public void init() {
		log.debug("Login service is loaded with mode [" + mode + "]");
		if (ejb == null) {
			switch (mode) {
			case "IN_MEMORY":
				ejb = inMemoryEJB.get();
				break;

			case "DB":
				ejb = dbEJB.get();
				break;
				
			default:
				log.error("Error configuration Login service, please check"
						+ " the value for key [login.mode]");
			}
		}
	}

    @POST
    @Produces(MediaType.TEXT_PLAIN)
    @Consumes({MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML})
    @Path("/login")
    @Counted(name = "login-calls", displayName = "Login service invokations",
    		description = "Number of login calls by users", absolute = true)
    public String login(final CredentialsVO cred) {
    	if (ejb == null) {
    		log.error("EJB is null, please check the configurations");
    		setError(503, "Service Unavailable. Wrong Configurations");
			return null;
    	}
    	
    	String token = null;
    	try {
    		token = ejb.login(cred.getUsername(), cred.getPassword());
    	} catch (RuntimeException e) {
    		log.error("Error during execution login() ", e);
    		setError(503, "Service Unavailable");
    		return null;
		}
    	
    	if(token == null) {
    		log.info("Credentials are wrong");
    		setError(403, null);
    		return "Credentials wrong";
    	}
    	
    	return token;
    }
    
    @POST
    @Path("/validate")
    @Consumes(MediaType.TEXT_PLAIN)
    @Produces(MediaType.APPLICATION_JSON)
    public String validate(final String jwt) {
    	JsonObject result = null;
		try {
			log.debug("Validating jwt: " + jwt);
			final String resultString = ValidateToken.validate(jwt);
			if (resultString == null) {
				setError(401, "Wrong token");
			}
			log.debug("JWT valid, decoded data: " + resultString);
			result = Json.createReader(new ByteArrayInputStream(resultString.getBytes()))
					.readObject();
		} catch (ParseException e) {
			log.error("Error during parse JWT: ", e);
		}
    	if (result == null) {
			setError(401, "Wrong token");
    	}
    	
    	if (ejb == null) {
    		log.warn("EJB is null, please check the configurations");
    		log.warn("Not possible enrich the claims");
    	} else {
        	log.debug("Enrich jwt with additional claims");
        	try {
        		result = ejb.enrichClaims(result);
        	} catch (RuntimeException e) {
        		log.error("Error during execution validate() ", e);
        		setError(503, "Service Unavailable");
        		return null;
    		}
    	}
    	
    	return result.toString();
    }
    
    
    private void setError(int error, String msg) {
    	try {
			response.sendError(error, msg);
		} catch (IOException e) {
			log.error(e);
			throw new RuntimeException(e);
		}
    }
    
}
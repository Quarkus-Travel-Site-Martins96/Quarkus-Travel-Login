package com.lucamartinelli.app.travelsite.login;

import java.io.IOException;

import javax.annotation.PostConstruct;
import javax.inject.Inject;
import javax.inject.Provider;
import javax.servlet.http.HttpServletResponse;
import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;

import org.eclipse.microprofile.config.inject.ConfigProperty;
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
    public String login(final CredentialsVO cred) {
    	if (ejb == null) {
    		log.error("EJB is null, please check the configurations");
    		try {
				response.sendError(503, "Service Unavailable. Wrong Configurations");
			} catch (IOException e) {
				log.error("Error during setting status in Servlet response");
				throw new RuntimeException(e);
			}
			return null;
    	}
    	
    	final String token = ejb.login(cred.getUsername(), cred.getPassword());
    	
    	if(token == null) {
    		log.info("Credentials are wrong");
    		try {
				response.sendError(401);
			} catch (IOException e) {
				log.error("Error during setting status in Servlet response");
				throw new RuntimeException(e);
			}
    		return "Credentials wrong";
    	}
    	
    	return token;
    }
    
    @POST
    @Path("/validate")
    @Consumes(MediaType.TEXT_PLAIN)
    @Produces(MediaType.APPLICATION_JSON)
    public String validate(final String jwt) {
    	String result = null;
		try {
			result = ValidateToken.validate(jwt);
		} catch (ParseException e) {
			log.error("Error during parse JWT: ", e);
		}
    	if (result == null) {
    		try {
				response.sendError(401, "Wrong token");
			} catch (IOException e) {
				log.error("Error setting the error in response: ", e);
				throw new RuntimeException(e);
			}
    	}
    	return result;
    }
}
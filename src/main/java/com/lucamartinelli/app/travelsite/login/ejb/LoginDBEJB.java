package com.lucamartinelli.app.travelsite.login.ejb;

import java.sql.SQLException;

import javax.enterprise.context.ApplicationScoped;
import javax.enterprise.inject.Default;
import javax.enterprise.inject.spi.CDI;
import javax.inject.Inject;
import javax.json.Json;
import javax.json.JsonObject;
import javax.json.JsonObjectBuilder;

import org.jboss.logging.Logger;

import com.lucamartinelli.app.travelsite.login.dao.LoginDAO;
import com.lucamartinelli.app.travelsite.login.utils.GenerateToken;
import com.lucamartinelli.app.travelsite.login.utils.Hashing;
import com.lucamartinelli.app.travelsite.login.vo.LoginException;
import com.lucamartinelli.app.travelsite.login.vo.UserVO;

@ApplicationScoped
public class LoginDBEJB implements LoginEJB {
	
	@Inject
	Logger log;

	@Override
	public String login(String username, String clearPassword) throws LoginException {
		log.debug("Get Hotel Info Service START");
		final LoginDAO dao = CDI.current().select(LoginDAO.class, new Default.Literal()).get();
		try {
			log.debugv("Hashing password {0}", clearPassword);
			final String password = Hashing.hashString(clearPassword);
			log.debugv("Hashed {0} into {1} ", clearPassword, password);
			
			final UserVO user = dao.getUser(username, password);
			if (user == null) {
				log.warn("User not found on DB or password is wrong");
				return null;
			}
			return GenerateToken.generate(user);
		} catch (SQLException e) {
			log.error("Error in SQL query: ", e);
			return null;
		} finally {
			log.debug("Get Hotel Info Service END");
		}
	}
	
	
	@Override
	public JsonObject enrichClaims(JsonObject jwt) {
		log.debug("Enrich token: " + jwt.toString());
		final JsonObjectBuilder bldr = Json.createObjectBuilder(jwt);
		UserVO user = null;
		final LoginDAO dao = CDI.current().select(LoginDAO.class, new Default.Literal()).get();
		try {
			user = dao.getUserInfo(jwt.getString("upn"));
		} catch (SQLException e) {
			log.error("Error in SQL query: ", e);
		}
		
		if (user == null) {
			log.warn("User not found");
			return jwt;
		}
		if (user.getAvatar() != null && !user.getAvatar().trim().isEmpty())
			bldr.add("avatar", user.getAvatar());
		
		jwt = bldr.build();
		return jwt;
	}

}

package com.lucamartinelli.app.travelsite.login.ejb;

import java.util.Map;

import javax.annotation.PostConstruct;
import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;
import javax.json.Json;
import javax.json.JsonObject;
import javax.json.JsonObjectBuilder;

import org.jboss.logging.Logger;

import com.lucamartinelli.app.travelsite.login.inmemory.MockUserData;
import com.lucamartinelli.app.travelsite.login.utils.GenerateToken;
import com.lucamartinelli.app.travelsite.login.vo.UserVO;

@ApplicationScoped
public class LoginInMemoryEJB implements LoginEJB {
	
	@Inject
	Logger log;
	
	@PostConstruct
	public void init() {
		log.debug("Login In Memory EJB loaded");
	}
	
	@Override
	public String login(String username, String password) {
		log.debug("Log in user " + username + " using password " + password);
		final Map<String, String> inMemoryDB = MockUserData.USERS;
		final String pwd = (String) inMemoryDB.get(username);
		
		if (pwd == null || !pwd.equals(password)) {
			return null;
		}
		
		return GenerateToken.generate(MockUserData.getUserData(username));
	}
	
	@Override
	public JsonObject enrichClaims(JsonObject jwt) {
		log.debug("Enrich token: " + jwt.toString());
		final JsonObjectBuilder bldr = Json.createObjectBuilder(jwt);
		final UserVO user = MockUserData.getUserData(jwt.getString("upn"));
		if (user == null) {
			log.warn("User not found");
			return jwt;
		}
		bldr.add("avatar", user.getAvatar());
		
		jwt = bldr.build();
		return jwt;
	}
	
	
}

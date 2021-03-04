package com.lucamartinelli.app.travelsite.login.ejb;

import javax.json.JsonObject;

public interface LoginEJB {
	
	/**
	 * Login service
	 * 
	 * @param username about the user that you want log in
	 * @param password in clear related to user
	 * @return The JWT signed, or <code>null</code> if the user/password is incorrect
	 */
	public String login(String username, String password);
	
	/**
	 * Enrich Claims service
	 * 
	 * @param jwt decoded
	 * @return The JWT enriched with other additional information
	 */
	public JsonObject enrichClaims(JsonObject jwt);
	
	
}

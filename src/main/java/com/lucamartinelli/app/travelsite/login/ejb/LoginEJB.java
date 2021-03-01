package com.lucamartinelli.app.travelsite.login.ejb;

public interface LoginEJB {
	
	/**
	 * Login service
	 * 
	 * @param username about the user that you want log in
	 * @param password in clear related to user
	 * @return The JWT signed, or <code>null</code> if the user/password is incorrect
	 */
	public String login(String username, String password);
	
	
}

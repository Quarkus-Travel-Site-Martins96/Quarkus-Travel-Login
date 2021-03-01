package com.lucamartinelli.app.travelsite.login.inmemory;

import java.util.Arrays;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;

import com.lucamartinelli.app.travelsite.login.vo.UserVO;

public class MockUserData {
	
	public static final Map<String, String> USERS = new HashMap<>();
	
	static {
		USERS.put("admin", "secret1");
		USERS.put("premium", "secret1");
		USERS.put("luca", "secret1");
	}
	
	public static final List<UserVO> USERS_DATA = Arrays.asList(new UserVO[] {
			new UserVO(
				"admin",
				"admin@mail.com",
				new HashSet<>(Arrays.asList(new String[] {"admin", "premium", "user"})),
				"1970-01-01",
				"Admin",
				"SuperUser",
				"New York, USA"),
			new UserVO(
				"premium",
				"premiumuser@mail.com",
				new HashSet<>(Arrays.asList(new String[] {"premium", "user"})),
				"1990-01-01",
				"Premium",
				"GreatUser",
				"Berlin, Germany"),
			new UserVO(
				"luca",
				"luca.martinelli7cc@gmail.com",
				new HashSet<>(Arrays.asList(new String[] {"user"})),
				"1996-02-12",
				"Luca",
				"Martinelli",
				"Bergamo, Italy")
	});
	
	
	public static UserVO getUserData(String username) {
		for (UserVO u : USERS_DATA) {
			if (u.getUsername().equalsIgnoreCase(username))
				return u;
		}
		
		return null;
	}
	
	
	
	
	
	
}

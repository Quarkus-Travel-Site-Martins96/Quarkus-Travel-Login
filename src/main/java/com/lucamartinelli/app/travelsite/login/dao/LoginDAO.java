package com.lucamartinelli.app.travelsite.login.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;

import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;
import javax.enterprise.context.ApplicationScoped;
import javax.enterprise.inject.Default;
import javax.enterprise.inject.spi.CDI;
import javax.inject.Inject;

import org.jboss.logging.Logger;

import com.lucamartinelli.app.travelsite.login.vo.UserVO;

import io.agroal.api.AgroalDataSource;
import io.quarkus.arc.Unremovable;

@ApplicationScoped
@Unremovable
@Default
public class LoginDAO {
	
	public static final String USER_QUERY = "SELECT * FROM USERS WHERE username = ? AND password = ?";
	
	private Connection connection = null;
	
	@Inject
	Logger log;
	
	@PostConstruct
	void init() {
		try {
			connection = CDI.current().select(AgroalDataSource.class).get().getConnection();
		} catch (SQLException e) {
			log.error("Error during connection to DB: ", e);
		}
	}
	
	public UserVO getUser(final String username, final String password) 
			throws SQLException {
		UserVO user = null;
		log.debug(USER_QUERY + " --> using [username=" + username + "] [password=" + password + "]");
		
		try (PreparedStatement ps = connection.prepareStatement(USER_QUERY)) {
			ps.setString(1, username);
			ps.setString(2, password);
			try (ResultSet rs = ps.executeQuery()) {
				if (rs.next()) {
					user = new UserVO(
							rs.getString("USERNAME"), 
							rs.getString("EMAIL"), 
							splitGroups(rs.getString("GROUPS")),
							rs.getString("BIRTHDATE"),
							rs.getString("NAME"),
							rs.getString("SURNAME"),
							rs.getString("COUNTRY"));
				} else {
					log.warn("Query return NO RESULT for user " + username);
				}
			}
			
		} catch (SQLException e) {
			log.error("Error in USER query: ", e);
			throw e;
		}
		
		return user;
	}
	
	@PreDestroy
	void onDestroy() {
		try {
			if (connection != null)
				connection.close();
		} catch(SQLException e) {
			log.debug("Error during connection closure: ", e);
		}
	}
	
	
	private Set<String> splitGroups(final String fromDB) {
		if (fromDB == null || fromDB.trim().isEmpty())
			return new HashSet<>(0);
		if (!fromDB.contains(";")) {
			final Set<String> r = new HashSet<>(1);
			r.add(fromDB);
			return(r);
		}
		return new HashSet<>(Arrays.asList(fromDB.split(";")));
	}
}

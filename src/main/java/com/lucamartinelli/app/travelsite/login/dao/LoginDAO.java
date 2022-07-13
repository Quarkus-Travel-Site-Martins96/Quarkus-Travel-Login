package com.lucamartinelli.app.travelsite.login.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;

import javax.annotation.PostConstruct;
import javax.enterprise.context.ApplicationScoped;
import javax.enterprise.inject.Default;
import javax.enterprise.inject.spi.CDI;
import javax.inject.Inject;

import org.jboss.logging.Logger;

import com.lucamartinelli.app.travelsite.login.vo.LoginException;
import com.lucamartinelli.app.travelsite.login.vo.PendingUserVO;
import com.lucamartinelli.app.travelsite.login.vo.UserVO;

import io.agroal.api.AgroalDataSource;
import io.quarkus.arc.Unremovable;

@ApplicationScoped
@Unremovable
@Default
public class LoginDAO {
	
	public static final String USER_QUERY = "SELECT * FROM user_credentials WHERE username = ? AND password = ?";
	public static final String USER_DATA_QUERY = "SELECT * FROM users WHERE username = ?";
	
	private AgroalDataSource datasource = null;
	
	@Inject
	Logger log;
	
	@PostConstruct
	void init() {
		datasource = CDI.current().select(AgroalDataSource.class).get();
	}
	
	public UserVO getUser(final String username, final String password) 
			throws SQLException, LoginException {
		UserVO user = null;
		log.debug(USER_QUERY + " --> using [username=" + username + "] [password=" + password + "]");
		if (datasource == null) {
			log.error("Datasource is null");
			throw new SQLException("Cannot connect to Database");
		}
		
		try (Connection connection = datasource.getConnection();
				final PreparedStatement ps = connection.prepareStatement(USER_QUERY)) {
			ps.setString(1, username);
			ps.setString(2, password);
			try (ResultSet rs = ps.executeQuery()) {
				if (rs.next()) {
					final PendingUserVO pendingUser = new PendingUserVO(
							rs.getString("USERNAME"),
							rs.getString("PASSWORD"),
							rs.getString("PENDING"),
							rs.getString("TMP_TOKEN"),
							rs.getString("TMP_EMAIL")
							);
					if ("Y".equals(pendingUser.getPendingFlag())) {
						log.debug("User " + username + " is in pending, show dedicated page");
						throw new LoginException((short) 2, "User in pending state");
					}
					log.debug("User is not in pending, get full information");
					
					user = getUserInfo(username);
					if (user == null) {
						throw new LoginException((short) 1, "User credentials not valid");
					}
					
				} else {
					log.warn("Query return NO RESULT for user " + username);
					throw new LoginException((short) 1, "User credentials not valid");
				}
			}
			
		} catch (SQLException e) {
			log.error("Error in USER query: ", e);
			throw e;
		}
		
		return user;
	}
	
	public UserVO getUserInfo(final String username)
			throws SQLException {
			UserVO user = null;
			log.debug(USER_DATA_QUERY + " --> using [username=" + username + "]");
			if (datasource == null) {
				log.error("Datasource is null");
				throw new SQLException("Cannot connect to Database");
			}
			
			try (Connection connection = datasource.getConnection();
					PreparedStatement ps = connection.prepareStatement(USER_DATA_QUERY)) {
				ps.setString(1, username);
				try (ResultSet rs = ps.executeQuery()) {
					if (rs.next()) {
						user = new UserVO(
								rs.getString("USERNAME"), 
								rs.getString("EMAIL"), 
								splitGroups(rs.getString("GROUPS")),
								rs.getString("BIRTHDATE"),
								rs.getString("NAME"),
								rs.getString("SURNAME"),
								rs.getString("COUNTRY"),
								rs.getString("AVATAR"));
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

package com.lucamartinelli.app.travelsite.login.ejb;

import java.sql.SQLException;

import javax.enterprise.context.ApplicationScoped;
import javax.enterprise.inject.Default;
import javax.enterprise.inject.spi.CDI;
import javax.inject.Inject;

import org.jboss.logging.Logger;

import com.lucamartinelli.app.travelsite.login.dao.LoginDAO;
import com.lucamartinelli.app.travelsite.login.utils.GenerateToken;
import com.lucamartinelli.app.travelsite.login.vo.UserVO;

@ApplicationScoped
public class LoginDBEJB implements LoginEJB {
	
	@Inject
	Logger log;

	@Override
	public String login(String username, String password) {
		log.debug("Get Hotel Info Service START");
		final LoginDAO dao = CDI.current().select(LoginDAO.class, new Default.Literal()).get();
		try {
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

}

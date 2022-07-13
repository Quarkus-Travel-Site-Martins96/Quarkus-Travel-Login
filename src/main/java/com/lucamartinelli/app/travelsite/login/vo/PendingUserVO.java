package com.lucamartinelli.app.travelsite.login.vo;

import java.io.Serializable;

import javax.json.Json;
import javax.json.JsonObject;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
@XmlAccessorType(XmlAccessType.FIELD)
public class PendingUserVO implements Serializable {
	
	private static final long serialVersionUID = -3170266204942153759L;
	
	private String username;
	private String password;
	private String pendingFlag;
	private String tmpToken;
	private String tmpEmail;
	
	public PendingUserVO() {
	}

	public PendingUserVO(String username, String password, String pendingFlag, 
			String tmpToken, String tmpEmail) {
		super();
		this.username = username;
		this.password = password;
		this.pendingFlag = pendingFlag;
		this.tmpToken = tmpToken;
		this.tmpEmail = tmpEmail;
	}

	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}

	public String getPendingFlag() {
		return pendingFlag;
	}
	public void setPendingFlag(String pendingFlag) {
		this.pendingFlag = pendingFlag;
	}

	public String getTmpToken() {
		return tmpToken;
	}
	public void setTmpToken(String tmpToken) {
		this.tmpToken = tmpToken;
	}

	public String getTmpEmail() {
		return tmpEmail;
	}
	public void setTmpEmail(String tmpEmail) {
		this.tmpEmail = tmpEmail;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((password == null) ? 0 : password.hashCode());
		result = prime * result + ((pendingFlag == null) ? 0 : pendingFlag.hashCode());
		result = prime * result + ((tmpEmail == null) ? 0 : tmpEmail.hashCode());
		result = prime * result + ((tmpToken == null) ? 0 : tmpToken.hashCode());
		result = prime * result + ((username == null) ? 0 : username.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		PendingUserVO other = (PendingUserVO) obj;
		if (password == null) {
			if (other.password != null)
				return false;
		} else if (!password.equals(other.password))
			return false;
		if (pendingFlag == null) {
			if (other.pendingFlag != null)
				return false;
		} else if (!pendingFlag.equals(other.pendingFlag))
			return false;
		if (tmpEmail == null) {
			if (other.tmpEmail != null)
				return false;
		} else if (!tmpEmail.equals(other.tmpEmail))
			return false;
		if (tmpToken == null) {
			if (other.tmpToken != null)
				return false;
		} else if (!tmpToken.equals(other.tmpToken))
			return false;
		if (username == null) {
			if (other.username != null)
				return false;
		} else if (!username.equals(other.username))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "PendingUserVO [username=" + username + ", password=" + password + ", pendingFlag=" + pendingFlag
				+ ", tmpToken=" + tmpToken + ", tmpEmail=" + tmpEmail + "]";
	}
	
	public JsonObject toJSON() {
		return Json.createObjectBuilder()
				.add("username", username)
				.add("password", password)
				.add("pendingFlag", pendingFlag)
				.add("tmpToken", tmpToken)
				.add("tmpEmail", tmpEmail)
				.build();
	}
	
	
}

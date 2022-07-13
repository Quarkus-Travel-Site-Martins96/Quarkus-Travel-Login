package com.lucamartinelli.app.travelsite.login.vo;

public class LoginException extends RuntimeException {

	private static final long serialVersionUID = -7035156287091623574L;
	
	private short statusCode;
	private String errorDescription;
	
	public LoginException() {
		statusCode = 1;
	}
	
	public LoginException(Throwable e) {
		super(e);
		statusCode = 1;
	}

	public LoginException(short statusCode, String errorDescription) {
		super();
		this.statusCode = statusCode;
		this.errorDescription = errorDescription;
	}
	
	public LoginException(short statusCode, String errorDescription, Throwable e) {
		super(e);
		this.statusCode = statusCode;
		this.errorDescription = errorDescription;
	}

	public short getStatusCode() {
		return statusCode;
	}
	public void setStatusCode(short statusCode) {
		this.statusCode = statusCode;
	}

	public String getErrorDescription() {
		return errorDescription;
	}
	public void setErrorDescription(String errorDescription) {
		this.errorDescription = errorDescription;
	}

	@Override
	public String toString() {
		return "LoginException [statusCode=" + statusCode + ", errorDescription=" + errorDescription + "]";
	}
	
}

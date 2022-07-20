package com.lucamartinelli.app.travelsite.login.utils;

import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

import org.jboss.logging.Logger;

public class Hashing {
	
	private final static Logger log = Logger.getLogger(Hashing.class);
	
	public static String hashString(String cleanString) {
		try {
			log.debugv("Stating hashing string {0}", cleanString);
			final MessageDigest digest = MessageDigest.getInstance("SHA3-256");
			final byte[] hashbytes = digest.digest(cleanString.getBytes(StandardCharsets.UTF_8));
			final String sha3Hex = bytesToHex(hashbytes);
			log.debugv("Hashed string: {0}", sha3Hex);
			return sha3Hex;
		} catch (NoSuchAlgorithmException e) {
			log.error("Missing SHA3 256 algorithm!!", e);
			throw new RuntimeException();
		}
		
	}
	
	
	
	private static String bytesToHex(byte[] hash) {
	    StringBuilder hexString = new StringBuilder(2 * hash.length);
	    for (int i = 0; i < hash.length; i++) {
	        String hex = Integer.toHexString(0xff & hash[i]);
	        if(hex.length() == 1) {
	            hexString.append('0');
	        }
	        hexString.append(hex);
	    }
	    return hexString.toString();
	}
	
}

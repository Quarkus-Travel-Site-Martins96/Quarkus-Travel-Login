package com.lucamartinelli.app.travelsite.login.utils;

import java.io.IOException;
import java.security.GeneralSecurityException;

import org.eclipse.microprofile.config.Config;
import org.eclipse.microprofile.config.ConfigProvider;
import org.jboss.logging.Logger;
import org.jose4j.jwt.consumer.InvalidJwtException;
import org.jose4j.jwt.consumer.JwtConsumerBuilder;

import io.smallrye.jwt.auth.principal.ParseException;
import io.smallrye.jwt.util.KeyUtils;

public class ValidateToken {
	
	private static final Logger log = Logger.getLogger(ValidateToken.class.getCanonicalName());

	public static String validate(String jwt) throws ParseException {
		final Config config = ConfigProvider.getConfig();
		final String decryptPrivateKey = config.getOptionalValue("validate.decrypt.private.key", String.class)
				.orElse("META-INF/keys/private.encrypt.key.pem");
		final String signerPublicKey = config.getOptionalValue("validate.signer.public.key", String.class)
				.orElse("META-INF/keys/public.signer.key.pem");
		final String issuer = config.getOptionalValue("jwt.issuer", String.class)
				.orElse("Luca_Approver");
		
    	String result = null;
    	try {
    		result = new JwtConsumerBuilder()
    				.setDecryptionKey(KeyUtils.readPrivateKey(decryptPrivateKey))
    				.setVerificationKey(KeyUtils.readPublicKey(signerPublicKey))
    				.setExpectedIssuer(issuer)
    				.build()
    				.process(jwt).getJwtClaims().toJson();
		} catch (InvalidJwtException | IOException | GeneralSecurityException e) {
			log.error("Error in validate token: ", e);
		}
    	
		return result;
	}

}

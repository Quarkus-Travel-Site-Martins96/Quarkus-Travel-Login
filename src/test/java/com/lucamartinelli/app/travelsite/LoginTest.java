package com.lucamartinelli.app.travelsite;

import io.quarkus.test.junit.QuarkusTest;
import io.restassured.http.ContentType;

import org.junit.jupiter.api.Test;

import com.lucamartinelli.app.travelsite.login.vo.CredentialsVO;

import static io.restassured.RestAssured.given;
import static org.junit.jupiter.api.Assertions.assertEquals;

import java.io.InputStream;

import javax.json.Json;
import javax.json.JsonObject;

@QuarkusTest
public class LoginTest {

	@Test
	public void testHelloEndpoint() {
		final String jwtResponse = given()
			.when()
					.accept(ContentType.TEXT)
					.contentType(ContentType.JSON)
					.body(new CredentialsVO("luca", "secret1"))
					.post("/login")
			.then()
					.statusCode(200)
					.contentType(ContentType.TEXT)
					.extract().asString();
		
		final InputStream isResponse = given()
				.when()
						.contentType(ContentType.TEXT)
						.accept(ContentType.JSON)
						.body(jwtResponse)
						.post("/validate")
				.then()
						.statusCode(200)
						.contentType(ContentType.JSON)
						.extract().asInputStream();
		
		final JsonObject validateResponse = Json.createReader(isResponse).readObject();
		
		assertEquals("luca", validateResponse.getString("upn"),
				"Username from validate is not equals to first one");
		
	}

}
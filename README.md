# Login Quarkus Travel project

This project uses Quarkus, the Supersonic Subatomic Java Framework.

If you want to learn more about Quarkus, please visit its website: https://quarkus.io/ .

___
This Git organization is an example site for a Travel Company. I made this for study and fun, please feel free to watch or fork it! 

You can run all microservice with a MySQL DB configured and initialized via sql script in Database project, or simply run with mocked in-memory data. 
Check the [META-INF/microprofile-config.properties](https://github.com/Quarkus-Travel-Site-Martins96/Quarkus-Travel-Hotel/blob/master/src/main/resources/META-INF/microprofile-config.properties) file
___

This part is related to selected Hotel information views. Here you can see description and images about selected hotel.

### Running the application in dev mode

You can run your application in dev mode that enables live coding using:
```shell script
./mvnw compile quarkus:dev
```

> **_NOTE:_**  Quarkus now ships with a Dev UI, which is available in dev mode only at http://localhost:8081/q/dev/.

Frontend application exposed on [localhost:8081/](http://localhost:8081/)

Backend APIs:
 - **http://localhost:8081/hotel/info/{id}** --> via HTTP GET
 - **http://localhost:8081/hotel/images/{id}** --> via HTTP GET

### Packaging and running the application

Build Front End part: inside folder /src/main/angular/hotel-ng
```shell script
ng build
```

### Packaging and running the application

The application can be packaged using:
```shell script
./mvnw package
```
It produces the `quarkus-run.jar` file in the `target/quarkus-app/` directory.
Be aware that it’s not an _über-jar_ as the dependencies are copied into the `target/quarkus-app/lib/` directory.

If you want to build an _über-jar_, execute the following command:
```shell script
./mvnw package -Dquarkus.package.type=uber-jar
```

The application is now runnable using `java -jar target/quarkus-app/quarkus-run.jar`.

### Creating a native executable

You can create a native executable using: 
```shell script
./mvnw package -Pnative
```

Or, if you don't have GraalVM installed, you can run the native executable build in a container using: 
```shell script
./mvnw package -Pnative -Dquarkus.native.container-build=true
```

You can then execute your native executable with: `./target/login-quarkus-travel-1.0.0-SNAPSHOT-runner`

If you want to learn more about building native executables, please consult https://quarkus.io/guides/maven-tooling.html.


### Technologies in project

The main framework used is Quarkus by Red Hat, for the frontend part the framework used is Angular.

Before generate a full JAR, please build Angular part via (inside folder /src/main/angular/hotel-ng)
```shell script
ng build
```

This will generate the frontend page in the Quarkus static files folder.

### Related guides

#### RESTEasy JAX-RS

<p>REST APIs creator and exposer</p>

Guide: https://quarkus.io/guides/rest-json

#### Fault tolerance

<p>Error management and resilient applications</p>

Guide: https://quarkus.io/guides/microprofile-fault-tolerance

#### Agroal datasource

<p>Database manager and injectable (used with MySQL in this project)</p>
<p><i>If you run in 'IN_MEMORY' mode, the datasource use will be skipped</i></p>

Guide: https://quarkus.io/guides/datasource

#### CDI

<p>Context Dependency and Injection, used to inject in the logic the Java beans</p> 

Guide: https://quarkus.io/guides/cdi

#### Microprofile Config

<p>Read and inject properties and env variables configuration in your app</p>

Guide: https://quarkus.io/guides/config

#### Health Check

<p>A simple REST exposer with application data, in order to check if application is up and running.<br>
Check the <a href="http://localhost:8080/health">localhost:8080/health</a> if you running in dev mode</p>

Guide: https://quarkus.io/guides/microprofile-health

#### Test: JUnit

<p>Simple use JUnit for unit tests, the core is managed by Quarkus. Rest call managed by restassured</p>

Guide: https://quarkus.io/guides/getting-started-testing

### Provided examples

#### RESTEasy JAX-RS example

REST is easy peasy with this Hello World RESTEasy resource.

[Related guide section...](https://quarkus.io/guides/getting-started#the-jax-rs-resources)

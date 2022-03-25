cd src/main/angular/login-ng
npm i
ng build --configuration production
cd ../../../..
./mvnw clean package -Dquarkus.kubernetes.deploy=true -DskipTests

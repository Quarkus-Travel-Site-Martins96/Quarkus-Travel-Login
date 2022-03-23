cd src/main/angular/login-ng
npm i
ng build --prod
cd ../../../..
./mvnw clean package -Dquarkus.kubernetes.deploy=true -DskipTests

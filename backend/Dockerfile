FROM openjdk:21
RUN mkdir /opt/app
COPY . .
# clean up the file
RUN apt-get update && apt-get install -y dos2unix
RUN dos2unix ./mvnw

RUN ./mvnw dependency:resolve

RUN ./mvnw clean install -DskipTests
ENTRYPOINT  ["./mvnw", "java", "-jar", "target/EscolaWilliams-0.0.1-SNAPSHOT.jar"]

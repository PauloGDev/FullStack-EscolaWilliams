FROM openjdk:21
RUN mkdir /opt/app
COPY . .
RUN ./mvnw clean install -DskipTests
ENTRYPOINT  ["./mvnw,", "java", "-jar", "target/EscolaWilliams-0.0.1-SNAPSHOT.jar"]

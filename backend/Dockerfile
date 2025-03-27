FROM openjdk:21
RUN mkdir /opt/app
RUN ./mvnw clean package install -DskipTests
COPY . .
ENTRYPOINT  ["java", "-jar", "target/EscolaWilliams-0.0.1-SNAPSHOT.jar"]

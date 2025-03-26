FROM openjdk:21
RUN mkdir /opt/app
COPY . .
RUN ./mvnw clean package install -DskipTests
ENTRYPOINT  ["java", "-jar", "target/EscolaWilliams-0.0.1-SNAPSHOT.jar"]

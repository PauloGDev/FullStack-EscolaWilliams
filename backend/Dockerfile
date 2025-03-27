FROM openjdk:21 
RUN ./mvnw clean install -DskipTests
COPY target/*.jar /app.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","/app.jar"]

FROM openjdk:11
WORKDIR /
ADD /paaq-server/build/libs/paaq-server-0.0.1-SNAPSHOT.jar /home/paaq-server-0.0.1-SNAPSHOT.jar
EXPOSE 8080
CMD ["java", "-jar", "/home/paaq-server-0.0.1-SNAPSHOT.jar"]


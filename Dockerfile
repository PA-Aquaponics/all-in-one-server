FROM openjdk:11
WORKDIR /
EXPOSE 8080
CMD java -jar /paaq-server/build/libs/paaq-server-0.0.1-SNAPSHOT.jar


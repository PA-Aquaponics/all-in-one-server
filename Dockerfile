FROM openjdk:11
WORKDIR /
ADD paaq-server-0.0.1-SNAPSHOT.jar paaq-server-0.0.1-SNAPSHOT.jar
EXPOSE 8080
CMD java -jar /ppaq-server/build/libs/paaq-server-0.0.1-SNAPSHOT.jar


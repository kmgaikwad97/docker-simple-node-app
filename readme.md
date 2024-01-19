# Node.js Dockerized Project

This is a simple Node.js project Dockerized for easy deployment and testing.

## Prerequisites

Make sure you have Docker installed on your machine. You can download Docker from [here](https://www.docker.com/get-started).

## Build Docker Image

To build the Docker image, run the following command in the project's root directory:

docker image build -t myimage:1 . 

## Run Docker Container

To run the Docker container interactively, use the following command:

docker container run -it myimage:1

# To run the Docker container in detached mode with port mapping, use:

docker run -d -p 3400:3400 --name mynodeapp myimage:1

Replace 3400 with the desired port.

# To stop the running container, use:

docker container stop mynodeapp

# Docker Management
# To view the running Docker containers, use:

docker ps

docker image ls

## !!! IMPORTANT

In Dockerfile, you are using the EXPOSE instruction to expose port 3400. However, the EXPOSE instruction in Docker is more of a documentation feature. It does not actually publish the specified ports. It's used to inform others about the ports that the container is expected to use.

The actual port mapping happens when you run the container using the -p flag in the docker run command.

docker run -p 8080:3400 --name nodeapp myimage:1 
Connected to the port 3400

so if you wanted to check logs or status, so u'll have to open in another terminal 

to avoid this you can write -d flag (detached mode). 


EXPOSE 3400 (THIS IS JUST A INSTRUCTION )

## REAL PORT MAPPING LIKE A BOSS HERE --

docker run -d -p 8080:3400 myimage:1

8080 is the host port. You can access the application on your host machine by visiting http://localhost:8080.
3400 is the container port. This is the port on which your Node.js application inside the container is listening.




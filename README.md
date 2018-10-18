# BOARD MS

This is the started back-end for Board Microservice


# Architecture
	**Model:** NoSQL Database for Boards
	**Controller:** Business logic (HTTP Methods)
	**Routes:** API REST based


# Running

    docker-machine start rancher-server
    docker-machine start rancher-node1
    eval $(docker-machine env rancher-node1)
    docker-compose build
    docker-compose up



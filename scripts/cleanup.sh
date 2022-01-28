#!/bin/bash

docker exec -it minikube docker stop registry
docker exec -it minikube docker rm registry
#!/bin/bash

docker build -f ./server/Dockerfile.dev -t us-project_server ./server
docker build -f ./client/Dockerfile.dev -t us-project_client ./client
# 127.0.0.1:49155 = minikube's port 5000
docker tag us-project_server 127.0.0.1:49155/us-project_server 
docker tag us-project_client 127.0.0.1:49155/us-project_client
docker push 127.0.0.1:49155/us-project_server
docker push 127.0.0.1:49155/us-project_client
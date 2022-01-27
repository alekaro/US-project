build:
sudo docker build -f Dockerfile.dev -t usp/server .

run:
sudo docker run -it --name server -p 4002:5000 usp/server:latest
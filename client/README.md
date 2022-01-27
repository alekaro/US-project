build:
sudo docker build -f Dockerfile.dev -t usp/client .

run:
sudo docker run -it --name client -p 4001:3000 usp/client:latest
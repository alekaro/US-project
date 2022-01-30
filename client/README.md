docker build -f Dockerfile.dev -t client .
docker run -it -p 8080:80 --name client client

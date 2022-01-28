# US-project

launching instruction

1. install [docker](https://docs.docker.com/engine/install/debian/) (this might be also helpful - https://www.digitalocean.com/community/questions/how-to-fix-docker-got-permission-denied-while-trying-to-connect-to-the-docker-daemon-socket)
2. install [minikube](https://minikube.sigs.k8s.io/docs/start/)
3. install [ingress-nginx](https://kubernetes.github.io/ingress-nginx/deploy/) on your new minikube cluster
4. run `/bin/sh ./scripts/init.sh`
5. create and push newly created images to minikube's registry `/bin/sh ./scripts/create-and-push-images.sh`
5. run `minikube kubectl -- apply -f k8s`
6. remember to clean up after yourself `/bin/sh ./scripts/cleanup.sh`
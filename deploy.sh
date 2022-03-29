docker pull thomasdaldockeridtildocker/quizzical:latest
docker rm $(docker ps -a -q)
docker run -it --rm -d -p 80:80 sample:prod

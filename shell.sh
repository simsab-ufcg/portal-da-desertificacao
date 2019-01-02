#!/bin/sh

docker=$(docker ps -aqf "name=swarm.insa.gov.br")

if [ "$docker" == !"$docker" ]

then

  docker rm -f $docker

 else

  echo "$docker: não deu certo"  

fi 

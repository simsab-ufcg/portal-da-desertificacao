#!/bin/sh

docker=$(docker ps -aqf "name=swarm-prod.insa.gov.br")

if [ "$docker" == "$docker" ]

then

   docker rm -f $docker > /dev/null 2>&1 &

 else

  echo "$docker: não deu certo"  

fi 

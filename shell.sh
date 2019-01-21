#!/bin/bash

docker=$(docker ps -aqf "name=swarm.insa.gov.br")
docker_prod=$(docker ps -aqf "name=portaldadesertificacao.insa.gov.br")

if [ "$docker" == "$docker" ]; then
   docker rm -f $docker > /dev/null 2>&1 &
   echo "Apagando Homologação: $docker"

  if [ "$docker_prod" == "$docker_prod" ];then
  docker rm -f $docker_prod > /dev/null 2>&1 &
  echo "Apagando Produção: $docker_prod"

  else 
    exit 0 
  fi
fi


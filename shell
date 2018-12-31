#!/bin/sh

docker=$(docker ps -a|grep '${CNAME}')

if [ -f  $docker ]; then
docker rm -f ${CNAME}; else
/dev/null 2>&1 
fi 

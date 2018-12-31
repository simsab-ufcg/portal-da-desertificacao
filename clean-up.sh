#/bin/bash

docker=$(docker ps -a|grep '${CNAME}')

if [ -f  $docker ]; then
docker rm -f ${CNAME}
fi

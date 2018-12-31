#/bin/bash

if [ -f  docker ps -a|grep '${CNAME}' ]; then
docker rm -f ${CNAME}
fi

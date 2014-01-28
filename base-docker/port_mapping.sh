#!/bin/bash

echo came into port mapping ..

service rinetd stop

IFS=',' read -a array <<< "$TCP_FORWARD"

for element in "${array[@]}"
do
    echo "$element"
    echo "$element" >> /etc/rinetd.conf
done

rinetd -f



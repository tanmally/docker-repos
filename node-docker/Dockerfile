FROM ubuntu:12.10
MAINTAINER bbytes  "info@beyondbytes.co.in"

# Update packages
RUN apt-get update && apt-get -y upgrade

# Install some packages we need
RUN apt-get install -y curl
RUN apt-get install -y gettext-base

# Install Node.JS
RUN cd /usr/local && curl http://nodejs.org/dist/v0.10.22/node-v0.10.22-linux-x64.tar.gz | tar --strip-components=1 -zxf- && cd
RUN npm -g update npm
RUN npm install -g grunt-cli
RUN npm install -g forever

RUN apt-get install -y git-core

# Copy files and run
RUN mkdir -p /dockcloud
RUN mkdir -p /dockcloud/data


ADD Gruntfile.js /dockcloud/Gruntfile.js
ADD package.json /dockcloud/package.json
ADD config.json /dockcloud/config.json
ADD init.sh /dockcloud/init.sh

RUN chmod +x /dockcloud/init.sh


ENTRYPOINT ["/dockcloud/init.sh"]

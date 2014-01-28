FROM ubuntu:12.10
MAINTAINER bbytes  "info@beyondbytes.co.in"

# Update packages
RUN apt-get update && apt-get upgrade

# Install some packages we need
RUN apt-get install -y curl

# Install Node.JS
RUN cd /usr/local && curl http://nodejs.org/dist/v0.10.22/node-v0.10.22-linux-x64.tar.gz | tar --strip-components=1 -zxf- && cd
RUN npm -g update npm
RUN npm install -g forever

# Copy files and run
RUN mkdir /opt/bbytes
RUN cd /opt/bbytes
RUN apt-get install -y git-core
RUN git clone https://github.com/bbytes/proxy-etc.git /opt/bbytes/proxy-etc
RUN cd /opt/bbytes/proxy-etc
RUN mkdir /opt/bbytes/proxy-etc/data
RUN cd /opt/bbytes/proxy-etc; npm install

EXPOSE 80
EXPOSE 3333

CMD cd /opt/bbytes/proxy-etc ; forever app.js

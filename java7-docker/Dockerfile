FROM bbytes/base

MAINTAINER bbytes  "info@beyondbytes.co.in"

# The docker file is created from https://github.com/Krijger/docker-cookbooks/blob/master/jdk7-oracle/Dockerfile
# The docker file is created from bbytes base image so that we can have tcp forwarding feature 

RUN sed 's/main$/main universe/' -i /etc/apt/sources.list
RUN apt-get update
RUN apt-get upgrade -y

RUN apt-get install -y python-software-properties
RUN apt-get install -y software-properties-common
RUN add-apt-repository ppa:webupd8team/java -y

RUN apt-get update
RUN echo oracle-java7-installer shared/accepted-oracle-license-v1-1 select true | /usr/bin/debconf-set-selections

# and install java 7 oracle jdk
RUN apt-get -y install oracle-java7-installer && apt-get clean
RUN update-alternatives --display java
ENV JAVA_HOME /usr/lib/jvm/java-7-oracle


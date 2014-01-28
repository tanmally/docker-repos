FROM bbytes/java7

MAINTAINER bbytes  "info@beyondbytes.co.in"

RUN apt-get -y install tomcat7
RUN echo "JAVA_HOME=/usr/lib/jvm/java-7-oracle" >> /etc/default/tomcat7

RUN sed -i "s|-Xmx128m|-Xmx2024m|g" /etc/default/tomcat7

EXPOSE 8080

ADD tomcat.conf /etc/supervisor/conf.d/
ADD tomcat7.settings /tmp/tomcat7.settings

RUN cat /tmp/tomcat7.settings > /etc/default/tomcat7

RUN chmod 777 -R /var/lib/tomcat7

RUN mkdir -p /var/lib/tomcat7/imagefolder

RUN chmod 777 -R /var/lib/tomcat7/imagefolder

RUN mkdir -p /var/lib/tomcat7/imagefolder/temp

RUN chmod 777 -R /var/lib/tomcat7/imagefolder/temp

RUN mkdir -p /var/lib/tomcat7/imagefolder/temp/thumb

RUN chmod 777 -R /var/lib/tomcat7/imagefolder/temp/thumb

ADD deploy_run.sh /tmp/deploy_run.sh

RUN chmod +x /tmp/deploy_run.sh

ENTRYPOINT ["/tmp/deploy_run.sh"]

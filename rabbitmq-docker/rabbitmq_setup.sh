#!/bin/bash
echo "Enabling rabbitmq_management ..."
/usr/sbin/rabbitmq-plugins enable rabbitmq_management

# Start rabbitmq server 
echo "Starting rabbitmq server ..."
service rabbitmq-server start

echo "Removing 'guest' user and adding 'admin' user to rabbitmq ..."
/usr/sbin/rabbitmqctl add_user admin d1ff1cult@123
/usr/sbin/rabbitmqctl set_user_tags admin administrator
/usr/sbin/rabbitmqctl set_permissions -p / admin ".*" ".*" ".*"
/usr/sbin/rabbitmqctl delete_user guest

# Stop rabbitmq server 
echo "Stopping rabbitmq server ..."
service rabbitmq-server stop

# Starting rabbitmq server after adding admin user 
echo "Restarting rabbitmq server after adding admin user..."
/usr/sbin/rabbitmq-server
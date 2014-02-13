#!/bin/bash

envsubst < config.json > config.temp
mv config.temp config.json
cd /dockcloud 
npm install
grunt
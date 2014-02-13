#!/bin/bash

envsubst < config.json > config.temp
mv config.temp config.json
grunt
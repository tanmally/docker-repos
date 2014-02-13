#!/bin/bash

envsubst < "config.json" > "config.json"
npm install
grunt
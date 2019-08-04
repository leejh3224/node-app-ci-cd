#!/bin/sh

ssh lee@165.22.242.173 <<EOF
    cd ~/node-app-ci-cd
    git pull
    npm install --production
    pm2 restart all
    exit
EOF
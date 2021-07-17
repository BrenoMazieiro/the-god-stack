#!/bin/bash
echo "Will install dependencies..."
yarn install --production=false
echo "Will list directory..."
ls -lah
echo "Will show where is..."
pwd
echo "Will install cypress..."
yarn cy:install
echo "Will run cypress..."
yarn cy:run
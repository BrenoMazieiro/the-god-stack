#!/bin/bash

# When copying files, it will copy hidden as well.
shopt -s dotglob

ERROR='\033[0;31m'
SUCCESS='\033[0;32m'
WARNING='\033[0;33m'
MESSAGE='\033[0;36m'
NC='\033[0m'

SHOW_ERROR () {
  echo -e "${ERROR}ERROR: $1 ${NC}" && exit 1
}

SHOW_WARNING () {
  echo -e "${WARNING}WARNING: $1 ${NC}" && read -p "Press enter to continue or ctrl+c to stop"
}


SHOW_SUCCESS () {
  echo -e "${SUCCESS}$1 ${NC}"
}

SHOW_H1 () {
  printf "\n\n${MESSAGE}### $1${NC}\n"
}

SHOW_H1 "Checking for docker..."
if docker --version; then
  SHOW_SUCCESS "I can feel the presence of docker!"
else
  SHOW_ERROR "You should install docker first!"
fi

SHOW_H1 "Cleaning docker containers..."
if docker ps -a -q && (docker stop $(docker ps -a -q) && docker rm $(docker ps -a -q)); then
  SHOW_SUCCESS "All clean!"
else
  SHOW_SUCCESS "Already clean!"
fi

echo -e '\n'
SHOW_WARNING "
Please, add the lines below in your /etc/hosts file (Mac and Linux) (superuser will be necessary):  \n
127.0.0.1   proxy.local.thegodstack.com \n
127.0.0.1   pg.local.thegodstack.com \n
127.0.0.1   api.local.thegodstack.com \n
127.0.0.1   spa.local.thegodstack.com \n
127.0.0.1   stories.local.thegodstack.com \n
"

if [ ! -f .env ]; then
  SHOW_H1 "Creating .env file"
  if (cp .env_example_local .env) ; then
    SHOW_SUCCESS ".env file successfully created!"
  else
    SHOW_ERROR "I was not able to create the .env file, plese check the errors above!"
  fi

  SHOW_WARNING "Some variables in the .env files should be filled, please take a look at that."
fi

if [ ! -f docker-compose.yml ]; then
  SHOW_H1 "Creating docker-compose.yml file"
  if (cp docker-compose-local.yml docker-compose.yml) ; then
    SHOW_SUCCESS "docker-compose.yml file successfully created!"
  else
    SHOW_ERROR "I was not able to create the docker-compose.yml file, plese check the errors above!"
  fi

  SHOW_WARNING "Some variables in the docker-compose.yml files should be filled, please take a look at that."
fi

SHOW_H1 "Starting all containers..."
if docker-compose up; then
  SHOW_SUCCESS "Online!"
else
  SHOW_WARNING "Something went wrong!"
fi
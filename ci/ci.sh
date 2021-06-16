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

cd ..

if [ ! -f .env ]; then
  SHOW_H1 "Creating .env file"
  if (cp ./ci/.env_example_ci .env) ; then
    SHOW_SUCCESS ".env file successfully created!"
  else
    SHOW_ERROR "I was not able to create the .env file, plese check the errors above!"
  fi

  SHOW_WARNING "Some variables in the .env files should be filled, please take a look at that."
fi

if [ ! -f docker-compose.yml ]; then
  SHOW_H1 "Creating docker-compose.yml file"
  if (cp ./ci/docker-compose-ci.yml docker-compose.yml) ; then
    SHOW_SUCCESS "docker-compose.yml file successfully created!"
  else
    SHOW_ERROR "I was not able to create the docker-compose.yml file, plese check the errors above!"
  fi

  SHOW_WARNING "Some variables in the docker-compose.yml files should be filled, please take a look at that."
fi

SHOW_H1 "Starting all containers..."
if docker-compose up -d; then
  SHOW_SUCCESS "Online!"
else
  SHOW_WARNING "Something went wrong!"
fi
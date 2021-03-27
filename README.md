# The God Stack Starter - Docker Graphql Nodejs React and Apollo

This is a boilerplate! =)

The name GodStack is a joke with the fullStack idea (Front+back)

GodStack should be something like (DBA+Devops+back+front)... maybe more... why not? ;)

## Devops instructions

You gonna need docker and docker-compose on your machine!

#### Docker: https://docs.docker.com/install/

Every distro has its own way to install docker:

- Fedora: https://docs.docker.com/install/linux/docker-ce/fedora/
- Ubuntu: https://docs.docker.com/install/linux/docker-ce/ubuntu/
- Mac: https://docs.docker.com/docker-for-mac/install/

Just find yours googling: docker install < DISTRO NAME >

#### docker-compose: https://docs.docker.com/compose/install/

## Database instructions

Databases available in this project at the moment:
- Mariadb (soon)
- Postgres (as a docker container)
- MongoDb (soon)
- Neo4j (soon)

## BackEnd instructions

**Pattern**: Domain Driven Design (DDD)

More about it: https://bit.ly/2O14Ddp (it will download a pdf)

This is not an Rest API, it is an GraphQl, so there is NO routes, just Qls. (Keep that in your mind!)

Any doubts abou the qls? just go to: https://graphql.org/

Apollo server: https://www.apollographql.com/docs/apollo-server/

## FrontEnd instructions

**Pattern**: Atomic Design

More about it: https://bradfrost.com/blog/post/atomic-web-design/

Apollo Client will take care of this things for us, this is why we are not using redux or axios.
And we are using hooks.

Any Doubts go to:
- Apollo Client: https://www.apollographql.com/docs/react/
- Hooks: https://reactjs.org/docs/hooks-intro.html
- React: https://reactjs.org/
- Atomic Design: https://github.com/diegohaz/arc

Do you like it?
Take a look at: https://github.com/trojanowski/react-apollo-hooks

&nbsp;  
&nbsp;  

# Install

## .env file

Create a .env file in the root folder with the .env_example variables  
Add a sendgrid apikey on the .env (in order to send emails)  
If you don't do that the system will work, but you will not receive an email on user create.

## hosts file (Mandatory)

Change your **/etc/hosts** file and ADD the lines below:  
```
127.0.0.1   proxy.local.thegodstack.com 
127.0.0.1   pg.local.thegodstack.com
127.0.0.1   api.local.thegodstack.com
127.0.0.1   spa.local.thegodstack.com
```

Now it will be possible to use a real full address, and not the old (and lame) **'localhost:port'**

P.S.: There is an hosts file on windows aswell, but I do not know where, try google! =)

## Running
run
`docker-compose up`

# Utils (not mandatory, just a little help!)

## Clean docker
`docker stop $(docker ps -a -q) && docker rm $(docker ps -a -q)`

## execute api bash 
`docker exec -it api.local.thegodstack.com bash`

## execute spa bash 
`docker exec -it spa.local.thegodstack.com bash`

## Create migration
`docker exec -it api.local.thegodstack.com knex migrate:make --migrations-directory migrations <TABLE>`

## Run migration
`docker exec -it api.local.thegodstack.com knex migrate:latest --knexfile knexfile.cjs --esm`

## RollBack migration
`docker exec -it api.local.thegodstack.com knex migrate:down --knexfile knexfile.cjs --esm`

## Change file owner
`sudo chown <USER>:<USER> <FILE>`

## change file permission to executable
`sudo chmod +x install.sh`

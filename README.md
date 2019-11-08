# The God Stack Starter - GraphQl NODEjs React and Apollo

This is a boilerplate! =)

The GodStack is a joke with the fullStack idea (Front+back)

GodStack should be something like (DBA+Devops+back+front)... maybe more... why not?

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
- Mariadb (as a docker container)
- Postgres (soon)
- MongoDb (soon)
- Neo4j (soon)

## BackEnd instructions

This is not an Rest API, it is an GraphQl, so there is NO routes, just Qls.

Any doubts abou the qls? just go to: https://graphql.org/

Apollo server: https://www.apollographql.com/docs/apollo-server/

## FrontEnd instructions

Again, this is not and Rest, so we do not need Redux!
Apollo Client will take care of this things for us.
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

## Install Instructions - Lets do IT!

###  **STEP 1 - Soul preparation**

Grab a beer, wine or juice, because it is just an automated task. =)

###  **STEP 2 - Devops (this may take a bit to complete!)**

####  Build nodejs image (depending on your hardware this may take a while, be **patient!**):

With docker and docker-compose installed jut go to the **ROOT** project folder:

`docker build -t thegodstack-nodejs registry-thegodstack/nodejs` 

#### **STEP 3 - Changing your hosts (MAC AND LINUX)   ==> (MANDATORY) <==**
You need to go to your **/etc/hosts** file and ADD the lines below:  
```
127.0.0.1   proxy.local.thegodstack.com 
127.0.0.1   mariadb.local.thegodstack.com
127.0.0.1   api.local.thegodstack.com
127.0.0.1   spa.local.thegodstack.com
```

Now it will be possible to use a real full address, and not the old (and lame) **'localhost:port'**

P.S.: There is this file on windows aswell, but I do not now where, try google! =)

###  **STEP 4 - Starting everything!**

Creating database:

- MariaDb:  
`docker-compose up -d mariadb.local.thegodstack.com && docker exec -it mariadb.local.thegodstack.com /bin/sh -c "mysql -uroot -pthegodstackpass -hlocalhost -e 'CREATE DATABASE thegodstack'"`

Starting everything:

`docker-compose up`

### **STEP 5 - Seeding**

`docker exec -it api.local.thegodstack.com yarn seedDb`

### **STEP 6 - Access Urls**

* API: api.local.thegodstack.com
* SPA: spa.local.thegodstack.com

### **STEP 7 - Running Test**

* BackEnd (soon): `docker exec -it api.local.thegodstack.com yarn test`
* FrontEdn (in progress): `docker exec -it spa.local.thegodstack.com yarn test`

### **Step 8 - Insomnia (GraphQl)**

We are using GraphQl so Postman is not a good call, but we have insomnia to help us:

Download it here: https://insomnia.rest/download/

If you are using any kind of Linux that is not Ubuntu I strongly recomend to Download the AppImage package.

Here: https://github.com/getinsomnia/insomnia/releases/

ex: Insomnia-7.0.3.AppImage or Insomnia-<LAST_VERSION>.AppImage

Open insomnia and import the confs from: api/docs


## **Extra Info**

As you can figure it out by docker-compose.yml, there is this variables
  - ADMIN_NAME: "Breno Mazieiro"
  - ADMIN_EMAIL: "admin@thegodstack.com"
  - ADMIN_PASS: "thegodstack"

It will be used on seeding!

This is a GraphQl api example using:
- [Nodejs 14 (vanilla with modules)](https://nodejs.org/dist/latest-v14.x/docs/api/)
- [ApolloServer](https://www.apollographql.com/docs/apollo-server/)
- [Jest](https://jestjs.io/docs/en/getting-started)
- [Docker](https://www.docker.com/)
- [PostgreSQL](https://www.postgresql.org/docs/)
- [Knex (Query builder)](http://knexjs.org/)

# Install

You need to go to your **/etc/hosts** file and ADD the lines below:  
```
127.0.0.1   proxy.local.plathanus.com.br 
127.0.0.1   pg.local.plathanus.com.br
127.0.0.1   api.local.plathanus.com.br
```

Now it will be possible to use a real full address, and not the old (and lame) **'localhost:port'**

P.S.: There is an hosts file on windows aswell, but I do not know where, try google! =)

Build image  
`docker build -t nodejs-knex docker-images/nodejs-knex`


Create Database  
`docker-compose up -d db && sleep 20s && docker exec -it pg.local.plathanus.com.br /bin/sh -c "psql -U postgres -c 'CREATE DATABASE plathanus'"`

# Run

`docker-compose up` 


# Tests

`docker exec -it api.local.plathanus.com.br yarn test`

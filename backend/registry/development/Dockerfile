FROM node:14.16.0-alpine3.13

WORKDIR /opt/app-root/src

RUN npm install -g knex
RUN apk add --no-cache bash
RUN apk add --no-cache dumb-init
RUN chown node:node /opt/app-root/src
USER node

CMD [ "dumb-init", "node" ]

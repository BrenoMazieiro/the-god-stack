FROM node:14.16.0-alpine3.13

WORKDIR /opt/app-root/src
RUN npm install -g knex
RUN apk add --no-cache dumb-init
RUN chown node:node /opt/app-root/src
USER node
COPY --chown=node:node . /opt/app-root/src
RUN ls -lah
RUN yarn install --prodution=true

CMD ["dumb-init", "node", "src/index.js"]

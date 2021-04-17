FROM node:14.16.0-alpine3.13

WORKDIR /opt/app-root/src
RUN apk add --no-cache bash
COPY public public
COPY wait-for-it.sh .
COPY run .
RUN yarn global add serve

CMD serve public -l tcp://0.0.0.0:3000 -s
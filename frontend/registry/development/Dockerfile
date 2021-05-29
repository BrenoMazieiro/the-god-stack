FROM node:14.16.1-buster-slim

WORKDIR /opt/app-root/src

RUN apt update -y
RUN apt install -y bash
RUN apt install -y libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb
RUN apt install -y dumb-init
# RUN chown node:node /opt/app-root/src
# USER node

CMD [ "dumb-init", "node" ]

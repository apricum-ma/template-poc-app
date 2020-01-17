FROM node:8

RUN apt-get update && \
    apt-get install -y curl python make g++ gcc libstdc++6 && \
    npm install --quiet node-gyp npm3 eslint -g


COPY package.json package.json
ENV PATH=/usr/bin:$PATH
RUN pwd

WORKDIR /root/workspace

RUN apt-get -y update --print-uris && apt-get -y upgrade --print-uris

RUN apt-get -y update

RUN npm i -g n

RUN n 10.16.0

LABEL version="1.0"
LABEL description="Image for devops sps dashboard."

USER root

COPY ./ /apps/demo

WORKDIR /apps/demo

RUN npm install
RUN npm rebuild node-sass

RUN npm install http-server

EXPOSE 9001

RUN npm run build

RUN npm i -g react-scripts

RUN react-scripts test --watchAll --forceExit

CMD [ "node_modules/http-server/bin/http-server", "-p", "9001", "build/" ]

 
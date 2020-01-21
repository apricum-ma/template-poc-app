FROM gcr.io/payment-platform-204588/node-base:latest

COPY ./ /apps/demo

WORKDIR /apps/demo

RUN npm install
RUN npm rebuild node-sass

EXPOSE 9001

RUN npm run build

RUN react-scripts test --watchAll=false

CMD [ "http-server", "-p", "9001", "build/" ]

 
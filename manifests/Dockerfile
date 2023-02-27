FROM node:16
WORKDIR /Time-Clock
COPY . .
RUN npm i
WORKDIR /Time-Clock/app
RUN npm run build
RUN mv build ../api
# RUN npm run build
EXPOSE 3000
WORKDIR /Time-Clock/api
CMD [ "node", "server.js" ]
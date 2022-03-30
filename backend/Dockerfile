# Dockerfile for my-website backend
#docker build -t node-app .

FROM node:17.3.0

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

#try getting nodemon to work
RUN npm install nodemon -g 

COPY package*.json ./

RUN npm install --silent

COPY . .

EXPOSE 4000

CMD ["npm", "start"]

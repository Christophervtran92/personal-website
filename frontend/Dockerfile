# Dockerfile for my-website frontend
#docker build -t react-app .

FROM node:17.3.0

WORKDIR /usr/src/app

COPY package*.json ./

COPY . .

RUN npm install --silent

EXPOSE 3000

CMD ["npm", "start"]

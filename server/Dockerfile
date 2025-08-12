FROM node:20-alpine

RUN apk add --no-cache python3 make g++

WORKDIR /server-app

COPY package.*json ./
COPY . .

RUN npm install 

CMD ["npm", "run", "dev"]
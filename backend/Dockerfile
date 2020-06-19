FROM node:12-alpine

WORKDIR /node-app

COPY package.json .

RUN npm install --quiet

COPY . .

EXPOSE 3333

CMD ["npm", "run", "dev"]

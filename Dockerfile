FROM node:14.19.0

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package*.json /usr/src/app/
RUN npm install

COPY . /usr/src/app

RUN npm run build
EXPOSE 3001

CMD ["npm", "run", "dev"]
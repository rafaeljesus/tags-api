FROM node:5

RUN mkdir -p /tags-api

WORKDIR /tags-api

COPY package.json /tags-api/
RUN npm install
COPY . /tags-api

EXPOSE 8080

CMD ["npm", "start"]

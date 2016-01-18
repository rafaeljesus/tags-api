FROM node:5

ADD . /tags-api

WORKDIR /tags-api

RUN npm i

CMD ["npm", "start"]

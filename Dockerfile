FROM node:22-alpine

WORKDIR /usr/src/app

COPY . .

RUN yarn install --frozen-lockfile && yarn cache clean

USER node

EXPOSE 3000

CMD [ "yarn", "start"]

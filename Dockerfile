# install deps stage

FROM node:18.17.0-slim AS deps

WORKDIR /app

RUN npm install -g yarn --force

RUN yarn set version 4.0.2

COPY package.json yarn.lock .yarnrc.yml .

COPY packages/ ./packages/

COPY services/web/package.json ./services/web/package.json

RUN yarn install

# build stage

FROM node:18.17.0-slim AS builder

WORKDIR /app

EXPOSE 3000

RUN npm install -g yarn --force

COPY --from=deps /app/ .

COPY services/ ./services/

RUN yarn workspace web build

ENTRYPOINT ["yarn", "workspace", "web", "start"]
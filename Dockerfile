# node.js 압축 이미지를 설치합니다
FROM node:18.17.0-alpine as BUILD

# yarn 설치
RUN npm install -g yarn --force

# 이미지 내부 작업 경로를 설정합니다
WORKDIR /app

COPY . .

RUN yarn set version 4.0.2

RUN yarn install

RUN /bin/sh -c yarn workspace web build

# 이미지 정리 
RUN rm -rf node_modules && \
    rm -rf /usr/local/share/.cache && \
    yarn workspaces focus && \
    yarn cache clean

FROM node:18.17.0-alpine
EXPOSE 3000

WORKDIR /app

COPY --from=BUILD /app/ .

# 앱 시작 명령어"를 시작합니다.
ENTRYPOINT ["yarn", "workspace", "web", "start"]
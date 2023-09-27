FROM node:16 AS build-stage

WORKDIR /usr/src/app

COPY . .

RUN npm install

RUN npm run build

FROM nginx:1.20-alpine AS production-stage

COPY --from=build-stage /usr/src/app/dist /usr/share/nginx/html
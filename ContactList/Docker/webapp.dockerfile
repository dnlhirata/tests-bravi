FROM node:lts-alpine as build-stage
WORKDIR /app
COPY ./ContactList.Presentation.WebApp/package*.json ./
RUN npm install
COPY ./ContactList.Presentation.WebApp .
RUN npm run build
EXPOSE 80

FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
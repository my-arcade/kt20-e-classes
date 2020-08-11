# build react app
FROM node:12.18.3-alpine as builder

WORKDIR /app

# add node modules to path
ENV PATH /app/node_modules/.bin:$PATH
COPY ./packages/frontend/package.json /app/frontend/
COPY ./packages/frontend/yarn.lock /app/frontend/
RUN cd /app/frontend && yarn --no-cache 
# frontend package
COPY ./packages/frontend /app/frontend/

# models package
COPY ./packages/models /app/models
COPY ./packages/app-ui /app/app-ui

RUN cd /app/frontend && yarn build

# prepare container for production environment
FROM nginx:1.29.2-alpine

COPY --from=build /app/frontend/dist /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d

# not taken into account, just as a hint to which port we want to bind
# also listen to in the nginx config
EXPOSE 3005

CMD ["nginx", "-g", "daemon off;"]
#
# The Dark Society Cloud
#
FROM node:18.18.0-alpine3.18 AS build

LABEL maintainer="Rye Miller" \
      vendor="The Dark Society <containers@darksociety.cloud>" \
      version="0.1.0"

# ENV PATH /usr/src/app/node_modules/.bin:$PATH
# ENV NODE_ENV production

# RUN mkdir -p /usr/src/app
WORKDIR '/usr/src/app'

COPY package*.json yarn.lock ./
RUN yarn install

COPY . ./
RUN yarn build


FROM nginx:alpine
COPY --from=build /usr/src/app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

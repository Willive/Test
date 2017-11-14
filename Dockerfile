FROM node
WORKDIR /usr/src/app
COPY package.json .
RUN apt-get update \
 && npm install --quiet \
 && npm install pm2 -g
COPY . .
CMD ["pm2-docker", "ecosystem.config.js"]
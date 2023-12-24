FROM node
WORKDIR /usr/app
COPY package.json .
RUN npm install
COPY . .
COPY ./config /docker-entrypoint-initdb.d
EXPOSE 3005
CMD ["node", "src/app.js"]


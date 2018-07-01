FROM node:8.11.1-alpine

# Create app directory
WORKDIR /usr/src/app


# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./
COPY webpack.config.js ./
ADD src src

ADD src/server.js dist/

RUN npm install --mode=production
RUN npm install bootstrap jquery popper.js
RUN npm install exports-loader 

RUN npm install autoprefixer css-loader node-sass postcss-loader sass-loader style-loader webpack webpack-cli 

RUN npm run build

# If you are building your code for production
# RUN npm install --only=production

# Bundle app source

EXPOSE 8080

CMD [ "npm", "start" ]
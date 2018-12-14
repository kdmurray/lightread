# Base Image
FROM node:8

# Create Working Directory
WORKDIR /usr/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

COPY . .

RUN npm install

EXPOSE 3001

CMD [ "npm", "start" ]

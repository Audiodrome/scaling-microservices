FROM node:carbon
WORKDIR /usr/src/app
COPY package*.json ./

# If you are building your code for production
# RUN npm install --only=production
RUN npm install
COPY . .

EXPOSE 8000
CMD ["npm", "start"]
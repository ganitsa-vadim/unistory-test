FROM node:18.12.0-alpine

COPY . .

RUN npm install
RUN npm install -g serve

EXPOSE 3000

# CMD serve -s build
CMD npm run start
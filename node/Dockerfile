FROM node:23.3.0-slim

WORKDIR "/usr/src/app/"

COPY [".", "/usr/src/app/"]

RUN npm install

EXPOSE 3000

CMD ["npm", "run", "start"]

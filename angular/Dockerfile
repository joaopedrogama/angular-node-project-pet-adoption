FROM node:23.3.0-slim

WORKDIR "/usr/src/app/"

COPY [".", "/usr/src/app/"]

RUN npm install
RUN npm install @angular/cli

EXPOSE 4200

CMD ["ng", "server"]

FROM node:16-alpine as build-deps

# JUST for the test
RUN mkdir  -p  /
WORKDIR  /
COPY .  /

COPY ["package.json", "package-lock.json*","yarn.lock", "./"]
RUN yarn
EXPOSE 5000
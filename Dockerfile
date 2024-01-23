# Get the base image of Node version 16
FROM node:20-bookworm

RUN npx -y playwright@1.41.1 install --with-deps

# Set the work directory for the application
WORKDIR /app

# Set the environment path to node_modules/.bin
ENV PATH /app/node_modules/.bin:$PATH

# COPY the needed files to the app folder in Docker image
COPY package.json /app/
COPY tests/ /app/tests/
COPY tools/ /app/tools/
COPY storybook-static/ /app/storybook-static
COPY playwright.config.js/ /app/playwright.config.js

# Get the needed libraries to run Playwright
RUN apt-get update && apt-get -y install libnss3 libatk-bridge2.0-0 libdrm-dev libxkbcommon-dev libgbm-dev libasound-dev libatspi2.0-0 libxshmfence-dev

# Install the dependencies in Node environment
RUN npm install

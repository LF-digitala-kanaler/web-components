# FROM node:18 AS node_base
FROM mcr.microsoft.com/playwright:v1.43.0-jammy

# COPY --from=node_base / /

# Set the work directory for the application
WORKDIR /app

# Set the environment path to node_modules/.bin
ENV PATH /app/node_modules/.bin:$PATH

# COPY the needed files to the app folder in Docker image
COPY package.json /app/
COPY tests/ /app/tests/
COPY storybook-static/ /app/storybook-static
COPY .storybook/ /app/.storybook
COPY ./configs/playwright.config.js/ /app/configs/playwright.config.js

# RUN apt-get update
# Get the needed libraries to run Playwright
# RUN apt-get -y install libnss3 libatk-bridge2.0-0 libdrm-dev libxkbcommon-dev libgbm-dev libasound-dev libatspi2.0-0 libxshmfence-dev

# RUN npx -y playwright@1.41.1 install --with-deps

# Install the dependencies in Node environment
RUN npm install

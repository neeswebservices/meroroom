FROM node:18-alpine
WORKDIR /app
COPY package.json .
COPY vite.config.js .
RUN yarn
COPY . .
EXPOSE 3000
CMD ["yarn", "dev", "--debug"]
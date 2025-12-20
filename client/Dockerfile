FROM node:lts-alpine AS base
WORKDIR /app/client
COPY package*.json .
RUN npm install

FROM base AS dev
COPY . .
EXPOSE 5173
CMD ["npm", "run", "dev"]

FROM base AS build
COPY . .
EXPOSE 4173
CMD ["sh", "-c", "npm run build && npm run preview"]


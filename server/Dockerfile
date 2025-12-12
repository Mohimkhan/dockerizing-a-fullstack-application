FROM node:lts-alpine AS base
WORKDIR /app/server
COPY package*.json .
RUN npm install 

FROM base AS development
COPY . .
EXPOSE 4000
CMD ["npm", "run", "dev"]

FROM base AS production
COPY . .
EXPOSE 4000
CMD ["npm", "run", "start"]
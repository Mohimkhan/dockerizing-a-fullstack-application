# For starting the app or as starter
FROM node:lts-alpine AS base
WORKDIR /app/server
COPY package*.json .
RUN npm install 

# For development
FROM base AS development
COPY . .
EXPOSE 4000
CMD ["npm", "run", "dev"]

# For production
FROM base AS production
COPY . .
EXPOSE 4000
CMD ["npm", "run", "start"]
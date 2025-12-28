# For starting the app or as starter
FROM node:lts-alpine AS base
WORKDIR /app/client
COPY package*.json .
RUN npm install

# For building the app
FROM base AS builder
COPY . .
RUN npm run build 

# For development
FROM base AS dev
COPY . .
EXPOSE 5173
CMD ["npm", "run", "dev"]

# For production
FROM node:lts-alpine AS production
WORKDIR /app/client
COPY --from=builder app/client/node_modules ./node_modules
COPY --from=builder app/client/package.json ./package.json
COPY --from=builder app/client/package-lock.json ./package-lock.json
COPY --from=builder app/client/dist ./dist
EXPOSE 4173
CMD ["npm", "run", "preview"]


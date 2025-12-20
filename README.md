# Dockerizing a Dummy FullStack App

A complete Full Stack application containerized with Docker, featuring a React frontend, Node.js/Express backend, and MongoDB database.

## 🚀 Project Overview

This project demonstrates how to dockerize a dummy full-stack application using **Docker Compose**. It sets up three containerized services:

1.  **Client**: A React application built with Vite.
2.  **Server**: A Node.js Express REST API.
3.  **Database**: A MongoDB instance.

### 🐳 Multi-Stage Dockerization

This project utilizes **multi-stage Docker builds** to optimize images for different environments. This allows flexibility in building the application for either **development** (with hot-reloading) or **production** (optimized static assets).

By default, the `docker-compose.yml` is configured for the **production** build. If you wish to build for development or production, you simply need to change the `target` value in the `docker-compose.yml` file:

- **Production**: Set `target: build` (serves optimized build on port `4173`).
- **Development**: Set `target: dev` (runs dev server with hot-reloading on port `5173`).

## 🛠️ Tech Stack

- **Frontend**: React, Vite, React Toastify
- **Backend**: Node.js, Express, Mongoose
- **Database**: MongoDB
- **DevOps**: Docker, Docker Compose

## 📋 Prerequisites

Before you begin, ensure you have the following installed on your machine:

- [Docker Desktop](https://www.docker.com/products/docker-desktop/)

## 🏁 Getting Started

Follow these steps to get the application running locally using Docker.

### 1. Clone the Repository

```bash
git clone <repository-url>
cd docker-practise-with-fullstack-app
```

### 2. Run with Docker Compose

Build and start all services with a single command:

```bash
docker-compose up --build
```

This command will:

- Build the frontend and backend images.
- Start the MongoDB container.
- Connect the services together on a shared network.

## 🌐 Available Ports

Once the application is running, you can access the services at the following URLs:

| Service         | URL                                            | Description                                     |
| :-------------- | :--------------------------------------------- | :---------------------------------------------- |
| **Frontend**    | [http://localhost:4173](http://localhost:4173) | Main application interface (Production Preview) |
| **Backend API** | [http://localhost:4000](http://localhost:4000) | Backend REST API                                |
| **MongoDB**     | `localhost:27017`                              | Database connection                             |

> **Note**: The frontend is built and served using `vite preview` on port **4173** as defined in the `docker-compose.yml` (target: build).

## 🛑 Stopping the Application

To stop the containers and remove the networks, press `Ctrl+C` in your terminal or run:

```bash
docker-compose down
```

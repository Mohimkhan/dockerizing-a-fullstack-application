# Dockerizing a Dummy FullStack App

A complete Full Stack application containerized with Docker, featuring a React frontend, Node.js/Express backend, and MongoDB database.

## 🚀 Project Overview

This project demonstrates how to dockerize a dummy full-stack application using **Docker Compose**. It sets up three containerized services:

1.  **Client**: A React application built with Vite.
2.  **Server**: A Node.js Express REST API.
3.  **Database**: A MongoDB instance.

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

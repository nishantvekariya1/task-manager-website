# Tasktracker - Task Management Website

Tasktracker is a task management website built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It includes a dashboard, progress-wise task pages, a trash system for restoring tasks for admins, and dashboards and progress-wise task pages for normal users.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)

## Demo

![Demo Screenshot](https://github.com/nishantvekariya1/task-manager-website/blob/master/Screenshots/1.png)
![Demo Screenshot](https://github.com/nishantvekariya1/task-manager-website/blob/master/Screenshots/2.png)
![Demo Screenshot](https://github.com/nishantvekariya1/task-manager-website/blob/master/Screenshots/3.png)
![Demo Screenshot](https://github.com/nishantvekariya1/task-manager-website/blob/master/Screenshots/4.png)
![Demo Screenshot](https://github.com/nishantvekariya1/task-manager-website/blob/master/Screenshots/5.png)
![Demo Screenshot](https://github.com/nishantvekariya1/task-manager-website/blob/master/Screenshots/6.png)
![Demo Screenshot](https://github.com/nishantvekariya1/task-manager-website/blob/master/Screenshots/7.png)
![Demo Screenshot](https://github.com/nishantvekariya1/task-manager-website/blob/master/Screenshots/8.png)
![Demo Screenshot](https://github.com/nishantvekariya1/task-manager-website/blob/master/Screenshots/9.png)
![Demo Screenshot](https://github.com/nishantvekariya1/task-manager-website/blob/master/Screenshots/10.png)
![Demo Screenshot](https://github.com/nishantvekariya1/task-manager-website/blob/master/Screenshots/11.png)

## Features

- **Admin Panel**:
  - Dashboard: Overview of tasks and statistics
  - Progress-wise Task Pages: Tasks categorized by their progress status (e.g., To Do, In Progress, Done)
  - Trash System: Restore deleted tasks

- **User Panel**:
  - Dashboard: Overview of user-specific tasks
  - Progress-wise Task Pages: Tasks categorized by their progress status (e.g., To Do, In Progress, Done)

## Technologies Used

- **MongoDB**: NoSQL database for storing task data
- **Express.js**: Web application framework for Node.js
- **React.js**: Frontend library for building user interfaces
- **Node.js**: JavaScript runtime for server-side development
- **Mongoose**: ODM for MongoDB
- **JWT**: JSON Web Tokens for authentication

## Getting Started

### Prerequisites

- Node.js
- npm
- MongoDB

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/nishantvekariya1/task-manager-website
    ```

2. Install the dependencies for both the client and server:
    ```bash
    # In the server directory
    cd server
    npm install

    # In the client directory
    cd client
    npm install
    npm install -D tailwindcss
    npx tailwindcss init
    ```

3. Create a `.env` file in the root directory and add the following environment variables:
    ```env
    # In the server directory
    NODE_ENV=development
    MONGODB_URI=your_mongo_url
    JWT_SECRET=your_jwt_secret_key
    PORT=write_your_port_number
    
    # In the client directory
    VITE_APP_FIREBASE_API_KEY=your_firebase_api_key
    VITE_APP_BASE_URL=your_server_base_url
    ```

4. Start the development servers:
    ```bash
    # In the server directory
    cd server
    npm run start

    # In the client directory
    cd client
    npm run dev
    ```
5. Setup some files:
    ```bash
    # In the tailwind.config.js directory
    /** @type {import('tailwindcss').Config} */
    export default {
      content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
      theme: {
        extend: {},
      },
      plugins: [],
    };

    # In the vite.config.js directory
    import { defineConfig } from "vite";
    import react from "@vitejs/plugin-react";
    
    // https://vitejs.dev/config/
    export default defineConfig({
      plugins: [react()],
      server: {
        port: 3000,
        proxy: {
          "/api": {
            target: "your_server_base_url",
            changeOrigin: true,
          },
        },
      },
    });
    ```

6. Open your browser and navigate to `http://localhost:3000` to view the Tasktracker application.

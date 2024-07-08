# User-Service Microservice

This repository contains the implementation of the User-Service microservice for managing user-related operations.
This aplication was developed by students Saragozin Sara and Salguero Nexar

## Introduction

The User-Service microservice provides endpoints to manage user data.
## Features

- Create a new user
- Retrieve user information

## Technologies

- Node.js
- Express.js
- Docker (for containerization)

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js (v14.x or later)
- npm (Node Package Manager) or yarn
- MongoDB (or another database) installed and running locally or accessible remotely

### Installation

**1. Clone the repository:**

   ```bash
   git clone [https://github.com/SaraSaragozin/user-service.git](https://github.com/SaraSaragozin/user-service.git)
   cd user-service   
  ```
**2. Install dependencies:** 
  ```bash
npm init -y
npm install
  ```
  
**3. Configuration**
PORT=8081 or local 3001
MONGODB_URI=mongodb://localhost:27017/userdb

  ```bash
npm start or node index.js
The server will start on port 3001 by default
  ```
API Endpoints
POST /users: 

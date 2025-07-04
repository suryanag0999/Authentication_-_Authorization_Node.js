# 🔐 Mini Auth System – Node.js, Express, MongoDB, JWT

A simple and secure **authentication & authorization system** built with Node.js and Express. This mini project demonstrates how to register users, log them in, issue JWT tokens (stored as HTTP-only cookies), and protect routes using custom middleware.

---

## 🚀 Features

- ✅ User Registration with hashed passwords (`bcryptjs`)
- ✅ Secure Login with JWT token generation
- ✅ HTTP-only Cookie-based token storage
- ✅ Protected routes with custom middleware
- ✅ Express.js + MongoDB + Mongoose setup
- ✅ Easy integration with React frontend

---

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB, Mongoose
- **Auth**: JWT (JSON Web Token), bcryptjs
- **Other**: dotenv, cookie-parser, cors

---

## 📁 Project Structure

mini-auth-system/
├── controllers/ # Auth logic (register, login)
├── models/ # Mongoose user schema
├── routes/ # API routes
├── middleware/ # Route protection middleware
├── server.js # Entry point to start the server
├── app.js # Express setup and middleware
├── .env.example # Environment variable template
└── .gitignore # Excludes .env and node_modules
2. Install dependencies
bash
Copy code
npm install
3. Create a .env file
Create a .env file in the root directory and add the following:

env
Copy code
PORT=5000
MONGO_URI=mongodb://localhost:27017/authdemo
JWT_SECRET=your_jwt_secret_key
Or copy from .env.example and edit:

bash
Copy code
cp .env.example .env
4. Start the server
bash
Copy code
npm run dev
Server will run on http://localhost:5000

leran more on hashnode 
https://auth-system-nodejs-jwt.hashnode.dev/user-authentication-and-authorization-system-in-nodejs



# ZipURL 🔗

## 📝 Description
**ZipURL** is a secure and efficient URL shortener web app with user authentication and personal dashboards.  
It allows users to shorten long URLs and store them in their private dashboard to access and manage them later.  
Ideal for anyone who wants a **minimal, secure, and trackable link management** system.

## 🚀 Features
- 🔐 User Signup & Login Authentication
- 📦 Shorten long URLs quickly and efficiently
- 🧾 Personalized dashboard showing all your shortened links
- ⏱️ Access and reuse previously created short links
- 🌐 EJS-based dynamic UI templates
- 📁 Organized backend structure for scalability

## 🧰 Tech Stack

- **Frontend**: EJS Templates, HTML, CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Other**: 
  - Mongoose (for DB interactions)
  - Bcrypt (password hashing)
  - Express-session (session management)
  - Custom middleware for auth
  - MVC-style project structure

## 📂 Folder Structure (based on your project)
```text
ZipURL/
│
├── controllers/          # Business logic for routes
├── middlewares/          # Custom auth middleware
├── models/               # Mongoose schemas for URL & User
├── routes/               # URL routing definitions
├── service/              # Authentication service logic
├── views/                # EJS templates (home, login, signup)
├── index.js              # Entry point
├── connect.js            # DB connection
├── package.json          # Project config and dependencies
└── README.md             # This file

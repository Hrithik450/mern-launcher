## Powered By CodeEase 🚀

[![NPM Version](https://img.shields.io/npm/v/mern-launcher.svg)](https://www.npmjs.com/package/mern-launcher)
[![License](https://img.shields.io/npm/l/mern-launcher.svg)](https://github.com/yourusername/mern-launcher/blob/main/LICENSE)
[![Downloads](https://img.shields.io/npm/dm/mern-launcher.svg)](https://www.npmjs.com/package/mern-launcher)

---

### ⬇️ Installation

```sh
npx mern-launcher@2.0.15
```

### 🚀 Introduction

mern-launcher automates setting up frontend and backend folders, installing dependencies, and initializing servers, making development faster and hassle-free.

---

### 🛠 Features

- ✅ Automatic Folder Setup.
- ✅ Installs Dependencies Automatically.
- ✅ Fast and Efficient Setup.
- ✅ Built-in Routing System.
- ✅ Built-in Tailwind CSS Configuration.
- ✅ Built-in Redux Toolkit with Store and Slices.
- ✅ Supports React.js, Node.js, Express.js, Tailwind CSS, MongoDB.

📜 **License**: MIT License

---

This project is licensed under the MIT License.

### 🎯 Usage

To create a new project, run:

```sh
npx mern-launcher@2.0.15
```

You will be prompted with:

- You can enter '.' for current dir, '..' to go back one level, or a full path for a custom location
- Enter the directory: ..
- Enter project name: Demo

This will generate:

```sh
Demo/
├── frontend/ (React.js setup)
└── backend/ (Express/Node.js setup)
```

### 📦 Module Type Selection

```sh
Which module type do you prefer? (Enter 'cjs' for CommonJS or 'esm' for ES Module):
```

```sh
esm
```

### 🎨 Select a Framework

```sh
React
```

### 🛠 Select a Variant

```sh
JavaScript
```

---

### 📂 Project Structure

### **Frontend Folder Structure**

```sh
frontend/
│── public/ # Static assets (favicon, manifest, images)
│── src/
│ ├── assets/ # Images, fonts, etc.
│ ├── components/ # Reusable components
│ │ ├── common/ # UI components (Button, Input, Loader)
│ │ ├── layout/ # Layout components (Navbar, Sidebar)
│ │ ├── home/ # Home-related components (ProductCard)
│ ├── features/ # Redux slices (Redux Toolkit)
│ │ ├── authSlice.jsx # Authentication slice
│ ├── hooks/ # Custom hooks
│ ├── pages/ # Page components
│ │ ├── Home.jsx # Home page
│ ├── routes/ # Routing files
│ │ ├── PrivateRoute.jsx
│ │ ├── AppRoute.jsx
│ │ ├── AdminRoute.jsx
│ │ ├── index.jsx
│ ├── store/ # Redux store configuration
│ ├── utils/ # Helper functions
│ ├── App.jsx # Main app component
│ ├── main.jsx # Entry point
│ ├── App.css # Stylesheet
│ ├── index.css # Stylesheet
│── .env # Environment variables
│── package.json # Dependencies
│── README.md # Project info
```

### **Backend Folder Structure**

```sh
backend/
│── src/
│ ├── config/ # Configuration files (DB, secrets, etc.)
│ │ ├── db.js # MongoDB connection
│ │ ├── config.env # Secret keys
│ ├── controllers/ # Route handlers
│ │ ├── authController.js
│ ├── middlewares/ # Custom middlewares
│ │ ├── authMiddleware.js
│ │ ├── errorHandler.js
│ ├── models/ # Mongoose models
│ │ ├── User.js
│ ├── routes/ # API routes
│ │ ├── authRoutes.js
│ ├── utils/ # Utility functions
│ │ ├── generateToken.js
│ │ ├── catchAsync.js
│ ├── index.js # Server entry point
│── .env # Environment variables
│── package.json # Dependencies
│── README.md # Project info
```

---

### 🚀 Start the Servers

- Before starting the server, configure the `.env` file.

### Start the Frontend:

```sh
cd Demo/frontend
npm run dev
```

### Start the Backend:

```sh
cd Demo/backend
npm run dev
```

✅ **Basic MERN platform setup completed successfully!**

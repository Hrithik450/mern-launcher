mkdir backend
cd backend

npm init -y

npm install express mongoose cors dotenv jsonwebtoken bcryptjs nodemon ejs path cookie-parser url

echo -e "${BLUE}Which module type do you prefer? (Enter 'cjs' for CommonJS or 'esm' for ES Module):${NC}"
read MODULE_TYPE

if [ "$MODULE_TYPE" == "esm" ]; then
    sed -i 's/"scripts":/"type": "module",\n "scripts":/' package.json
fi 

sed -i '/"scripts": {/,/},/c\
  "scripts": {\n    "start": "node index.js",\n    "dev": "nodemon index.js"\n  },' package.json

mkdir -p {config,controllers,middlewares,models,routes,utils}
touch config/config.env
touch controllers/{authController.js}
touch middlewares/{authMiddleware.js,errorHandler.js,catchAsyncError.js}
touch models/{User.js}
touch routes/{authRoutes.js}
touch utils/{generateToken.js}

echo "MONGO_URI=your_mongodb_connection_string
PORT=5000
FRONTEND_URL=http://localhost:5173" > config/config.env

if [ "$MODULE_TYPE" == "esm" ]; then
    cat <<EOF > config/db.js
import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(\`MongoDB Connected: \${conn.connection.host}\`);
    } catch (error) {
        console.error(\`Error: \${error.message}\`);
        process.exit(1);
    }
};

export default connectDB;
EOF
else
    cat <<EOF > config/db.js
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(\`MongoDB Connected: \${conn.connection.host}\`);
    } catch (error) {
        console.error(\`Error: \${error.message}\`);
        process.exit(1);
    }
};

module.exports = connectDB;
EOF
fi 

if [ "$MODULE_TYPE" == "esm" ]; then
    cat <<EOF > index.js
import path from 'path';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import cookieParser from 'cookie-parser';
import connectDB from './config/db.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, "config/config.env") });

const app = express();
const FRONTEND_URL = process.env.FRONTEND_URL;

app.use(
  cors({
    origin: FRONTEND_URL,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();

app.get('/', (req, res) => {
    res.send('API is running...');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(\`Server running on port \${PORT}\`));
EOF
else 
    cat <<EOF > index.js
const path = require('path');
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const connectDB = require('./config/db.js');

dotenv.config({ path: path.resolve(__dirname, "config/config.env") });

const app = express();
const FRONTEND_URL = process.env.FRONTEND_URL;

app.use(
  cors({
    origin: FRONTEND_URL,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();

app.get('/', (req, res) => {
    res.send('API is running...');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(\`Server running on port \${PORT}\`));
EOF
fi 

cd ..
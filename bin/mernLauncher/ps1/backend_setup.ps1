Set-Location -Path backend

npm init -y
npm install express mongoose cors dotenv jsonwebtoken bcryptjs nodemon ejs path cookie-parser

$choices = @("CommonJS (cjs)", "ES Module (esm)")
$ModuleType = Show-Menu -Prompt "Select a Module Type" -Items $choices

Write-Host "`nYou selected: $ModuleType`n" -ForegroundColor Green

$ModuleType = if ($ModuleType -eq "CommonJS (cjs)") { "cjs" } else { "esm" }

$PackageJsonPath = "package.json"

if (Test-Path $PackageJsonPath) {
    $JsonContent = Get-Content $PackageJsonPath | ConvertFrom-Json

    if ($ModuleType -eq "esm") {
        $JsonContent.PSObject.Properties.Remove('type')  
        $JsonContent | Add-Member -MemberType NoteProperty -Name "type" -Value "module"
    }

    if (-not $JsonContent.PSObject.Properties["scripts"]) {
        $JsonContent | Add-Member -MemberType NoteProperty -Name "scripts" -Value @{}
    }

    if ($null -eq $JsonContent.scripts) {
        $JsonContent.scripts = @{}
    }

    $JsonContent.scripts | Add-Member -MemberType NoteProperty -Name "start" -Value "node index.js" -Force
    $JsonContent.scripts | Add-Member -MemberType NoteProperty -Name "dev" -Value "nodemon index.js" -Force

    $JsonContent | ConvertTo-Json -Depth 10 | Set-Content $PackageJsonPath -Encoding UTF8

    Write-Host "✅ package.json updated successfully!" -ForegroundColor Green
} else {
    Write-Host "❌ package.json not found!" -ForegroundColor Red
}

New-Item -ItemType Directory -Path "config","controllers","middlewares","models","routes","utils" | Out-Null
New-Item -ItemType File -Path "config/config.env" | Out-Null
New-Item -ItemType File -Path "controllers/authController.js" | Out-Null
New-Item -ItemType File -Path "middlewares/authMiddleware.js","middlewares/errorHandler.js","middlewares/catchAsyncError.js" | Out-Null
New-Item -ItemType File -Path "models/User.js" | Out-Null
New-Item -ItemType File -Path "routes/authRoutes.js" | Out-Null
New-Item -ItemType File -Path "utils/generateToken.js" | Out-Null

@"
MONGO_URI=your_mongodb_connection_string
PORT=5000
FRONTEND_URL=http://localhost:5173
"@ | Set-Content config/config.env

if ($ModuleType -eq "esm") {
    @"
import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB Connected:", conn.connection.host);
    } catch (error) {
        console.error("Error:", error.message);
        process.exit(1);
    }
};

export default connectDB;
"@ | Set-Content config/db.js
} else {
    @"
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB Connected:", conn.connection.host);
    } catch (error) {
        console.error("Error:", error.message);
        process.exit(1);
    }
};

module.exports = connectDB;
"@ | Set-Content config/db.js
}

if ($ModuleType -eq "esm") {
    @"
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
app.listen(PORT, () => console.log("Server running on port:", PORT));
"@ | Set-Content index.js
} else {
    @"
const path = require('path');
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const connectDB = require('./config/db.js');

dotenv.config({ path: path.join(__dirname, 'config/config.env') });

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
app.listen(PORT, () => console.log("Server running on port", PORT));
"@ | Set-Content index.js
}

Set-Location -Path ..
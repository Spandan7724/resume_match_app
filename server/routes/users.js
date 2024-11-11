// server/routes/users.js
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/User');

// Register
router.post('/register', async (req, res) => {
    const { name, email, password, role } = req.body;
    // Validation
    // Check if user exists
    // Hash password
    // Save user
});

// Login
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    // Find user
    // Compare password
    // Generate JWT
    // Send token
});

module.exports = router;

// server/routes/jobs.js
const express = require('express');
const router = express.Router();
const Job = require('../models/JobListing');
const auth = require('../middleware/auth');

// Create a job listing (HR only)
router.post('/', auth, async (req, res) => {
    // Check if user is HR
    // Create and save job listing
});

// Get all job listings
router.get('/', async (req, res) => {
    const jobs = await Job.find();
    res.json(jobs);
});

// Get job listings created by HR
router.get('/my', auth, async (req, res) => {
    // Check if user is HR
    // Fetch jobs where createdBy equals user ID
});

module.exports = router;

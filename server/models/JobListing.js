// server/models/JobListing.js
const mongoose = require('mongoose');

const JobListingSchema = new mongoose.Schema({
    title: String,
    description: String,
    qualifications: String,
    salary: Number,
    company: String,
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

module.exports = mongoose.model('JobListing', JobListingSchema);

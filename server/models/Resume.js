// server/models/Resume.js
const mongoose = require('mongoose');

const ResumeSchema = new mongoose.Schema({
    applicantId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    jobId: { type: mongoose.Schema.Types.ObjectId, ref: 'JobListing' },
    resumeContent: String,
    score: Number,
});

module.exports = mongoose.model('Resume', ResumeSchema);

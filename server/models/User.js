// server/models/User.js
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    role: { type: String, enum: ['hr', 'applicant'], default: 'applicant' },
});

module.exports = mongoose.model('User', UserSchema);

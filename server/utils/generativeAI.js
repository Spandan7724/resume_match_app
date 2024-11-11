// server/utils/generativeAI.js
const axios = require('axios');

async function calculateResumeScore(jobDescription, resumeContent) {
    // Prepare data for groq API
    const response = await axios.post('https://groq-api-url', {
        jobDescription,
        resumeContent,
    });
    // Process response to extract score
    const score = response.data.score; // Assuming the API returns a 'score' field
    return score;
}

module.exports = { calculateResumeScore };

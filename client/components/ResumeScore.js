// components/ResumeScore.js
import React from 'react';
import { CircularProgress, Typography } from '@mui/material';

function ResumeScore({ score }) {
    return (
        <div>
            <Typography variant="h6">Your Resume Score:</Typography>
            <CircularProgress variant="determinate" value={score} />
            <Typography variant="h4">{score}%</Typography>
        </div>
    );
}

export default ResumeScore;

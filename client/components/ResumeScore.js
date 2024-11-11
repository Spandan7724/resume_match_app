// components/ResumeScore.js

import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ResumeScore = ({ score }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Resume Match Score</h2>
            <div className="w-32 h-32 mx-auto">
                <CircularProgressbar
                    value={score}
                    text={`${score}%`}
                    styles={buildStyles({
                        textColor: '#1f2937',
                        pathColor: score >= 70 ? '#10b981' : score >= 40 ? '#f59e0b' : '#ef4444',
                    })}
                />
            </div>
            <p className="text-gray-700 mt-4">
                {score >= 70
                    ? 'Great match! Your resume aligns well with this job.'
                    : score >= 40
                        ? 'Good match. Consider tailoring your resume for a better fit.'
                        : 'Low match. You may want to update your resume or consider other positions.'}
            </p>
        </div>
    );
};

export default ResumeScore;

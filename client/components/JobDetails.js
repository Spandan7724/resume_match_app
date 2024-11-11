// components/JobDetails.js

import React from 'react';
import { MapPin, Briefcase, Clock } from 'lucide-react';

const JobDetails = ({ job, onApply }) => {
    return (
        <div className="bg-white rounded-lg shadow-sm p-8">
            {/* Job Header */}
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-gray-900">{job.title}</h1>
                <p className="text-blue-600 font-medium mt-1">{job.company}</p>
                <div className="flex items-center gap-4 mt-3 text-gray-600">
                    <span className="flex items-center gap-1">
                        <MapPin className="h-5 w-5" />
                        {job.location}
                    </span>
                    <span className="flex items-center gap-1">
                        <Briefcase className="h-5 w-5" />
                        {job.type}
                    </span>
                    <span className="flex items-center gap-1">
                        <Clock className="h-5 w-5" />
                        {job.experienceLevel}
                    </span>
                </div>
            </div>

            {/* Job Description */}
            <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Job Description</h2>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">{job.description}</p>
            </div>

            {/* Salary and Requirements */}
            <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Salary & Requirements</h2>
                <p className="text-gray-700 mb-2">
                    <strong>Salary:</strong> {job.salary}
                </p>
                <p className="text-gray-700 mb-2">
                    <strong>Experience Required:</strong> {job.experienceRequired}
                </p>
            </div>

            {/* Apply Button */}
            <div className="mt-8">
                <button
                    onClick={onApply}
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                    Apply for this Job
                </button>
            </div>
        </div>
    );
};

export default JobDetails;

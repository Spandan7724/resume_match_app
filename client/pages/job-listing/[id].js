// pages/job-listing/[id].js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { Briefcase, MapPin, Clock } from 'lucide-react';
import JobApplicationForm from '../../components/JobApplicationForm';

const JobDetailsPage = () => {
    const router = useRouter();
    const { id } = router.query; // Get the job ID from the URL
    const [job, setJob] = useState(null);
    const [showApplicationForm, setShowApplicationForm] = useState(false);

    useEffect(() => {
        if (id) {
            const fetchJob = async () => {
                try {
                    const response = await axios.get(`/api/jobs/${id}`);
                    setJob(response.data);
                } catch (error) {
                    console.error('Error fetching job:', error);
                }
            };
            fetchJob();
        }
    }, [id]);

    if (!job) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p>Loading job details...</p>
            </div>
        );
    }

    if (showApplicationForm) {
        return (
            <JobApplicationForm
                job={job}
                goBack={() => setShowApplicationForm(false)}
            />
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4">
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-8">
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
                    {/* Add any additional requirements or details here */}
                </div>

                {/* Apply Button */}
                <div className="mt-8">
                    <button
                        onClick={() => setShowApplicationForm(true)}
                        className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
                    >
                        Apply for this Job
                    </button>
                </div>
            </div>
        </div>
    );
};

export default JobDetailsPage;

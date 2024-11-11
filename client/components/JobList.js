// components/JobList.js

import React from 'react';
import Link from 'next/link';
import { MapPin, Briefcase } from 'lucide-react';

const JobList = ({ jobs }) => {
    return (
        <div className="space-y-6">
            {jobs.length > 0 ? (
                jobs.map((job) => (
                    <Link href={`/job-listing/${job._id}`} key={job._id}>
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow cursor-pointer">
                            <h3 className="text-lg font-semibold text-gray-900">{job.title}</h3>
                            <p className="text-blue-600 font-medium mb-2">{job.company}</p>
                            <p className="text-gray-600 mb-4">{job.description}</p>
                            <div className="flex items-center justify-between">
                                <div className="flex space-x-4 text-gray-500">
                                    <span className="flex items-center gap-1 text-sm">
                                        <MapPin className="h-4 w-4" />
                                        {job.location}
                                    </span>
                                    <span className="flex items-center gap-1 text-sm">
                                        <Briefcase className="h-4 w-4" />
                                        {job.type}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))
            ) : (
                <p>No jobs found.</p>
            )}
        </div>
    );
};

export default JobList;

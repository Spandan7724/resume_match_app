import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { Users, Briefcase, ChevronLeft, MessageSquare, Star, MapPin } from 'lucide-react';

const HRJobDashboard = () => {
    const [jobPostings, setJobPostings] = useState([]);
    const [selectedJob, setSelectedJob] = useState(null);

    useEffect(() => {
        const fetchJobPostings = async () => {
            try {
                const response = await axios.get('/api/jobs');
                setJobPostings(response.data);
            } catch (error) {
                console.error('Error fetching job postings:', error);
            }
        };
        fetchJobPostings();
    }, []);

    const getPriorityColor = (priority) => {
        switch (priority.toLowerCase()) {
            case 'high':
                return 'text-red-500';
            case 'medium':
                return 'text-yellow-500';
            default:
                return 'text-green-500';
        }
    };

    const getMatchRateColor = (rate) => {
        if (rate >= 90) return 'text-green-600';
        if (rate >= 80) return 'text-blue-600';
        return 'text-yellow-600';
    };

    return (
        <div className="p-6 max-w-7xl mx-auto">
            {!selectedJob ? (
                <>
                    <h1 className="text-2xl font-bold mb-6">Job Postings</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {jobPostings.map((job) => (
                            <Card
                                key={job.id}
                                className="cursor-pointer hover:shadow-lg transition-shadow"
                                onClick={() => setSelectedJob(job)}
                            >
                                <CardHeader>
                                    <div className="flex items-center justify-between">
                                        <h2 className="text-xl font-semibold">{job.title}</h2>
                                        <Briefcase className="text-blue-500" />
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between">
                                            <span className="text-gray-600">{job.department}</span>
                                            <div className="flex items-center gap-2">
                                                <MapPin size={16} className="text-gray-500" />
                                                <span className="text-gray-600">{job.location}</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2 text-gray-600">
                                                <Users size={20} />
                                                <span>{job.applicants} applicants</span>
                                            </div>
                                            <div className={`flex items-center gap-1 ${getPriorityColor(job.priority)}`}>
                                                <Star size={16} />
                                                <span>{job.priority}</span>
                                            </div>
                                        </div>
                                        <div className="text-sm text-gray-500">
                                            Posted on {new Date(job.postedDate).toLocaleDateString()}
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </>
            ) : (
                <div className="space-y-6">
                    <button
                        onClick={() => setSelectedJob(null)}
                        className="flex items-center gap-2 text-blue-500 hover:text-blue-600 mb-4"
                    >
                        <ChevronLeft size={20} />
                        Back to Job Postings
                    </button>

                    <Card>
                        <CardHeader>
                            <div className="flex justify-between items-start">
                                <div>
                                    <h2 className="text-2xl font-bold">{selectedJob.title}</h2>
                                    <p className="text-gray-600">{selectedJob.department} · {selectedJob.location}</p>
                                </div>
                                <div className="text-right">
                                    <div className="text-lg font-semibold">{selectedJob.applicants} Applicants</div>
                                    <div className="text-sm text-gray-500">
                                        Posted on {new Date(selectedJob.postedDate).toLocaleDateString()}
                                    </div>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <h3 className="text-xl font-semibold mb-4">Top Candidates</h3>
                            <div className="space-y-4">
                                {selectedJob.candidates.map((candidate) => (
                                    <div
                                        key={candidate.id}
                                        className="border rounded-lg p-4 hover:bg-gray-50"
                                    >
                                        <div className="flex items-center justify-between">
                                            <div className="space-y-2">
                                                <div className="font-semibold">{candidate.name}</div>
                                                <div className="text-sm text-gray-600">Experience: {candidate.experience}</div>
                                                <div className="text-sm text-gray-600">Education: {candidate.education}</div>
                                                <div className="flex flex-wrap gap-2 mt-2">
                                                    {candidate.skills.map((skill, index) => (
                                                        <span
                                                            key={index}
                                                            className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                                                        >
                                                            {skill}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-6">
                                                <div className="text-right">
                                                    <div className={`text-2xl font-bold ${getMatchRateColor(candidate.matchRate)}`}>
                                                        {candidate.matchRate}%
                                                    </div>
                                                    <div className="text-sm text-gray-500">Match Rate</div>
                                                </div>
                                                <button
                                                    className="p-2 rounded-full hover:bg-gray-100"
                                                    title="Message candidate"
                                                >
                                                    <MessageSquare className="text-blue-500" />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                                            <div
                                                className={`h-2 rounded-full ${candidate.matchRate >= 90 ? 'bg-green-500' : 'bg-blue-500'}`}
                                                style={{ width: `${candidate.matchRate}%` }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                        <CardFooter>
                            <div className="flex justify-between items-center">
                                <button
                                    className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md"
                                >
                                    Create New Job
                                </button>
                                <div className="flex items-center gap-2 text-gray-600">
                                    <Users size={20} />
                                    <span>{selectedJob.applicants} applicants</span>
                                </div>
                            </div>
                        </CardFooter>
                    </Card>
                </div>
            )}
        </div>
    );
};

export default HRJobDashboard;
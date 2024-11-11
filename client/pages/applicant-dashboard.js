// pages/applicant-dashboard.js
import Navbar from 'client/componentsNavbar.js'; 
import JobList from '../components/JobList';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Search, Briefcase, MessageSquare, Bell, LogOut } from 'lucide-react';
import Link from 'next/link';

const JobCard = ({ job }) => (
    <Link href={`/job-listing/${job._id}`}>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow cursor-pointer">
            <h3 className="text-lg font-semibold text-gray-900">{job.title}</h3>
            <p className="text-blue-600 font-medium mb-2">{job.company}</p>
            <p className="text-gray-600 mb-4">{job.description}</p>
            <div className="flex items-center justify-between">
                <div className="flex space-x-4">
                    <span className="text-sm text-gray-500">📍 {job.location}</span>
                    <span className="text-sm text-gray-500">💼 {job.type}</span>
                </div>
            </div>
        </div>
    </Link>
);

const JobApplicationForm = ({ job, goBack }) => {
    const [dragActive, setDragActive] = useState(false);
    const [uploadedFile, setUploadedFile] = useState(null);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
    });

    const handleDrag = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(e.type === "dragenter" || e.type === "dragover");
    };

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        if (e.dataTransfer.files[0]) {
            setUploadedFile(e.dataTransfer.files[0]);
        }
    };

    const handleFileChange = (e) => {
        if (e.target.files[0]) {
            setUploadedFile(e.target.files[0]);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Prepare form data
        const data = new FormData();
        data.append('jobId', job._id);
        data.append('resume', uploadedFile);
        Object.keys(formData).forEach((key) => data.append(key, formData[key]));

        try {
            await axios.post('/api/applications', data, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
            alert('Application submitted successfully!');
            goBack();
        } catch (error) {
            console.error('Error submitting application:', error);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4">
            <div className="max-w-4xl mx-auto">
                {/* Job Header */}
                <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
                    <div className="flex items-start justify-between">
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900">{job.title}</h1>
                            <p className="text-blue-600 font-medium mt-1">{job.company}</p>
                            <div className="flex items-center gap-4 mt-3 text-gray-600">
                                <span>📍 {job.location}</span>
                                <span>💼 {job.type}</span>
                            </div>
                        </div>
                        <div className="bg-blue-50 text-blue-700 px-4 py-2 rounded-lg">
                            <span className="font-medium">Status:</span> {job.status || 'Accepting Applications'}
                        </div>
                    </div>
                </div>

                {/* Application Form */}
                <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow p-8">
                    <div className="space-y-6">
                        <h2 className="text-xl font-semibold text-gray-900">Personal Information</h2>
                        <div className="grid grid-cols-2 gap-6">
                            {['firstName', 'lastName', 'email', 'phone'].map((field) => (
                                <div key={field}>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        {field === 'firstName' && 'First Name'}
                                        {field === 'lastName' && 'Last Name'}
                                        {field === 'email' && 'Email Address'}
                                        {field === 'phone' && 'Phone Number'}
                                    </label>
                                    <input
                                        type={field === 'email' ? 'email' : 'text'}
                                        name={field}
                                        value={formData[field]}
                                        onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
                                        className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500"
                                        placeholder={
                                            field === 'firstName' ? 'John' :
                                                field === 'lastName' ? 'Doe' :
                                                    field === 'email' ? 'john.doe@example.com' :
                                                        '+1 (555) 000-0000'
                                        }
                                        required
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Resume Upload */}
                        <div>
                            <h3 className="text-lg font-medium text-gray-900 mb-4">Resume Upload</h3>
                            <div
                                className={`border-2 border-dashed rounded-lg p-6 ${dragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300'} ${uploadedFile ? 'bg-green-50' : ''}`}
                                onDragEnter={handleDrag}
                                onDragLeave={handleDrag}
                                onDragOver={handleDrag}
                                onDrop={handleDrop}
                            >
                                <div className="flex flex-col items-center justify-center">
                                    {uploadedFile ? (
                                        <div className="mt-4 text-center">
                                            <p className="text-sm font-medium text-gray-900">{uploadedFile.name}</p>
                                            <p className="text-xs text-gray-500 mt-1">Click or drag a new file to replace</p>
                                        </div>
                                    ) : (
                                        <>
                                            <p className="mt-4 text-sm font-medium text-gray-900">
                                                Drag and drop your resume here, or{' '}
                                                <label className="text-blue-600 hover:text-blue-500 cursor-pointer">
                                                    browse
                                                    <input
                                                        type="file"
                                                        className="hidden"
                                                        accept=".pdf,.doc,.docx"
                                                        onChange={handleFileChange}
                                                        required
                                                    />
                                                </label>
                                            </p>
                                            <p className="mt-2 text-xs text-gray-500">
                                                Supported formats: PDF, DOC, DOCX (Max 5MB)
                                            </p>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex justify-between mt-8 pt-6 border-t">
                        <button
                            type="button"
                            onClick={goBack}
                            className="px-6 py-2.5 text-gray-600 hover:bg-gray-100 rounded-lg font-medium"
                        >
                            Back to Job Listings
                        </button>
                        <button
                            type="submit"
                            className="px-6 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700"
                        >
                            Submit Application
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

const ApplicantDashboard = () => {
    const [jobs, setJobs] = useState([]);
    const [selectedJob, setSelectedJob] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [filters, setFilters] = useState({
        location: '',
        type: '',
        experienceLevel: '',
    });

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await axios.get('/api/jobs');
                setJobs(response.data);
            } catch (error) {
                console.error('Error fetching jobs:', error);
            }
        };
        fetchJobs();
    }, []);

    const filteredJobs = jobs.filter((job) => {
        const matchesSearch = [job.title, job.company, job.description]
            .some((field) => field.toLowerCase().includes(searchQuery.toLowerCase()));
        const matchesLocation = !filters.location || job.location === filters.location;
        const matchesType = !filters.type || job.type === filters.type;
        const matchesExperience = !filters.experienceLevel || job.experienceLevel === filters.experienceLevel;
        return matchesSearch && matchesLocation && matchesType && matchesExperience;
    });

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Navigation */}
            <nav className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex items-center">
                            <Briefcase className="h-8 w-8 text-blue-600" />
                            <span className="ml-2 text-xl font-semibold">JobPortal</span>
                        </div>
                        <div className="flex items-center space-x-4">
                            <button className="p-2 text-gray-400 hover:text-gray-500">
                                <Bell className="h-6 w-6" />
                            </button>
                            <button className="p-2 text-gray-400 hover:text-gray-500">
                                <MessageSquare className="h-6 w-6" />
                            </button>
                            <button className="p-2 text-gray-400 hover:text-gray-500">
                                <LogOut className="h-6 w-6" />
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {selectedJob ? (
                    <JobApplicationForm job={selectedJob} goBack={() => setSelectedJob(null)} />
                ) : (
                    <>
                        {/* Search Section */}
                        <div className="mb-8">
                            <div className="relative">
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    placeholder="Search for jobs..."
                                    className="w-full p-4 pl-12 pr-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
                                />
                                <Search className="absolute left-4 top-4 h-6 w-6 text-gray-400" />
                            </div>
                        </div>

                        {/* Filters */}
                        <div className="flex space-x-4 mb-8">
                            <select
                                className="p-2 border border-gray-300 rounded-md"
                                value={filters.location}
                                onChange={(e) => setFilters({ ...filters, location: e.target.value })}
                            >
                                <option value="">Location</option>
                                <option value="Remote">Remote</option>
                                <option value="On-site">On-site</option>
                            </select>
                            <select
                                className="p-2 border border-gray-300 rounded-md"
                                value={filters.type}
                                onChange={(e) => setFilters({ ...filters, type: e.target.value })}
                            >
                                <option value="">Job Type</option>
                                <option value="Full-time">Full-time</option>
                                <option value="Part-time">Part-time</option>
                                <option value="Contract">Contract</option>
                            </select>
                            <select
                                className="p-2 border border-gray-300 rounded-md"
                                value={filters.experienceLevel}
                                onChange={(e) => setFilters({ ...filters, experienceLevel: e.target.value })}
                            >
                                <option value="">Experience Level</option>
                                <option value="Entry Level">Entry Level</option>
                                <option value="Mid Level">Mid Level</option>
                                <option value="Senior Level">Senior Level</option>
                            </select>
                        </div>

                        {/* Job Listings */}
                        <div className="space-y-6">
                            {filteredJobs.length > 0 ? (
                                filteredJobs.map((job) => (
                                    <JobCard key={job._id} job={job} onClick={() => setSelectedJob(job)} />
                                ))
                            ) : (
                                <p>No jobs found.</p>
                            )}
                        </div>
                    </>
                )}
            </main>
        </div>
    );
};

export default ApplicantDashboard;

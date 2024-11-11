// components/JobApplicationForm.js

import React, { useState } from 'react';
import axios from 'axios';

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
        setDragActive(e.type === 'dragenter' || e.type === 'dragover');
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
            alert('There was an error submitting your application.');
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4">
            <div className="max-w-4xl mx-auto">
                {/* Application Form */}
                <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow p-8">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                        Apply for {job.title} at {job.company}
                    </h2>
                    {/* Personal Information */}
                    <div className="space-y-6">
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
                                        onChange={(e) =>
                                            setFormData({ ...formData, [field]: e.target.value })
                                        }
                                        className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500"
                                        placeholder={
                                            field === 'firstName'
                                                ? 'John'
                                                : field === 'lastName'
                                                    ? 'Doe'
                                                    : field === 'email'
                                                        ? 'john.doe@example.com'
                                                        : '+1 (555) 000-0000'
                                        }
                                        required
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Resume Upload */}
                        <div>
                            <h3 className="text-lg font-medium text-gray-900 mb-4">
                                Resume Upload
                            </h3>
                            <div
                                className={`border-2 border-dashed rounded-lg p-6 ${dragActive
                                        ? 'border-blue-500 bg-blue-50'
                                        : 'border-gray-300'
                                    } ${uploadedFile ? 'bg-green-50' : ''}`}
                                onDragEnter={handleDrag}
                                onDragLeave={handleDrag}
                                onDragOver={handleDrag}
                                onDrop={handleDrop}
                            >
                                <div className="flex flex-col items-center justify-center">
                                    {uploadedFile ? (
                                        <div className="mt-4 text-center">
                                            <p className="text-sm font-medium text-gray-900">
                                                {uploadedFile.name}
                                            </p>
                                            <p className="text-xs text-gray-500 mt-1">
                                                Click or drag a new file to replace
                                            </p>
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

                    {/* Action Buttons */}
                    <div className="flex justify-between mt-8 pt-6 border-t">
                        <button
                            type="button"
                            onClick={goBack}
                            className="px-6 py-2.5 text-gray-600 hover:bg-gray-100 rounded-lg font-medium"
                        >
                            Back to Job Details
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

export default JobApplicationForm;

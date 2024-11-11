// pages/applicant-dashboard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import JobList from '../components/JobList';

function ApplicantDashboard() {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        // Fetch job listings from the backend
        axios.get('/api/jobs').then((response) => setJobs(response.data));
    }, []);

    return <JobList jobs={jobs} />;
}

export default ApplicantDashboard;

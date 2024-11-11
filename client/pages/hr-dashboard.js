// pages/hr-dashboard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import JobList from '../components/JobList';
import { Button } from '@mui/material';
import { useRouter } from 'next/router';

function HRDashboard() {
    const [jobs, setJobs] = useState([]);
    const router = useRouter();

    useEffect(() => {
        // Fetch job listings created by HR
        axios.get('/api/jobs/my').then((response) => setJobs(response.data));
    }, []);

    const handleCreateJob = () => {
        router.push('/create-job');
    };

    return (
        <div>
            <Button variant="contained" onClick={handleCreateJob}>
                Create Job Listing
            </Button>
            <JobList jobs={jobs} />
        </div>
    );
}

export default HRDashboard;

// pages/job-listing/[id].js
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

function JobListingPage() {
    const [job, setJob] = useState(null);
    const router = useRouter();
    const { id } = router.query;

    useEffect(() => {
        if (id) {
            // Fetch job details
            axios.get(`/api/jobs/${id}`).then((response) => setJob(response.data));
        }
    }, [id]);

    if (!job) return <div>Loading...</div>;

    return (
        <div>
            <h1>{job.title}</h1>
            {/* Display other job details */}
            {/* Include form to submit resume */}
        </div>
    );
}

export default JobListingPage;

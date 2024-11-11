// components/JobList.js
import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import { useRouter } from 'next/router';

function JobList({ jobs }) {
    const router = useRouter();

    return (
        <div>
            {jobs.map((job) => (
                <Card key={job._id} style={{ margin: '20px 0' }}>
                    <CardContent>
                        <Typography variant="h5">{job.title}</Typography>
                        {/* Display other job details */}
                        <Button onClick={() => router.push(`/job-listing/${job._id}`)}>
                            View Details
                        </Button>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}

export default JobList;

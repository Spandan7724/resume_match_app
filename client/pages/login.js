// pages/login.js
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Button, TextField, ToggleButton, ToggleButtonGroup } from '@mui/material';

function LoginPage() {
    const [role, setRole] = useState('applicant');
    const router = useRouter();

    const handleRoleChange = (event, newRole) => {
        setRole(newRole);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Implement login/signup logic here
    };

    return (
        <form onSubmit={handleSubmit}>
            <ToggleButtonGroup value={role} exclusive onChange={handleRoleChange}>
                <ToggleButton value="hr">HR</ToggleButton>
                <ToggleButton value="applicant">Job Applicant</ToggleButton>
            </ToggleButtonGroup>
            <TextField label="Email" required />
            <TextField label="Password" type="password" required />
            <Button type="submit">Login / Signup</Button>
        </form>
    );
}

export default LoginPage;

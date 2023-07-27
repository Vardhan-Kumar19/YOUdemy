import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const SignOut = ({ onSignOut, username }) => {
    const navigate = useNavigate();

    const handleSignOut = () => {
        onSignOut();
        navigate('/');
    }

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 2 }}>
            <Typography variant="h4" align="center" gutterBottom>
                Welcome, {username}!
            </Typography>
            <Button variant="contained" color="secondary" onClick={handleSignOut}>
                Sign Out
            </Button>
        </Box>
    );
}

export default SignOut;

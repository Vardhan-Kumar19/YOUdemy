import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const SignIn = ({ onSignIn }) => {
    const [username, setUsername] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        onSignIn(username);
        navigate('/');
    }

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 2 }}>
            <Typography variant="h4" align="center" gutterBottom>
                Sign In
            </Typography>
            <form onSubmit={handleSubmit} noValidate>
                <TextField 
                    variant="outlined"
                    margin="normal"
                    required
                    id="username"
                    label="Username"
                    name="username"
                    autoFocus
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
                <Button 
                    type="submit"
                    variant="contained"
                    color="primary"
                    disabled={!username}
                >
                    Sign In
                </Button>
            </form>
        </Box>
    );
}

export default SignIn;

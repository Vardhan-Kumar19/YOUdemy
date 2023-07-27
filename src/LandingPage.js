import React, { useState } from 'react';
import RecommendationSection from './RecommendationSection';
import { Box, TextField, Typography, Grid } from '@mui/material';

const LandingPage = ({ courses, onAddToCart }) => {
  const [search, setSearch] = useState('');

  const filteredCourses = courses.filter(course =>
    course.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Box sx={{ p: 2 }}>
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item>
          <Typography variant="h4" gutterBottom>
            Welcome to our eLearning Platform
          </Typography>
        </Grid>
        <Grid item>
          <TextField
            variant="outlined"
            margin="normal"
            id="search"
            label="Search by Category"
            name="search"
            value={search}
            onChange={e => setSearch(e.target.value)}
            sx={{ width: { xs: '100%', sm: '25ch' } }}
          />
        </Grid>
      </Grid>
      <RecommendationSection courses={filteredCourses} onAddToCart={onAddToCart} />
    </Box>
  );
};

export default LandingPage;

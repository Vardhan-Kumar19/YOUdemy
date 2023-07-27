import React from 'react';
import CourseCard from './CourseCard';
import { Box, Typography, Grid } from '@mui/material';

const RecommendationSection = ({ courses, onAddToCart }) => {
  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        Courses
      </Typography>
      <Grid container spacing={2}>
        {courses.map((course, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <CourseCard course={course} addToCart={onAddToCart} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default RecommendationSection;

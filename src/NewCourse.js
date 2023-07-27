import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const NewCourse = ({ onAddCourse }) => {
  const [courseTitle, setCourseTitle] = useState('');
  const [courseCategory, setCourseCategory] = useState('');
  const navigate = useNavigate();
  const defaultImageUrl = process.env.PUBLIC_URL + '/image.jpg'; // removed quotes

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddCourse({
      title: courseTitle,
      category: courseCategory,
      imageUrl: defaultImageUrl // default image path
    });
    setCourseTitle('');
    setCourseCategory('');
    navigate('/');
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 2 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Add a new course
      </Typography>
      <form onSubmit={handleSubmit} noValidate>
        <TextField 
          variant="outlined"
          margin="normal"
          required
          id="course-title"
          label="Course Title"
          name="course"
          autoFocus
          value={courseTitle}
          onChange={e => setCourseTitle(e.target.value)}
        />
        <TextField 
          variant="outlined"
          margin="normal"
          required
          id="course-category"
          label="Course Category"
          name="category"
          value={courseCategory}
          onChange={e => setCourseCategory(e.target.value)}
        />
        <Button 
          type="submit"
          variant="contained"
          color="primary"
          disabled={!courseTitle || !courseCategory}
        >
          Add Course
        </Button>
      </form>
    </Box>
  );
}

export default NewCourse;

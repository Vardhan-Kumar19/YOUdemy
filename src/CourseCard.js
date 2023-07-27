import React from 'react';
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const CourseCard = ({ course, addToCart }) => {
  return (
    <Box sx={{ maxWidth: 345, m: 2, bgcolor: '#fafafa', borderRadius: 2, transition: '0.3s', ':hover': { boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)' } }}>
      <Card>
        <CardActionArea component={Link} to="/video-player">
          <CardMedia
            component="img"
            height="140"
            image={course.imageUrl}
            alt={course.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {course.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {course.category}
            </Typography>
          </CardContent>
        </CardActionArea>
        <Button onClick={() => addToCart(course)} variant="contained" color="primary" sx={{ m: 2 }}>
          Add to Cart
        </Button>
      </Card>
    </Box>
  );
};

export default CourseCard;

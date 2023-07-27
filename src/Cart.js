import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const Cart = ({ cart, removeFromCart }) => {
  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Cart
      </Typography>
      {cart.map((course, index) => (
        <Box key={index} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2, border: '1px solid #ddd', borderRadius: 2, my: 2 }}>
          <Typography variant="h6">
            {course.title}
          </Typography>
          <Button onClick={() => removeFromCart(course)} variant="outlined" color="secondary">
            Remove
          </Button>
        </Box>
      ))}
    </Box>
  );
};

export default Cart;

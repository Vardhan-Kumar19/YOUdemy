import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import LandingPage from './LandingPage';
import NewCourse from './NewCourse';
import SignIn from './SignIn';
import SignOut from './SignOut';
import VideoPlayer from './VideoPlayer';
import Cart from './Cart';
import { Box, Button, AppBar, Toolbar, Typography } from '@mui/material';

function App() {
  const [courses, setCourses] = useState([
    { title: 'Course 1', category: 'Programming', imageUrl: process.env.PUBLIC_URL + '/images/image1.jpg' },
    { title: 'Course 2', category: 'Design', imageUrl: process.env.PUBLIC_URL + '/images/image2.jpg' },
    { title: 'Course 3', category: 'Marketing', imageUrl: process.env.PUBLIC_URL + '/images/image3.jpg' }
  ]);
  const [username, setUsername] = useState(null);
  const [cart, setCart] = useState([]);

  const handleAddCourse = (course) => {
    setCourses(prevCourses => [...prevCourses, course]);
  };

  const handleSignIn = (username) => {
    setUsername(username);
  };

  const handleSignOut = () => {
    setUsername(null);
  };

  const handleAddToCart = (course) => {
    setCart(prevCart => [...prevCart, course]);
  };

  const handleRemoveFromCart = (course) => {
    setCart(prevCart => prevCart.filter(c => c.title !== course.title));
  };

  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
           Youdemy
          </Typography>
          <Box sx={{ '& > :not(style)': { m: 1 } }}>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <Button variant="outlined" color="inherit">
                Home
              </Button>
            </Link>
            {username ? (
              <Link to="/sign-out" style={{ textDecoration: 'none' }}>
                <Button variant="outlined" color="inherit">
                  Sign Out
                </Button>
              </Link>
            ) : (
              <Link to="/sign-in" style={{ textDecoration: 'none' }}>
                <Button variant="outlined" color="inherit">
                  Sign In
                </Button>
              </Link>
            )}
            <Link to="/new-course" style={{ textDecoration: 'none' }}>
              <Button variant="outlined" color="inherit">
                Add Course
              </Button>
            </Link>
            <Link to="/video-player" style={{ textDecoration: 'none' }}>
              <Button variant="outlined" color="inherit">
                Play Video
              </Button>
            </Link>
            <Link to="/cart" style={{ textDecoration: 'none' }}>
            <Button variant="outlined" color="inherit">
              Cart ({cart.length})
            </Button>
          </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path="/" element={<LandingPage courses={courses} onAddToCart={handleAddToCart}/>} />
        <Route path="/new-course" element={<NewCourse onAddCourse={handleAddCourse} />} />
        <Route path="/sign-in" element={<SignIn onSignIn={handleSignIn} />} />
        <Route path="/sign-out" element={<SignOut onSignOut={handleSignOut} username={username} />} />
        <Route path="/video-player" element={<VideoPlayer />} />
        <Route path="/cart" element={<Cart cart={cart} removeFromCart={handleRemoveFromCart} />} />
      </Routes>
    </Router>
  );
}

export default App;

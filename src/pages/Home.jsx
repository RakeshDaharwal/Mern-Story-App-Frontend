import React from 'react'
import HeroSection from '../components/Home/HeroSection';
import { Box } from '@mui/material';

const Home = () => {
  return (
    <>
     <Box sx={{ backgroundColor: '#000', minHeight: '100vh' }}>
        <HeroSection />
      </Box>
    </>
  )
}

export default Home;

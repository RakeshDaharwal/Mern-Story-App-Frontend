
import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
   Grid,
} from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import Swal from 'sweetalert2';
import Lottie from 'lottie-react';
import registerData from '../../assets/registerData.json';


const SignIn = () => {
  const [data, setData] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/sign-in`, data);
      localStorage.setItem('token', res.data.token);

      Swal.fire({
        icon: 'success',
        title: 'Signed in successfully!',
        timer: 1500,
        showConfirmButton: false
      }).then(() => {
        navigate('/user/dashboard');
      });

    } catch (err) {
      const errorMsg = err.response?.data?.message || 'Something went wrong';
      toast.error(errorMsg); // shows email verification or credential error
    }
  };


  return (

    <Box
      component="section"
      sx={{
        px: { xs: 2, sm: 6, md: 10 },
        py: { xs: 6, md: 10 },
        bgcolor: '#fff',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: "center"
      }}
    >
      <Grid container spacing={20} alignItems="center" justifyContent="center">

        <Grid item xs={12} md={6}>
          <Box
            sx={{
              width: '100%',
              maxWidth: 500,
              mx: 'auto',
              height: { xs: 300, md: 400 },
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Lottie
              animationData={registerData}
              loop
              autoplay
              style={{ width: '100%', height: '100%' }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              maxWidth: 400,
              margin: 'auto',
              padding: 4,
              borderRadius: 2,
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
              backgroundColor: '#fff',
            }}
          >
            <Typography variant="h5" align="center" gutterBottom>
              Sign In
            </Typography>

            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Email"
                name="email"
                value={data.email}
                onChange={handleChange}
                margin="dense"
                variant="standard"
                size="small"
              />
              <TextField
                fullWidth
                label="Password"
                type="password"
                name="password"
                value={data.password}
                onChange={handleChange}
                margin="dense"
                variant="standard"
                size="small"
              />

              <Button
              fullWidth
              type="submit"
              variant="contained"
              size="small"
              sx={{ mt: 2 }}
              >
                Sign In
              </Button>

              <Typography variant="body2" align="center" sx={{ mt: 2 }}>
                Don't have an account?{' '}
                <Button
                  variant="text"
                  size="small"
                  onClick={() => navigate('/auth/signup')}
                  sx={{ textTransform: 'none', padding: 0, minWidth: 'auto' }}
                >
                  Sign Up
                </Button>
              </Typography>
              <ToastContainer position="top-left" autoClose={4000} hideProgressBar={false} />
            </form>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SignIn;

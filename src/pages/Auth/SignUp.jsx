

import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Stepper,
  Step,
  StepLabel,
  Checkbox,
  FormControlLabel,
  Grid,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import Swal from 'sweetalert2';
import Lottie from 'lottie-react';
import registerData from '../../assets/registerData.json';

const steps = ['Sign Up', 'Verify Email'];

export default function SignUp() {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    tandc: false,
    otp: '',
  });

  const [errors, setErrors] = useState({
    email: false,
    password: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const updatedValue = type === 'checkbox' ? checked : value;

    setFormData((prev) => ({
      ...prev,
      [name]: updatedValue,
    }));

    if (name === 'password') {
      setErrors((prev) => ({
        ...prev,
        password: value.length < 6,
      }));
    }

    if (name === 'email') {
      setErrors((prev) => ({
        ...prev,
        email: !value.includes('@'),
      }));
    }
  };

  const handleNext = async (e) => {
    e.preventDefault();

    if (activeStep === 0) {
      if (errors.email || errors.password || !formData.tandc) {
        toast.error('Please fix all errors and accept the terms.');
        return;
      }

      try {
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/sign-up`, formData);


        if (response.status === 201) {
          toast.success('OTP has been sent to your email. Please check it!');
          setActiveStep(1);
        }
      } catch (error) {
        const errMsg = error.response?.data?.message || 'Signup failed. Try again.';
        toast.error(errMsg);
      }
    } else if (activeStep === 1) {
      if (formData.otp === '123456') {
        try {
          await axios.post(`${process.env.REACT_APP_API_URL}/verify-email`, {
            email: formData.email,
          });

          Swal.fire({
            icon: 'success',
            title: 'Email Verified',
            text: 'You can now sign in using your credentials.',
          }).then(() => {
            navigate('/auth/signin');
          });
        } catch (err) {
          toast.error('Verification failed.');
        }
      } else {
        toast.error('Invalid OTP');
      }
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
            <Stepper activeStep={activeStep} alternativeLabel>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>

            {activeStep === 0 && (
              <Box component="form" onSubmit={handleNext} sx={{ mt: 2 }}>
                <TextField
                  fullWidth
                  size="small"
                  label="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  error={errors.email}
                  helperText={errors.email ? 'Enter a valid email' : ' '}
                  margin="dense"
                  variant="standard"
                />

                <TextField
                  fullWidth
                  size="small"
                  label="Password"
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  error={errors.password}
                  helperText={errors.password ? 'At least 6 characters' : ' '}
                  margin="dense"
                  variant="standard"
                />

                <FormControlLabel
                  control={
                    <Checkbox
                      name="tandc"
                      checked={formData.tandc}
                      onChange={handleChange}
                      sx={{ p: 0.5 }}
                    />
                  }
                  label="I agree with the Terms & Conditions"
                  sx={{ mt: 1 }}
                />

                <Button
                  fullWidth
                  type="submit"
                  variant="contained"
                  size="small"
                  sx={{ mt: 2 }}
                >
                  Sign Up
                </Button>
              </Box>
            )}

            {activeStep === 1 && (
              <Box component="form" onSubmit={handleNext} sx={{ mt: 2 }}>
                <Typography variant="body2" gutterBottom>
                  Enter OTP
                </Typography>
                <TextField
                  fullWidth
                  size="small"
                  margin="dense"
                  label="OTP"
                  name="otp"
                  value={formData.otp}
                  onChange={handleChange}
                  variant="standard"
                />

                <Button
                  fullWidth
                  type="submit"
                  variant="contained"
                  size="small"
                  sx={{ mt: 3 }}
                >
                  Verify Email
                </Button>
              </Box>
            )}

            <Typography variant="body2" align="center" sx={{ mt: 2 }}>
              Already have an account?{' '}
              <Button
                variant="text"
                size="small"
                onClick={() => navigate('/auth/signin')}
                sx={{ textTransform: 'none', padding: 0, minWidth: 'auto' }}
              >
                Sign In
              </Button>
            </Typography>

            <ToastContainer position="top-left" autoClose={5000} />
          </Box>
        </Grid>


      </Grid>
    </Box>
  );
}

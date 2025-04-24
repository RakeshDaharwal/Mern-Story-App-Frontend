import React from "react";
import { Box, Typography, Button } from "@mui/material";
import Lottie from "lottie-react";
import notFoundAnimation from "../../assets/404animation.json"; // <- path change as per your file

const Error404 = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#000",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: "#fff",
        px: 2,
      }}
    >
      <Box sx={{ width: "100%", maxWidth: 500 }}>
        <Lottie animationData={notFoundAnimation} loop={true} />
      </Box>
      <Typography variant="h4" fontWeight="bold" mt={2}>
        Oops! Page Not Found
      </Typography>
      <Typography variant="body1" mt={1} color="#ccc">
        The page you’re looking for doesn’t exist or has been moved.
      </Typography>
      <Button
        variant="contained"
        sx={{ mt: 4, backgroundColor: "#13AA52", "&:hover": { backgroundColor: "#0e8d44" } }}
        onClick={() => (window.location.href = "/")}
      >
        Go to Home
      </Button>
    </Box>
  );
};

export default Error404;

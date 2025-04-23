

// import { Box, Button, Grid, Typography } from "@mui/material";
// import BookPng from "../../assets/Book.png"

// export default function HeroSection() {
//     return (
//         // <Box
//         //     component="section"
//         //     sx={{
//         //         px: 10,
//         //         py: 1,
//         //         backgroundColor: "transparent",
//         //         display: "flex",
//         //         alignItems: "center",
//         //     }}
//         // >
//         //     <Grid container spacing={4} alignItems="center">
//         //         <Grid item xs={12} md={6}>
//         //             <Typography
//         //                 variant="h3"
//         //                 component="h1"
//         //                 gutterBottom
//         //                 fontWeight={600}
//         //                 sx={{ color: "#fff" }}
//         //             >
//         //                 Stories That Speak To You.
//         //             </Typography>
//         //             <Typography variant="h6" color="#fff">
//         //                 Discover a world of imagination — from free tales to exclusive premium reads at just ₹99/month.
//         //             </Typography>
//         //             <Box sx={{ mt: 4, display: 'flex', gap: 2 }}>
//         //                 <Button
//         //                     variant="contained"
//         //                     size="large"
//         //                     sx={{
//         //                         backgroundColor: "#13AA52",
//         //                         color: "#fff",
//         //                         "&:hover": {
//         //                             backgroundColor: "#0e8d44",
//         //                         },
//         //                         borderRadius: 2,
//         //                         px: 4,
//         //                         py: 1.5,
//         //                         fontWeight: 600,
//         //                     }}
//         //                 >
//         //                     Start Free
//         //                 </Button>
//         //                 <Button
//         //                     variant="outlined"
//         //                     size="large"
//         //                     sx={{
//         //                         color: "#0e8d44",
//         //                         borderColor: "#0e8d44",
//         //                         "&:hover": {
//         //                             backgroundColor: "rgba(14, 141, 68, 0.1)", // light green hover
//         //                             borderColor: "#0e8d44",
//         //                         },
//         //                         borderRadius: 2,
//         //                         px: 4,
//         //                         py: 1.5,
//         //                         fontWeight: 600,
//         //                     }}
//         //                 >
//         //                     Go Premium
//         //                 </Button>
//         //             </Box>
//         //         </Grid>

//         //         <Grid item xs={12} md={6}>
//         //             <Box
//         //                 component="img"
//         //                 src={BookPng}
//         //                 alt="Hero Image"
//         //                 sx={{
//         //                     width: "100%",
//         //                     maxWidth: 500,
//         //                     mx: "auto",
//         //                     display: "block",
//         //                 }}
//         //             />
//         //         </Grid>
//         //     </Grid>
//         // </Box>

//         <Box
//   component="section"
//   sx={{
//     px: { xs: 2, sm: 4, md: 6 },
//     py: 8,
//     backgroundColor: "transparent",
//     display: "flex",
//     alignItems: "center",
//     minHeight: "100vh",
//   }}
// >
//   <Grid container spacing={4} alignItems="center">
//     <Grid item xs={12} md={6}>
//       <Typography
//         variant="h3"
//         component="h1"
//         fontWeight={600}
//         sx={{ color: "#fff", whiteSpace: "normal" }}
//       >
//         Stories That Speak To You.
//       </Typography>
//       <Typography
//         variant="h6"
//         sx={{
//           color: "#fff",
//           mt: 2,
//           whiteSpace: "normal",
//         }}
//       >
//         Discover a world of imagination — from free tales to exclusive premium reads at just ₹99/month.
//       </Typography>

//       <Box sx={{ mt: 4, display: "flex", gap: 2, flexWrap: "wrap" }}>
//         <Button
//           variant="contained"
//           size="large"
//           sx={{
//             backgroundColor: "#13AA52",
//             color: "#fff",
//             "&:hover": {
//               backgroundColor: "#0e8d44",
//             },
//             borderRadius: 2,
//             px: 4,
//             py: 1.5,
//             fontWeight: 600,
//           }}
//         >
//           Start Free
//         </Button>
//         <Button
//           variant="outlined"
//           size="large"
//           sx={{
//             color: "#0e8d44",
//             borderColor: "#0e8d44",
//             "&:hover": {
//               backgroundColor: "rgba(14, 141, 68, 0.1)",
//               borderColor: "#0e8d44",
//             },
//             borderRadius: 2,
//             px: 4,
//             py: 1.5,
//             fontWeight: 600,
//           }}
//         >
//           Go Premium
//         </Button>
//       </Box>
//     </Grid>

//     <Grid item xs={12} md={6}>
//       <Box
//         component="img"
//         src={BookPng}
//         alt="Hero Image"
//         sx={{
//           width: "100%",
//           maxWidth: 500,
//           mx: "auto",
//           display: "block",
//         }}
//       />
//     </Grid>
//   </Grid>
// </Box>

//     );
// }

import { Box, Grid, Typography, Button } from "@mui/material";
import BookPng from "../../assets/Book.png";

export default function HeroSection() {
  return (
    <Box
      component="section"
      sx={{
        px: { xs: 2, sm: 6, md: 10 },
        py: { xs: 6, md: 10 },
        backgroundColor: "#000",
        color: "#fff",
        // minHeight: "100vh",
      }}
    >
      <Grid
        container
        spacing={10}
        alignItems="center"
        justifyContent="center"
      >
        {/* Left Side: Text */}
        <Grid item xs={12} md={6}>
          <Box sx={{ maxWidth: "500px" }}>
            <Typography
              variant="h3"
              component="h1"
              fontWeight="bold"
              gutterBottom
              sx={{ lineHeight: 1.2 }}
            >
              Stories That Speak To You.
            </Typography>
            <Typography
              variant="h6"
              color="#ccc"
              sx={{ mt: 2, lineHeight: 1.5 }}
            >
              Discover a world of imagination — from free tales to exclusive
              premium reads at just ₹99/month.
            </Typography>

            <Box sx={{ mt: 4, display: "flex", gap: 2, flexWrap: "wrap" }}>
              <Button
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: "#13AA52",
                  color: "#fff",
                  "&:hover": {
                    backgroundColor: "#0e8d44",
                  },
                  borderRadius: 2,
                  px: 4,
                  py: 1.5,
                  fontWeight: 600,
                }}
              >
                Start Free
              </Button>
              <Button
                variant="outlined"
                size="large"
                sx={{
                  color: "#0e8d44",
                  borderColor: "#0e8d44",
                  "&:hover": {
                    backgroundColor: "rgba(14, 141, 68, 0.1)",
                    borderColor: "#0e8d44",
                  },
                  borderRadius: 2,
                  px: 4,
                  py: 1.5,
                  fontWeight: 600,
                }}
              >
                Go Premium
              </Button>
            </Box>
          </Box>
        </Grid>

        {/* Right Side: Image */}
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={BookPng}
            alt="Hero Illustration"
            sx={{
              width: "100%",
              maxWidth: 500,
              mx: "auto",
              display: "block",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

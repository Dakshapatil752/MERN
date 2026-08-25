import {
  Box,
  Container,
  Typography,
  Button,
  Chip,
  Stack
} from "@mui/material";

import SchoolIcon from "@mui/icons-material/School";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function Hero({
  collegeName,
  departmentName,
  tagline
}) {
  const explore = () => {
    document
      .getElementById("about")
      ?.scrollIntoView({
        behavior: "smooth"
      });
  };

  return (
    <Box
      id="home"
      sx={{
        minHeight: {
          xs: "650px",
          md: "720px"
        },

        display: "flex",
        alignItems: "center",

        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.68), rgba(0,0,0,0.68)), url('/images/college.jpg')",

        backgroundSize: "cover",

        backgroundPosition: "center",

        color: "white"
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            maxWidth: "850px"
          }}
        >
          <Chip
            icon={<SchoolIcon />}
            label="Welcome to our Department"
            sx={{
              color: "white",
              borderColor: "white",
              mb: 3
            }}
            variant="outlined"
          />

          <Typography
            variant="h2"
            fontWeight="bold"
            sx={{
              fontSize: {
                xs: "2.5rem",
                md: "4rem"
              }
            }}
          >
            {collegeName}
          </Typography>

          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{
              mt: 2,
              fontSize: {
                xs: "1.6rem",
                md: "2.5rem"
              }
            }}
          >
            {departmentName}
          </Typography>

          <Typography
            variant="h6"
            sx={{
              mt: 3,
              lineHeight: 1.8,
              maxWidth: "700px"
            }}
          >
            {tagline}
          </Typography>

          <Stack
            direction={{
              xs: "column",
              sm: "row"
            }}
            spacing={2}
            sx={{ mt: 4 }}
          >
            <Button
              variant="contained"
              size="large"
              endIcon={<ArrowForwardIcon />}
              onClick={explore}
            >
              Explore Department
            </Button>

            <Button
              variant="outlined"
              color="inherit"
              size="large"
              onClick={() =>
                document
                  .getElementById("courses")
                  ?.scrollIntoView({
                    behavior: "smooth"
                  })
              }
            >
              View Courses
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}

export default Hero;
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Chip
} from "@mui/material";

import MenuBookIcon from "@mui/icons-material/MenuBook";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function Courses({ courses }) {
  return (
    <Box
      id="courses"
      sx={{
        py: 10,
        backgroundColor: "#f5f7fb"
      }}
    >
      <Container maxWidth="lg">
        <Box textAlign="center">
          <Typography
            variant="overline"
            color="primary"
            fontWeight="bold"
          >
            ACADEMICS
          </Typography>

          <Typography
            variant="h3"
            fontWeight="bold"
          >
            Courses Offered
          </Typography>
        </Box>

        <Grid
          container
          spacing={4}
          sx={{ mt: 4 }}
        >
          {courses.map((course) => (
            <Grid
              key={course.title}
              size={{
                xs: 12,
                md: 4
              }}
            >
              <Card
                elevation={4}
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",

                  transition: "0.3s",

                  "&:hover": {
                    transform: "translateY(-8px)"
                  }
                }}
              >
                <CardContent
                  sx={{
                    p: 4,
                    flexGrow: 1
                  }}
                >
                  <MenuBookIcon
                    color="primary"
                    sx={{
                      fontSize: 55
                    }}
                  />

                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    sx={{ mt: 2 }}
                  >
                    {course.title}
                  </Typography>

                  <Chip
                    label={course.duration}
                    color="primary"
                    size="small"
                    sx={{ mt: 2 }}
                  />

                  <Typography
                    color="text.secondary"
                    lineHeight={1.8}
                    sx={{ mt: 2 }}
                  >
                    {course.description}
                  </Typography>
                </CardContent>

                <Button
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    justifyContent: "flex-start",
                    ml: 3,
                    mb: 3
                  }}
                >
                  Learn More
                </Button>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Courses;
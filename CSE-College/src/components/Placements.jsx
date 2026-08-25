import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent
} from "@mui/material";

import WorkIcon from "@mui/icons-material/Work";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

function Placements({ placements }) {
  return (
    <Box
      id="placements"
      sx={{ py: 10 }}
    >
      <Container maxWidth="lg">
        <Box textAlign="center">
          <Typography
            variant="overline"
            color="primary"
            fontWeight="bold"
          >
            CAREER OPPORTUNITIES
          </Typography>

          <Typography
            variant="h3"
            fontWeight="bold"
          >
            Placements
          </Typography>

          <Typography
            color="text.secondary"
            sx={{ mt: 2 }}
          >
            Our students are placed in leading
            technology organizations.
          </Typography>
        </Box>

        <Grid
          container
          spacing={3}
          sx={{ mt: 5 }}
        >
          {placements.map((item) => (
            <Grid
              key={item.company}
              size={{
                xs: 12,
                sm: 6,
                md: 3
              }}
            >
              <Card
                elevation={4}
                sx={{
                  textAlign: "center",

                  transition: "0.3s",

                  "&:hover": {
                    transform: "translateY(-7px)"
                  }
                }}
              >
                <CardContent sx={{ py: 5 }}>
                  <WorkIcon
                    color="primary"
                    sx={{ fontSize: 50 }}
                  />

                  <Typography
                    variant="h5"
                    fontWeight="bold"
                    sx={{ mt: 2 }}
                  >
                    {item.company}
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: 0.5,
                      mt: 2
                    }}
                  >
                    <TrendingUpIcon
                      color="success"
                    />

                    <Typography
                      variant="h5"
                      fontWeight="bold"
                      color="success.main"
                    >
                      {item.package}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Card
          elevation={3}
          sx={{
            mt: 5,
            backgroundColor: "primary.main",
            color: "white"
          }}
        >
          <CardContent sx={{ p: 5 }}>
            <Typography
              variant="h4"
              fontWeight="bold"
            >
              Career Preparation
            </Typography>

            <Typography
              sx={{
                mt: 2,
                lineHeight: 1.8
              }}
            >
              Students receive placement training,
              aptitude preparation, coding practice,
              technical interviews and soft-skills
              training.
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}

export default Placements;
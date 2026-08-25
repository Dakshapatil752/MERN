import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent
} from "@mui/material";

import ComputerIcon from "@mui/icons-material/Computer";
import PsychologyIcon from "@mui/icons-material/Psychology";
import GroupsIcon from "@mui/icons-material/Groups";
import LightbulbIcon from "@mui/icons-material/Lightbulb";

function Infrastructure({ facilities }) {
  const icons = [
    <ComputerIcon />,
    <PsychologyIcon />,
    <GroupsIcon />,
    <LightbulbIcon />
  ];

  return (
    <Box
      id="infrastructure"
      sx={{ py: 10 }}
    >
      <Container maxWidth="lg">
        <Box textAlign="center">
          <Typography
            variant="overline"
            color="primary"
            fontWeight="bold"
          >
            CAMPUS FACILITIES
          </Typography>

          <Typography
            variant="h3"
            fontWeight="bold"
          >
            Infrastructure
          </Typography>
        </Box>

        <Grid
          container
          spacing={3}
          sx={{ mt: 5 }}
        >
          {facilities.map((facility, index) => (
            <Grid
              key={facility.title}
              size={{
                xs: 12,
                sm: 6
              }}
            >
              <Card
                elevation={3}
                sx={{
                  height: "100%",

                  transition: "0.3s",

                  "&:hover": {
                    transform: "translateY(-5px)"
                  }
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Box
                    sx={{
                      color: "primary.main",
                      fontSize: 48
                    }}
                  >
                    {icons[index]}
                  </Box>

                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    sx={{ mt: 2 }}
                  >
                    {facility.title}
                  </Typography>

                  <Typography
                    color="text.secondary"
                    lineHeight={1.8}
                    sx={{ mt: 1 }}
                  >
                    {facility.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box
          component="img"
          src="/images/lab.jpg"
          alt="Computer Laboratory"
          sx={{
            width: "100%",
            height: {
              xs: 250,
              md: 400
            },
            objectFit: "cover",
            borderRadius: 4,
            mt: 5
          }}
        />
      </Container>
    </Box>
  );
}

export default Infrastructure;
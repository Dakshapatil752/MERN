import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent
} from "@mui/material";

import ComputerIcon from "@mui/icons-material/Computer";
import GroupsIcon from "@mui/icons-material/Groups";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";

function About({ about }) {
  const features = [
    {
      icon: <ComputerIcon />,
      title: "Modern Technology",
      text: "Industry-oriented technologies and modern computing facilities."
    },

    {
      icon: <GroupsIcon />,
      title: "Expert Faculty",
      text: "Experienced faculty members dedicated to student development."
    },

    {
      icon: <EmojiObjectsIcon />,
      title: "Innovation",
      text: "Encouraging creativity, research and innovative thinking."
    }
  ];

  return (
    <Box
      id="about"
      sx={{
        py: 10,
        backgroundColor: "#f5f7fb"
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="overline"
          color="primary"
          fontWeight="bold"
        >
          ABOUT OUR DEPARTMENT
        </Typography>

        <Typography
          variant="h3"
          fontWeight="bold"
          sx={{ mb: 3 }}
        >
          About Us
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
          lineHeight={1.9}
          maxWidth="900px"
        >
          {about}
        </Typography>

        <Grid
          container
          spacing={3}
          sx={{ mt: 5 }}
        >
          {features.map((feature) => (
            <Grid
              key={feature.title}
              size={{
                xs: 12,
                md: 4
              }}
            >
              <Card
                elevation={3}
                sx={{
                  height: "100%",
                  transition: "0.3s",

                  "&:hover": {
                    transform: "translateY(-6px)"
                  }
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Box
                    sx={{
                      color: "primary.main",
                      fontSize: 45
                    }}
                  >
                    {feature.icon}
                  </Box>

                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    sx={{ mt: 2 }}
                  >
                    {feature.title}
                  </Typography>

                  <Typography
                    color="text.secondary"
                    sx={{
                      mt: 1,
                      lineHeight: 1.7
                    }}
                  >
                    {feature.text}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default About;
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@mui/material";

import DescriptionIcon from "@mui/icons-material/Description";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DownloadIcon from "@mui/icons-material/Download";

function Syllabus() {
  const subjects = [
    "Programming & Data Structures",
    "Database Management Systems",
    "Operating Systems",
    "Computer Networks",
    "Web Technologies",
    "Artificial Intelligence",
    "Machine Learning",
    "Software Engineering"
  ];

  return (
    <Box
      id="syllabus"
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
          ACADEMIC CURRICULUM
        </Typography>

        <Typography
          variant="h3"
          fontWeight="bold"
        >
          Syllabus
        </Typography>

        <Grid
          container
          spacing={4}
          sx={{ mt: 3 }}
        >
          <Grid
            size={{
              xs: 12,
              md: 7
            }}
          >
            <Card elevation={4}>
              <CardContent sx={{ p: 4 }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2
                  }}
                >
                  <DescriptionIcon
                    color="primary"
                    sx={{ fontSize: 50 }}
                  />

                  <Typography
                    variant="h5"
                    fontWeight="bold"
                  >
                    Computer Science Curriculum
                  </Typography>
                </Box>

                <List>
                  {subjects.map((subject) => (
                    <ListItem
                      key={subject}
                      disableGutters
                    >
                      <ListItemIcon>
                        <CheckCircleIcon
                          color="primary"
                        />
                      </ListItemIcon>

                      <ListItemText
                        primary={subject}
                      />
                    </ListItem>
                  ))}
                </List>

                <Button
                  variant="contained"
                  startIcon={<DownloadIcon />}
                  size="large"
                >
                  Download Syllabus
                </Button>
              </CardContent>
            </Card>
          </Grid>

          <Grid
            size={{
              xs: 12,
              md: 5
            }}
          >
            <Card
              elevation={4}
              sx={{
                height: "100%",
                backgroundColor: "primary.main",
                color: "white"
              }}
            >
              <CardContent sx={{ p: 4 }}>
                <Typography
                  variant="h5"
                  fontWeight="bold"
                >
                  Academic Excellence
                </Typography>

                <Typography
                  sx={{
                    mt: 2,
                    lineHeight: 1.9
                  }}
                >
                  Our curriculum combines fundamental
                  computer science concepts with modern
                  technologies and practical learning.
                </Typography>

                <Typography
                  variant="h6"
                  fontWeight="bold"
                  sx={{ mt: 4 }}
                >
                  Focus Areas
                </Typography>

                <Typography sx={{ mt: 1 }}>
                  • Programming
                </Typography>

                <Typography>
                  • Artificial Intelligence
                </Typography>

                <Typography>
                  • Data Science
                </Typography>

                <Typography>
                  • Cloud Computing
                </Typography>

                <Typography>
                  • Cybersecurity
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Syllabus;
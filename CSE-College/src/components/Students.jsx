import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  Chip,
  Stack
} from "@mui/material";

import GroupsIcon from "@mui/icons-material/Groups";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import CodeIcon from "@mui/icons-material/Code";

function Students({ students }) {
  return (
    <Box
      id="students"
      sx={{
        py: 10,
        backgroundColor: "#f5f7fb"
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={5}
          alignItems="center"
        >
          <Grid
            size={{
              xs: 12,
              md: 6
            }}
          >
            <Box
              component="img"
              src={students.image}
              alt="Computer Science Students"
              sx={{
                width: "100%",
                height: {
                  xs: 300,
                  md: 430
                },
                objectFit: "cover",
                borderRadius: 4,
                boxShadow: 5
              }}
            />
          </Grid>

          <Grid
            size={{
              xs: 12,
              md: 6
            }}
          >
            <Typography
              variant="overline"
              color="primary"
              fontWeight="bold"
            >
              STUDENT LIFE
            </Typography>

            <Typography
              variant="h3"
              fontWeight="bold"
            >
              {students.title}
            </Typography>

            <Typography
              color="text.secondary"
              lineHeight={1.9}
              sx={{ mt: 3 }}
            >
              {students.description}
            </Typography>

            <Stack
              direction="row"
              flexWrap="wrap"
              gap={1}
              sx={{ mt: 3 }}
            >
              <Chip
                icon={<CodeIcon />}
                label="Coding"
              />

              <Chip
                icon={<EmojiEventsIcon />}
                label="Competitions"
              />

              <Chip
                icon={<GroupsIcon />}
                label="Team Projects"
              />
            </Stack>

            <Card
              elevation={2}
              sx={{ mt: 4 }}
            >
              <CardContent>
                <Typography
                  fontWeight="bold"
                  color="primary"
                >
                  Student Development
                </Typography>

                <Typography
                  color="text.secondary"
                  sx={{ mt: 1 }}
                >
                  We focus on technical skills,
                  communication, leadership,
                  teamwork and professional growth.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Students;
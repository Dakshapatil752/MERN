import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Chip
} from "@mui/material";

import PersonIcon from "@mui/icons-material/Person";
import SchoolIcon from "@mui/icons-material/School";

function Faculty({ faculty }) {
  return (
    <Box
      id="faculty"
      sx={{ py: 10 }}
    >
      <Container maxWidth="lg">
        <Box textAlign="center">
          <Typography
            variant="overline"
            color="primary"
            fontWeight="bold"
          >
            OUR TEAM
          </Typography>

          <Typography
            variant="h3"
            fontWeight="bold"
          >
            Faculty
          </Typography>

          <Typography
            color="text.secondary"
            sx={{
              mt: 2,
              maxWidth: 650,
              marginLeft: "auto",
              marginRight: "auto"
            }}
          >
            Meet our experienced faculty members
            who guide students toward academic and
            professional excellence.
          </Typography>
        </Box>

        <Grid
          container
          spacing={3}
          sx={{ mt: 5 }}
        >
          {faculty.map((member) => (
            <Grid
              key={member.name}
              size={{
                xs: 12,
                sm: 6,
                md: 3
              }}
            >
              <Card
                elevation={4}
                sx={{
                  height: "100%",
                  textAlign: "center",

                  transition: "0.3s",

                  "&:hover": {
                    transform: "translateY(-8px)"
                  }
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Avatar
                    sx={{
                      width: 100,
                      height: 100,
                      margin: "auto",
                      backgroundColor:
                        "primary.main"
                    }}
                  >
                    <PersonIcon
                      sx={{ fontSize: 55 }}
                    />
                  </Avatar>

                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    sx={{ mt: 3 }}
                  >
                    {member.name}
                  </Typography>

                  <Typography
                    color="primary"
                    sx={{ mt: 1 }}
                  >
                    {member.designation}
                  </Typography>

                  <Chip
                    icon={<SchoolIcon />}
                    label={member.qualification}
                    size="small"
                    sx={{ mt: 2 }}
                  />
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Faculty;
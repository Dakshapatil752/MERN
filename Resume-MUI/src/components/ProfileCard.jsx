import {
  Card,
  CardContent,
  Typography,
  Button,
  Stack,
  Chip,
} from "@mui/material";

import {
  GitHub,
  LinkedIn,
  Email,
} from "@mui/icons-material";

function ProfileCard({ personal }) {
  return (
    <Card elevation={4}>
      <CardContent sx={{ textAlign: "center", py: 5 }}>
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          {personal.name}
        </Typography>

        <Typography
          variant="h5"
          color="primary"
          gutterBottom
        >
          {personal.role}
        </Typography>

        <Typography color="text.secondary" mb={3}>
          📍 {personal.location}
        </Typography>

        <Stack
          direction="row"
          spacing={1}
          justifyContent="center"
          flexWrap="wrap"
          mb={3}
        >
          <Chip
            icon={<Email />}
            label={personal.email}
          />

          <Chip
            icon={<GitHub />}
            label="GitHub"
            clickable
            component="a"
            href={personal.github}
            target="_blank"
          />

          <Chip
            icon={<LinkedIn />}
            label="LinkedIn"
            clickable
            component="a"
            href={personal.linkedin}
            target="_blank"
          />
        </Stack>

        <Button
          variant="contained"
          size="large"
          href={`mailto:${personal.email}`}
        >
          Contact Me
        </Button>
      </CardContent>
    </Card>
  );
}

export default ProfileCard;
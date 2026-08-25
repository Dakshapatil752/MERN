import {
  Card,
  CardContent,
  Typography,
  Stack,
  Button,
} from "@mui/material";

import {
  Email,
  Phone,
} from "@mui/icons-material";

function ContactCard({ personal }) {
  return (
    <Card id="contact" elevation={3}>
      <CardContent sx={{ textAlign: "center", py: 4 }}>
        <Typography
          variant="h5"
          fontWeight="bold"
          color="primary"
          gutterBottom
        >
          Contact Me
        </Typography>

        <Typography color="text.secondary" mb={3}>
          Feel free to contact me for opportunities,
          collaborations, or projects.
        </Typography>

        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          justifyContent="center"
        >
          <Button
            variant="contained"
            startIcon={<Email />}
            href={`mailto:${personal.email}`}
          >
            Email Me
          </Button>

          <Button
            variant="outlined"
            startIcon={<Phone />}
            href={`tel:${personal.phone}`}
          >
            Call Me
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
}

export default ContactCard;
import {
  Card,
  CardContent,
  Typography,
} from "@mui/material";

function AboutCard({ about }) {
  return (
    <Card id="about" elevation={3}>
      <CardContent>
        <Typography
          variant="h5"
          fontWeight="bold"
          color="primary"
          gutterBottom
        >
          About Me
        </Typography>

        <Typography color="text.secondary" lineHeight={1.8}>
          {about}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default AboutCard;
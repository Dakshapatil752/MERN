import {
  Card,
  CardContent,
  Typography,
  Box,
  Chip,
} from "@mui/material";

function ExperienceCard({ experience }) {
  return (
    <Card elevation={3}>
      <CardContent>
        <Typography
          variant="h5"
          fontWeight="bold"
          color="primary"
          gutterBottom
        >
          Experience
        </Typography>

        {experience.map((item, index) => (
          <Box key={index} sx={{ mb: 3 }}>
            <Typography variant="h6" fontWeight="bold">
              {item.position}
            </Typography>

            <Chip
              label={item.company}
              size="small"
              color="primary"
              sx={{ mt: 1 }}
            />

            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ mt: 1 }}
            >
              {item.duration}
            </Typography>

            <Typography
              color="text.secondary"
              sx={{ mt: 1 }}
            >
              {item.description}
            </Typography>
          </Box>
        ))}
      </CardContent>
    </Card>
  );
}

export default ExperienceCard;
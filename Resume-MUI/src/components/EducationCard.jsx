

import {
  Card,
  CardContent,
  Typography,
  Divider,
  Box,
} from "@mui/material";

function EducationCard({ education }) {
  return (
    <Card elevation={3}>
      <CardContent>
        <Typography
          variant="h5"
          fontWeight="bold"
          color="primary"
          gutterBottom
        >
          Education
        </Typography>

        {education.map((item, index) => (
          <Box key={index} sx={{ mb: 3 }}>
            <Typography variant="h6" fontWeight="bold">
              {item.degree}
            </Typography>

            <Typography color="text.secondary">
              {item.college}
            </Typography>

            <Typography
              variant="body2"
              color="primary"
              sx={{ mt: 1 }}
            >
              {item.year}
            </Typography>

            <Typography
              color="text.secondary"
              sx={{ mt: 1 }}
            >
              {item.description}
            </Typography>

            {index < education.length - 1 && (
              <Divider sx={{ mt: 3 }} />
            )}
          </Box>
        ))}
      </CardContent>
    </Card>
  );
}

export default EducationCard;
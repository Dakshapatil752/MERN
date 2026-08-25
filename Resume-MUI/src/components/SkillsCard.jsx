import {
  Card,
  CardContent,
  Typography,
  Stack,
  Chip,
} from "@mui/material";

function SkillsCard({ skills }) {
  return (
    <Card id="skills" elevation={3}>
      <CardContent>
        <Typography
          variant="h5"
          fontWeight="bold"
          color="primary"
          gutterBottom
        >
          Skills
        </Typography>

        <Stack
          direction="row"
          spacing={1}
          useFlexGap
          flexWrap="wrap"
        >
          {skills.map((skill) => (
            <Chip
              key={skill}
              label={skill}
              color="primary"
              variant="outlined"
            />
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
}

export default SkillsCard;
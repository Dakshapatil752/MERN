import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import VerifiedIcon from "@mui/icons-material/Verified";

function CertificationsCard({ certifications }) {
  return (
    <Card elevation={3}>
      <CardContent>
        <Typography
          variant="h5"
          fontWeight="bold"
          color="primary"
          gutterBottom
        >
          Certifications
        </Typography>

        <List>
          {certifications.map((certificate) => (
            <ListItem key={certificate}>
              <ListItemIcon>
                <VerifiedIcon color="primary" />
              </ListItemIcon>

              <ListItemText primary={certificate} />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
}

export default CertificationsCard;
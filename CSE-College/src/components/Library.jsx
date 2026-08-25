import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@mui/material";

import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

function Library() {
  return (
    <Box
      id="library"
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
              src="/images/library.jpg"
              alt="College Library"
              sx={{
                width: "100%",
                height: 400,
                objectFit: "cover",
                borderRadius: 4,
                boxShadow: 4
              }}
            />
          </Grid>

          <Grid
            size={{
              xs: 12,
              md: 6
            }}
          >
            <LocalLibraryIcon
              color="primary"
              sx={{
                fontSize: 60
              }}
            />

            <Typography
              variant="h3"
              fontWeight="bold"
              sx={{ mt: 1 }}
            >
              Library
            </Typography>

            <Typography
              color="text.secondary"
              lineHeight={1.9}
              sx={{ mt: 2 }}
            >
              Our department library provides students
              with access to textbooks, reference
              materials, journals, research papers and
              digital learning resources.
            </Typography>

            <List>
              {[
                "Technical Books",
                "Research Journals",
                "Digital Resources",
                "Project References"
              ].map((item) => (
                <ListItem
                  key={item}
                  disableGutters
                >
                  <ListItemIcon>
                    <CheckCircleIcon
                      color="primary"
                    />
                  </ListItemIcon>

                  <ListItemText
                    primary={item}
                  />
                </ListItem>
              ))}
            </List>

            <Button
              variant="contained"
              size="large"
              sx={{ mt: 2 }}
            >
              Library Resources
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Library;
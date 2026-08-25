import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Avatar,
  Grid
} from "@mui/material";

import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import VerifiedIcon from "@mui/icons-material/Verified";

function HODMessage({ hod }) {
  return (
    <Box
      id="hod"
      sx={{ py: 10 }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="overline"
          color="primary"
          fontWeight="bold"
        >
          LEADERSHIP
        </Typography>

        <Typography
          variant="h3"
          fontWeight="bold"
          sx={{ mb: 5 }}
        >
          Message from the HOD
        </Typography>

        <Card
          elevation={5}
          sx={{
            borderRadius: 4,
            overflow: "hidden"
          }}
        >
          <Grid container>
            <Grid
              size={{
                xs: 12,
                md: 4
              }}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "primary.main",
                p: 5
              }}
            >
              <Box textAlign="center">
                <Avatar
                  src={hod.image}
                  alt={hod.name}
                  sx={{
                    width: 190,
                    height: 190,
                    margin: "auto",
                    border: "5px solid white"
                  }}
                />

                <Typography
                  variant="h6"
                  color="white"
                  fontWeight="bold"
                  sx={{ mt: 3 }}
                >
                  {hod.name}
                </Typography>

                <Typography color="white">
                  {hod.designation}
                </Typography>
              </Box>
            </Grid>

            <Grid
              size={{
                xs: 12,
                md: 8
              }}
            >
              <CardContent
                sx={{
                  p: {
                    xs: 4,
                    md: 6
                  }
                }}
              >
                <FormatQuoteIcon
                  color="primary"
                  sx={{
                    fontSize: 55
                  }}
                />

                <Typography
                  variant="body1"
                  color="text.secondary"
                  lineHeight={2}
                  sx={{ mt: 1 }}
                >
                  {hod.message}
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    mt: 3
                  }}
                >
                  <VerifiedIcon
                    color="primary"
                  />

                  <Typography
                    fontWeight="bold"
                  >
                    {hod.qualification}
                  </Typography>
                </Box>
              </CardContent>
            </Grid>
          </Grid>
        </Card>
      </Container>
    </Box>
  );
}

export default HODMessage;
import {
  Box,
  Container,
  Typography,
  Grid,
  Divider,
  Stack,
  IconButton
} from "@mui/material";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

function Footer({
  collegeName,
  departmentName,
  location
}) {
  return (
    <Box
      id="contact"
      sx={{
        backgroundColor: "#102a43",
        color: "white",
        pt: 8,
        pb: 3
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={5}
        >
          <Grid
            size={{
              xs: 12,
              md: 5
            }}
          >
            <Typography
              variant="h5"
              fontWeight="bold"
            >
              {collegeName}
            </Typography>

            <Typography
              variant="h6"
              sx={{ mt: 1 }}
            >
              {departmentName}
            </Typography>

            <Typography
              sx={{
                mt: 2,
                opacity: 0.8,
                lineHeight: 1.8
              }}
            >
              Empowering students with knowledge,
              technology and innovation to build a
              better future.
            </Typography>
          </Grid>

          <Grid
            size={{
              xs: 12,
              md: 4
            }}
          >
            <Typography
              variant="h6"
              fontWeight="bold"
            >
              Contact Us
            </Typography>

            <Stack spacing={2} sx={{ mt: 3 }}>
              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  alignItems: "center"
                }}
              >
                <LocationOnIcon />

                <Typography>
                  {location}
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  alignItems: "center"
                }}
              >
                <EmailIcon />

                <Typography>
                  cse@college.edu
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  alignItems: "center"
                }}
              >
                <PhoneIcon />

                <Typography>
                  +91 98765 43210
                </Typography>
              </Box>
            </Stack>
          </Grid>

          <Grid
            size={{
              xs: 12,
              md: 3
            }}
          >
            <Typography
              variant="h6"
              fontWeight="bold"
            >
              Follow Us
            </Typography>

            <Stack
              direction="row"
              sx={{ mt: 2 }}
            >
              <IconButton
                sx={{ color: "white" }}
              >
                <span>f</span>
              </IconButton>

              <IconButton
                sx={{ color: "white" }}
              >
                <span>in</span>
              </IconButton>

              <IconButton
                sx={{ color: "white" }}
              >
                <span>𝕏</span>
              </IconButton>
            </Stack>
          </Grid>
        </Grid>

        <Divider
          sx={{
            my: 4,
            borderColor:
              "rgba(255,255,255,0.2)"
          }}
        />

        <Typography
          variant="body2"
          textAlign="center"
          sx={{ opacity: 0.7 }}
        >
          © 2026 {collegeName} — Department
          of Computer Science & Engineering.
          All Rights Reserved.
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
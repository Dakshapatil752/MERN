import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
} from "@mui/material";

function Navbar() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <AppBar position="sticky">
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant="h6" fontWeight="bold">
          My Resume
        </Typography>

        <Box sx={{ display: "flex", gap: 1 }}>
          <Button color="inherit" onClick={() => scrollToSection("about")}>
            About
          </Button>

          <Button color="inherit" onClick={() => scrollToSection("skills")}>
            Skills
          </Button>

          <Button color="inherit" onClick={() => scrollToSection("projects")}>
            Projects
          </Button>

          <Button color="inherit" onClick={() => scrollToSection("contact")}>
            Contact
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
import { useState } from "react";

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";

function Navbar() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    ["Home", "home"],
    ["About", "about"],
    ["HOD", "hod"],
    ["Faculty", "faculty"],
    ["Courses", "courses"],
    ["Infrastructure", "infrastructure"],
    ["Library", "library"],
    ["Placements", "placements"],
    ["Syllabus", "syllabus"],
    ["Contact", "contact"]
  ];

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth"
    });

    setOpen(false);
  };

  return (
    <>
      <AppBar
        position="sticky"
        elevation={4}
      >
        <Toolbar
          sx={{
            maxWidth: "1400px",
            width: "100%",
            margin: "auto",
            minHeight: "75px",
            justifyContent: "space-between"
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1
            }}
          >
            <Typography
              variant="h6"
              fontWeight="bold"
            >
              CSE
            </Typography>

            <Box>
              <Typography
                variant="body2"
                sx={{ fontWeight: "bold" }}
              >
                Computer Science
              </Typography>

              <Typography
                variant="caption"
              >
                & Engineering
              </Typography>
            </Box>
          </Box>

          {/* Desktop Menu */}

          <Box
            sx={{
              display: {
                xs: "none",
                lg: "flex"
              },
              gap: 0.3
            }}
          >
            {menuItems.map(([name, id]) => (
              <Button
                key={id}
                color="inherit"
                onClick={() =>
                  scrollToSection(id)
                }
                sx={{
                  fontSize: "0.78rem"
                }}
              >
                {name}
              </Button>
            ))}
          </Box>

          {/* Mobile Menu */}

          <IconButton
            color="inherit"
            onClick={() => setOpen(true)}
            sx={{
              display: {
                xs: "block",
                lg: "none"
              }
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
      >
        <Box sx={{ width: 260 }}>
          <List>
            {menuItems.map(([name, id]) => (
              <ListItem
                key={id}
                disablePadding
              >
                <ListItemButton
                  onClick={() =>
                    scrollToSection(id)
                  }
                >
                  <ListItemText primary={name} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}

export default Navbar;
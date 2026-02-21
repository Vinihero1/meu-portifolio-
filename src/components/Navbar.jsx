import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

function Navbar({ mode, setMode }) {
  const [open, setOpen] = useState(false);

  const toggleTheme = () => {
    setMode(mode === "dark" ? "light" : "dark");
  };

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
    { name: "Currículo", path: "/curriculo" },
  ];

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          background:
            mode === "dark" ? "rgba(15, 23, 42, 0.7)" : "rgba(255,255,255,0.7)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* LOGO */}
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Vinícius<span style={{ color: "#00f5ff" }}>.</span>
          </Typography>

          {/* MENU DESKTOP */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Button
                  sx={{
                    position: "relative",
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      width: 0,
                      height: "2px",
                      bottom: 0,
                      left: 0,
                      backgroundColor: "#00f5ff",
                      transition: "0.3s",
                    },
                    "&:hover::after": {
                      width: "100%",
                    },
                  }}
                >
                  {item.name}
                </Button>
              </Link>
            ))}

            <IconButton onClick={toggleTheme} color="inherit">
              {mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
          </Box>

          {/* MENU MOBILE */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton onClick={toggleDrawer} color="inherit">
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* 👇 ESPAÇO AUTOMÁTICO DA APPBAR */}
      <Toolbar />

      {/* DRAWER MOBILE */}
      <Drawer anchor="right" open={open} onClose={toggleDrawer}>
        <Box
          sx={{
            width: 250,
            height: "100%",
            background: mode === "dark" ? "#0f172a" : "#ffffff",
            color: mode === "dark" ? "#fff" : "#000",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "flex-end", p: 2 }}>
            <IconButton onClick={toggleDrawer}>
              <CloseIcon />
            </IconButton>
          </Box>

          <List>
            {navItems.map((item, index) => (
              <ListItem key={index} disablePadding>
                <Link
                  to={item.path}
                  style={{
                    textDecoration: "none",
                    width: "100%",
                    color: "inherit",
                  }}
                  onClick={toggleDrawer}
                >
                  <ListItemButton>
                    <ListItemText primary={item.name} />
                  </ListItemButton>
                </Link>
              </ListItem>
            ))}

            <ListItem>
              <IconButton onClick={toggleTheme} color="inherit">
                {mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
              </IconButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
}

export default Navbar;

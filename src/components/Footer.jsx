import React from "react";
import { Box, Typography, Container, IconButton } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import GitHubIcon from "@mui/icons-material/GitHub";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Box
      component="footer"
      sx={{
        py: 5,
        bgcolor: "#323946",
        borderTop: "2px solid #1f242d",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          gap: 3,
        }}
      >
        <Typography variant="body2" sx={{ color: "#fff", fontWeight: 500 }}>
          Copyright &copy; 2024 by{" "}
          <span style={{ color: "#00f5ff" }}>Vinícius Eduardo</span> | All
          Rights Reserved.
        </Typography>

        <Box sx={{ display: "flex", gap: 2 }}>
          <IconButton
            href="https://github.com/Vinihero1?tab=repositories"
            target="_blank"
            sx={{
              color: "#00f5ff",
              border: "2px solid #00f5ff",
              "&:hover": {
                bgcolor: "#00f5ff",
                color: "#1f242d",
                boxShadow: "0 0 15px #00f5ff",
              },
            }}
          >
            <GitHubIcon />
          </IconButton>

          <IconButton
            href="https://www.linkedin.com/in/vinicius-eduardosilva"
            target="_blank"
            sx={{
              color: "#00f5ff",
              border: "2px solid #00f5ff",
              "&:hover": {
                bgcolor: "#00f5ff",
                color: "#1f242d",
                boxShadow: "0 0 15px #00f5ff",
              },
            }}
          >
            <LinkedInIcon />
          </IconButton>

          <IconButton
            href="https://wa.me/5534988292941"
            target="_blank"
            sx={{
              color: "#00f5ff",
              border: "2px solid #00f5ff",
              "&:hover": {
                bgcolor: "#00f5ff",
                color: "#1f242d",
                boxShadow: "0 0 15px #00f5ff",
              },
            }}
          >
            <WhatsAppIcon />
          </IconButton>
        </Box>

        <IconButton
          onClick={scrollToTop}
          sx={{
            bgcolor: "#00f5ff",
            color: "#1f242d",
            "&:hover": { bgcolor: "#fff", transform: "translateY(-5px)" },
          }}
        >
          <ArrowUpwardIcon />
        </IconButton>
      </Container>
    </Box>
  );
};

export default Footer;

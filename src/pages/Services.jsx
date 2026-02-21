import React, { useState } from "react"; // IMPORTANTE: Verifique se isso está aqui
import {
  Box,
  Typography,
  Button,
  Container,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Divider,
} from "@mui/material";
import { motion } from "framer-motion";
import { Code, SettingsSuggest, SupportAgent } from "@mui/icons-material";

const services = [
  {
    title: "Web Developer",
    desc: "Crafting responsive and high-performance user interfaces using React.js and modern web standards.",
    details:
      "I focus on creating clean, maintainable code, implementing pixel-perfect designs, and ensuring seamless user experiences. Expertise in Material UI, Framer Motion, and API integration.",
    icon: <Code sx={{ fontSize: 50 }} />,
  },
  {
    title: "Systems Analyst",
    desc: "Analyzing complex data and processes to build efficient database solutions and system logic.",
    details:
      "Skilled in SQL (DML/DDL) for database management and troubleshooting. Experience in mapping requirements and developing logic with Python and Java.",
    icon: <SettingsSuggest sx={{ fontSize: 50 }} />,
  },
  {
    title: "IT Support Specialist",
    desc: "Providing expert technical assistance and managing robust infrastructure for business continuity.",
    details:
      "Proven track record in managing Windows Server environments, network infrastructure (TCP/IP), and resolving complex hardware/software issues.",
    icon: <SupportAgent sx={{ fontSize: 50 }} />,
  },
];

function Services() {
  // Estados para controlar o Modal
  const [open, setOpen] = useState(false);
  const [currentService, setCurrentService] = useState({
    title: "",
    details: "",
  });

  const handleOpen = (service) => {
    setCurrentService(service);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box
      id="services"
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: "#1f242d",
        py: 8,
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          align="center"
          sx={{ fontWeight: "bold", color: "#fff", mb: 8 }}
        >
          Our <span style={{ color: "#00f5ff" }}>Services</span>
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 3,
            justifyContent: "center",
          }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              style={{ flex: 1 }}
            >
              <Paper
                sx={{
                  p: 5,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  backgroundColor: "#323946",
                  color: "#fff",
                  borderRadius: "25px",
                  border: "2px solid transparent",
                  transition: "0.3s",
                  "&:hover": {
                    borderColor: "#00f5ff",
                    transform: "translateY(-10px)",
                  },
                }}
              >
                <Box sx={{ color: "#00f5ff", mb: 2 }}>{service.icon}</Box>
                <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
                  {service.title}
                </Typography>
                <Typography
                  align="center"
                  sx={{ color: "rgba(255,255,255,0.7)", mb: 4 }}
                >
                  {service.desc}
                </Typography>

                <Button
                  variant="contained"
                  onClick={() => handleOpen(service)} // Aqui dispara a função
                  sx={{
                    borderRadius: "30px",
                    backgroundColor: "#00f5ff",
                    color: "#1f242d",
                    fontWeight: "bold",
                    textTransform: "none",
                    px: 4,
                    mt: "auto",
                    "&:hover": { backgroundColor: "#00e0ea" },
                  }}
                >
                  Read More
                </Button>
              </Paper>
            </motion.div>
          ))}
        </Box>

        {/* ESTRUTURA DO MODAL (DIALOG) */}
        <Dialog
          open={open}
          onClose={handleClose}
          PaperProps={{
            sx: {
              bgcolor: "#1f242d",
              color: "#fff",
              border: "1px solid #00f5ff",
              borderRadius: "15px",
            },
          }}
        >
          <DialogTitle sx={{ color: "#00f5ff", fontWeight: "bold" }}>
            {currentService.title}
          </DialogTitle>
          <DialogContent
            dividers
            sx={{ borderColor: "rgba(0, 245, 255, 0.1)" }}
          >
            <Typography sx={{ lineHeight: 1.8 }}>
              {currentService.details}
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} sx={{ color: "#00f5ff" }}>
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    </Box>
  );
}

export default Services;

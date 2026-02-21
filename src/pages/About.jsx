import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  Container,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { motion } from "framer-motion";
import profile from "../assets/profile.png";
import CodeIcon from "@mui/icons-material/Code";
import TerminalIcon from "@mui/icons-material/Terminal";

function About() {
  const [open, setOpen] = useState(false);

  return (
    <Box
      id="about"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        backgroundColor: "#1f242d",
        py: { xs: 10, md: 0 },
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={4}
          alignItems="center"
          // Força a disposição horizontal no desktop e vertical no mobile
          sx={{ flexDirection: { xs: "column", md: "row" } }}
        >
          {/* LADO ESQUERDO: FOTO */}
          <Grid item xs={12} md={5}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: { xs: 260, md: 350, lg: 400 },
                  height: { xs: 300, md: 400, lg: 450 },
                  mx: "auto",
                }}
              >
                {/* Efeito Glow */}
                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    background: "#00f5ff",
                    clipPath:
                      "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
                    filter: "blur(35px)",
                    opacity: 0.2,
                  }}
                />

                {/* Hexágono Borda */}
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    background: "#00f5ff",
                    clipPath:
                      "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "4px",
                  }}
                >
                  <Box
                    component="img"
                    src={profile}
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      bgcolor: "#1f242d",
                      clipPath:
                        "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
                    }}
                  />
                </Box>
              </Box>
            </motion.div>
          </Grid>

          {/* LADO DIREITO: ESCRITA */}
          <Grid item xs={12} md={7}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Box
                sx={{ pl: { md: 4 }, textAlign: { xs: "center", md: "left" } }}
              >
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: "bold",
                    color: "#fff",
                    mb: 1,
                    fontSize: { xs: "2.5rem", md: "3.5rem" },
                  }}
                >
                  About <span style={{ color: "#00f5ff" }}>Me</span>
                </Typography>

                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 600,
                    color: "#fff",
                    mb: 2,
                    fontSize: { xs: "1.2rem", md: "1.5rem" },
                  }}
                >
                  Frontend Developer &{" "}
                  <span style={{ color: "#00f5ff" }}>IT Specialist</span>
                </Typography>

                <Typography
                  sx={{
                    color: "rgba(255, 255, 255, 0.8)",
                    lineHeight: 1.6,
                    mb: 4,
                    fontSize: "1rem",
                    maxWidth: "550px",
                  }}
                >
                  I specialize in creating high-performance user interfaces with
                  **React**, while maintaining a solid background in **IT
                  Infrastructure and SQL**. My goal is to build seamless digital
                  experiences by connecting robust backend logic with intuitive
                  frontend design.
                </Typography>

                <Button
                  variant="contained"
                  onClick={() => setOpen(true)}
                  sx={{
                    px: 4,
                    py: 1.2,
                    borderRadius: "30px",
                    bgcolor: "#00f5ff",
                    color: "#1f242d",
                    fontWeight: "bold",
                    textTransform: "none",
                    "&:hover": {
                      bgcolor: "#00e0ea",
                      boxShadow: "0 0 20px rgba(0, 245, 255, 0.5)",
                    },
                    transition: "0.3s",
                  }}
                >
                  Read More
                </Button>
              </Box>
            </motion.div>
          </Grid>
        </Grid>

        {/* Modal Read More (Mantido) */}
        <Dialog
          open={open}
          onClose={() => setOpen(false)}
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
            Professional Deep Dive
          </DialogTitle>
          <DialogContent
            dividers
            sx={{ borderColor: "rgba(0, 245, 255, 0.1)" }}
          >
            <Box sx={{ mb: 3 }}>
              <Typography
                variant="h6"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  color: "#00f5ff",
                  mb: 1,
                }}
              >
                <CodeIcon sx={{ mr: 1 }} /> Frontend Mastery
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "rgba(255,255,255,0.7)" }}
              >
                Expertise in building responsive SPAs using React.js and
                Material UI.
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="h6"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  color: "#00f5ff",
                  mb: 1,
                }}
              >
                <TerminalIcon sx={{ mr: 1 }} /> Support & Data
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "rgba(255,255,255,0.7)" }}
              >
                Experience in SQL and IT Infrastructure management.
              </Typography>
            </Box>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpen(false)} sx={{ color: "#00f5ff" }}>
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    </Box>
  );
}

export default About;

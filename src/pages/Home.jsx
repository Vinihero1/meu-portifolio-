import {
  Box,
  Typography,
  Button,
  Grid,
  Container,
  IconButton,
} from "@mui/material";
import { GitHub, LinkedIn, WhatsApp } from "@mui/icons-material";
import { Typewriter } from "react-simple-typewriter";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import profile from "../assets/profile.png";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const socialLinks = [
    {
      icon: <LinkedIn />,
      url: "https://www.linkedin.com/in/vinicius-eduardosilva/",
      color: "#0077b5",
    },
    { icon: <GitHub />, url: "https://github.com/vinihero1", color: "#fff" },
    {
      icon: <WhatsApp />,
      url: "https://wa.me/5534988292941",
      color: "#25d366",
    },
  ];

  return (
    <Box
      id="home"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        background:
          "linear-gradient(135deg, #0f172a 0%, #0b1120 40%, #111827 100%)",
      }}
    >
      <Particles
        init={particlesInit}
        options={{
          background: { color: "transparent" },
          fpsLimit: 60,
          particles: {
            number: { value: 40 },
            color: { value: "#00f5ff" },
            links: {
              enable: true,
              color: "#00f5ff",
              distance: 150,
              opacity: 0.3,
            },
            move: { enable: true, speed: 1 },
            opacity: { value: 0.3 },
            size: { value: 3 },
          },
        }}
        style={{ position: "absolute", inset: 0, zIndex: 0 }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid
          container
          alignItems="center"
          justifyContent="space-between"
          sx={{ flexDirection: { xs: "column-reverse", md: "row" } }}
        >
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Typography variant="h6" sx={{ mb: 1, color: "#fff" }}>
                Hello, It's Me
              </Typography>
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: { xs: "2.5rem", md: "3.5rem" },
                  lineHeight: 1.1,
                  color: "#fff",
                }}
              >
                Vinícius Eduardo
              </Typography>
              <Typography
                sx={{
                  mt: 2,
                  fontWeight: 600,
                  fontSize: { xs: "1.2rem", md: "1.6rem" },
                  color: "#fff",
                }}
              >
                And I'm a{" "}
                <span style={{ color: "#00f5ff" }}>
                  <Typewriter
                    words={[
                      "Frontend Developer",
                      "React Developer",
                      "IT Specialist",
                    ]}
                    loop
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1500}
                  />
                </span>
              </Typography>

              <Typography
                sx={{
                  mt: 3,
                  mb: 4,
                  maxWidth: 450,
                  color: "rgba(255,255,255,0.7)",
                  textAlign: "justify",
                  lineHeight: 1.7,
                }}
              >
                Dedicated to developing modern, responsive, and high-performance
                applications while leveraging a strong foundation in IT
                Infrastructure to build reliable digital solutions.
              </Typography>

              <Box sx={{ mb: 4 }}>
                {socialLinks.map((social, i) => (
                  <IconButton
                    key={i}
                    component="a"
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      mr: 2,
                      border: "2px solid #00f5ff",
                      color: "#00f5ff",
                      transition: "0.3s",
                      "&:hover": {
                        bgcolor: "#00f5ff",
                        color: "#0f172a",
                        boxShadow: "0 0 15px #00f5ff",
                        transform: "translateY(-3px)",
                      },
                    }}
                  >
                    {social.icon}
                  </IconButton>
                ))}
              </Box>

              <Button
                variant="contained"
                onClick={() => navigate("/curriculo")}
                sx={{
                  px: 4,
                  py: 1.5,
                  borderRadius: "30px",
                  bgcolor: "#00f5ff",
                  color: "#0f172a",
                  fontWeight: "bold",
                  textTransform: "none",
                  "&:hover": {
                    bgcolor: "#00e0ea",
                    boxShadow: "0 0 20px rgba(0, 245, 255, 0.4)",
                  },
                }}
              >
                Download CV
              </Button>
            </motion.div>
          </Grid>

          <Grid
            item
            xs={12}
            md={5}
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "flex-end" },
              position: "relative",
              right: { md: "-60px", lg: "-100px", xs: "0" },
            }}
          >
            {/* Mantivemos a estrutura da sua imagem hexágono */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: { xs: 260, md: 380, lg: 440 },
                  height: { xs: 300, md: 430, lg: 500 },
                  animation: "float 4s ease-in-out infinite",
                  "@keyframes float": {
                    "0%, 100%": { transform: "translateY(0px)" },
                    "50%": { transform: "translateY(-20px)" },
                  },
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    background: "#00f5ff",
                    clipPath:
                      "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
                    filter: "blur(40px)",
                    opacity: 0.2,
                  }}
                />
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    background: "linear-gradient(180deg, #00f5ff, #0080ff)",
                    clipPath:
                      "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "5px",
                  }}
                >
                  <Box
                    component="img"
                    src={profile}
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      bgcolor: "#0b1120",
                      clipPath:
                        "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
                    }}
                  />
                </Box>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Home;

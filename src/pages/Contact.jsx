import React from "react";
import { Box, Typography, Container, TextField, Button } from "@mui/material";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <Box id="contact" sx={{ py: 10, bgcolor: "#1f242d", minHeight: "100vh" }}>
      <Container maxWidth="md">
        <Typography
          variant="h3"
          align="center"
          sx={{
            fontWeight: "bold",
            color: "#fff",
            mb: 8,
            fontSize: { xs: "2.5rem", md: "3.5rem" },
          }}
        >
          Contact <span style={{ color: "#00f5ff" }}>Me!</span>
        </Typography>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Box
            component="form"
            action="https://formspree.io/f/meelrobl"
            method="POST"
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "1fr 1fr",
              },
              gap: "20px",
            }}
          >
            {/* --- CAMPOS OCULTOS DE CONFIGURAÇÃO --- */}
            {/* Redireciona de volta para o seu site após o envio */}
            <input
              type="hidden"
              name="_next"
              value="https://vinihero1.github.io/Instagram-Clone/"
            />
            {/* Evita que o Formspree peça confirmação de captcha se possível */}
            <input type="hidden" name="_captcha" value="false" />

            {/* --- CAMPOS DO FORMULÁRIO --- */}
            <CustomTextField name="nome" placeholder="Full Name" required />
            <CustomTextField
              name="email"
              type="email"
              placeholder="Email Address"
              required
            />

            <CustomTextField name="telefone" placeholder="Mobile Number" />
            <CustomTextField name="assunto" placeholder="Email Subject" />

            <Box sx={{ gridColumn: { xs: "span 1", sm: "span 2" } }}>
              <CustomTextField
                name="mensagem"
                placeholder="Your Message"
                fullWidth
                multiline
                rows={10}
                required
              />
            </Box>

            <Box
              sx={{
                gridColumn: { xs: "span 1", sm: "span 2" },
                display: "flex",
                justifyContent: "center",
                mt: 2,
              }}
            >
              <Button
                type="submit"
                variant="contained"
                sx={{
                  bgcolor: "#00f5ff",
                  color: "#1f242d",
                  fontWeight: "bold",
                  px: 6,
                  py: 1.5,
                  borderRadius: "30px",
                  textTransform: "none",
                  boxShadow: "0 0 15px rgba(0, 245, 255, 0.4)",
                  "&:hover": {
                    bgcolor: "#00e0ea",
                    boxShadow: "0 0 25px rgba(0, 245, 255, 0.6)",
                    transform: "scale(1.05)",
                  },
                  transition: "0.3s",
                }}
              >
                Send Message
              </Button>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

const CustomTextField = (props) => (
  <TextField
    {...props}
    fullWidth
    variant="outlined"
    sx={{
      "& .MuiOutlinedInput-root": {
        color: "#fff",
        backgroundColor: "#323946",
        borderRadius: "10px",
        "& fieldset": { border: "none" },
        "&.Mui-focused fieldset": { border: "1px solid #00f5ff" },
      },
      "& input::placeholder, & textarea::placeholder": {
        color: "#adb5bd",
        opacity: 0.8,
      },
    }}
  />
);

export default Contact;

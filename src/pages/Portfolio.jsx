import React from "react";
import { Box, Typography, Container, IconButton, Stack } from "@mui/material";
import { motion } from "framer-motion";
import LaunchIcon from "@mui/icons-material/Launch";

const projects = [
  {
    title: "Instagram Clone",
    desc: "Recriação da interface social com foco em feed e stories responsivos.",
    tags: ["HTML", "CSS", "JS"],
    img: "https://images.unsplash.com/photo-1611267254323-4db7b39c732c?q=80&w=400&h=300&fit=crop",
    link: "https://vinihero1.github.io/Instagram-Clone/",
  },
  {
    title: "iPhone 13 Pro Clone",
    desc: "Landing page premium com troca dinâmica de cores e animações suaves.",
    tags: ["HTML", "CSS", "JS"],
    img: "https://images.unsplash.com/photo-1632661674596-df8be070a5c5?q=80&w=400&h=300&fit=crop",
    link: "https://phone-13-pro-clone.vercel.app/",
  },
  {
    title: "Calculadora de IMC",
    desc: "Lógica matemática aplicada à saúde com retorno visual imediato.",
    tags: ["JS", "CSS", "Forms"],
    img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=400&h=300&fit=crop",
    link: "https://vinihero1.github.io/imcalculadora/",
  },
  {
    title: "Gerador de QR Code",
    desc: "Integração de API para conversão de dados em códigos escaneáveis.",
    tags: ["API", "JS", "UX"],
    img: "https://images.unsplash.com/photo-1595079676339-1534801ad6cf?q=80&w=400&h=300&fit=crop",
    link: "https://vinihero1.github.io/gerador-qrcode/",
  },
  {
    title: "Venda seu Carro",
    desc: "Interface de formulário avançada com preview e filtros de opcionais.",
    tags: ["HTML", "JS", "UI"],
    img: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=400&h=300&fit=crop",
    link: "https://venda-carros-one.vercel.app/",
  },
  {
    title: "Pokédex Interativa",
    desc: "Consumo de API rest para listagem e filtragem de personagens.",
    tags: ["API", "JS", "Async"],
    img: "https://images.unsplash.com/photo-1613771404721-1f92d799e49f?q=80&w=400&h=300&fit=crop",
    link: "https://pokedex-interativa-alpha.vercel.app/",
  },
  {
    title: "Tabuada Dinâmica",
    desc: "Manipulação de DOM em tempo real para fins educacionais.",
    tags: ["Logic", "JS", "DOM"],
    img: "https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?q=80&w=400&h=300&fit=crop",
    link: "https://projeto-tabuada-orcin.vercel.app/",
  },
];

const Portfolio = () => {
  return (
    <Box id="portfolio" sx={{ py: 10, bgcolor: "#1f242d", minHeight: "100vh" }}>
      <Container maxWidth="lg">
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
          Latest <span style={{ color: "#00f5ff" }}>Projects</span>
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            },
            gap: "30px",
          }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Box
                sx={{
                  position: "relative",
                  borderRadius: "20px",
                  overflow: "hidden",
                  height: "300px",
                  cursor: "pointer",
                  border: "2px solid #323946",
                  "& img": {
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "0.6s ease",
                  },
                  "&:hover img": { transform: "scale(1.1) rotate(2deg)" },
                  "&:hover .layer": { transform: "translateY(0)", opacity: 1 },
                }}
              >
                <img src={project.img} alt={project.title} />

                <Box
                  className="layer"
                  sx={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(rgba(0,0,0,0.6), #00f5ffcc)",
                    backdropFilter: "blur(4px)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    px: 3,
                    transition: "0.5s ease-in-out",
                    transform: "translateY(100%)",
                    opacity: 0,
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: "bold", color: "#1f242d", mb: 1 }}
                  >
                    {project.title}
                  </Typography>

                  <Typography
                    sx={{
                      color: "#1f242d",
                      mb: 2,
                      fontSize: "0.85rem",
                      fontWeight: 700,
                      lineHeight: 1.3,
                    }}
                  >
                    {project.desc}
                  </Typography>

                  {/* Tags de Tecnologia */}
                  <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
                    {project.tags.map((tag) => (
                      <Typography
                        key={tag}
                        sx={{
                          fontSize: "0.65rem",
                          fontWeight: "bold",
                          bgcolor: "#1f242d",
                          color: "#00f5ff",
                          px: 1.2,
                          py: 0.3,
                          borderRadius: "10px",
                          border: "1px solid #1f242d",
                        }}
                      >
                        {tag}
                      </Typography>
                    ))}
                  </Stack>

                  <IconButton
                    component="a"
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      bgcolor: "#1f242d",
                      color: "#00f5ff",
                      width: "45px",
                      height: "45px",
                      "&:hover": {
                        bgcolor: "#fff",
                        color: "#1f242d",
                        transform: "rotate(360deg)",
                      },
                      transition: "0.5s",
                    }}
                  >
                    <LaunchIcon />
                  </IconButton>
                </Box>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Portfolio;

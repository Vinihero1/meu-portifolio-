import React from "react";
import {
  Box,
  Typography,
  Grid,
  List,
  ListItem,
  ListItemText,
  Button,
} from "@mui/material";
import PrintIcon from "@mui/icons-material/Print";

const Curriculo = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <Box
      sx={{
        bgcolor: "#f0f0f0",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        py: 4,
        "@media print": {
          bgcolor: "#fff",
          py: 0,
        },
      }}
    >
      <style>
        {`
          @media print {
            nav, header, footer, .no-print, 
            [class*="Navbar"], [class*="Footer"],
            .MuiAppBar-root {
              display: none !important;
              height: 0 !important;
              visibility: hidden !important;
            }
            @page { margin: 0; }
            body { padding: 0 !important; }
          }
        `}
      </style>

      <Button
        className="no-print"
        variant="contained"
        startIcon={<PrintIcon />}
        onClick={handlePrint}
        sx={{
          mb: 3,
          bgcolor: "#1a4670",
          "&:hover": { bgcolor: "#2c3e50" },
        }}
      >
        Imprimir / Salvar PDF
      </Button>

      <Box
        sx={{
          width: "100%",
          maxWidth: "850px",
          bgcolor: "#fff",
          display: "flex",
          boxShadow: "0 0 20px rgba(0,0,0,0.1)",
          minHeight: "1100px",
          "@media print": {
            boxShadow: "none",
            width: "100%",
          },
        }}
      >
        {/* COLUNA ESQUERDA */}
        <Box
          sx={{
            width: "35%",
            bgcolor: "#2c3e50",
            color: "#fff",
            display: "flex",
            flexDirection: "column",
            p: 4,
            "@media print": {
              printColorAdjust: "exact",
              WebkitPrintColorAdjust: "exact",
            },
          }}
        >
          <SidebarSection title="Contato">
            <Typography
              variant="body2"
              sx={{ mt: 2, color: "#00f5ff", fontWeight: "bold" }}
            >
              Telefone
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              34 98829-2941
            </Typography>

            <Typography
              variant="body2"
              sx={{ color: "#00f5ff", fontWeight: "bold" }}
            >
              E-mail
            </Typography>
            <Typography variant="body2" sx={{ mb: 2, wordBreak: "break-all" }}>
              viniciuseduardosavlis.ve@gmail.com
            </Typography>

            <Typography
              variant="body2"
              sx={{ color: "#00f5ff", fontWeight: "bold" }}
            >
              LinkedIn
            </Typography>
            <Typography variant="body2">
              linkedin.com/in/vinicius-eduardosilva
            </Typography>
          </SidebarSection>

          <SidebarSection title="Competências">
            <List dense>
              {[
                "SQL (Banco de Dados)",
                "Redes (TCP/IP)",
                "Python",
                "Windows Server",
                "Java",
                "React",
                "JavaScript",
                "Power BI",
              ].map((item) => (
                <ListItem key={item} sx={{ px: 0, py: 0.2 }}>
                  <ListItemText
                    primary={`• ${item}`}
                    primaryTypographyProps={{ fontSize: "0.85rem" }}
                  />
                </ListItem>
              ))}
            </List>
          </SidebarSection>

          <SidebarSection title="Idiomas">
            <Typography variant="body2" sx={{ fontSize: "0.85rem" }}>
              • Inglês (Intermediário)
            </Typography>
            <Typography variant="body2" sx={{ fontSize: "0.85rem" }}>
              • Espanhol (Intermediário)
            </Typography>
          </SidebarSection>

          <SidebarSection title="Certificações">
            <Box sx={{ fontSize: "0.8rem", opacity: 0.9 }}>
              <p>• Oportunidade DIO</p>
              <p>• Analista de Dados</p>
              <p>• Bootcamp Desenvolvimento</p>
              <p>• Algoritmo e Lógica</p>
            </Box>
          </SidebarSection>
        </Box>

        {/* COLUNA DIREITA */}
        <Box sx={{ width: "65%", p: 5 }}>
          <Typography
            variant="h3"
            sx={{ fontWeight: 800, color: "#2c3e50", mb: 0.5 }}
          >
            VINICIUS SILVA
          </Typography>
          <Typography
            variant="h6"
            sx={{ color: "#1a4670", mb: 4, fontWeight: 600 }}
          >
            Assistente de Suporte de TI
          </Typography>

          <MainSection title="Resumo">
            <Typography
              variant="body2"
              sx={{ textAlign: "justify", color: "#333", lineHeight: 1.6 }}
            >
              Profissional de TI focado em suporte técnico e monitoração de
              sistemas. Possuo conhecimento prático em SQL para consultas e
              vivência em infraestrutura de redes (TCP/IP). Experiência em
              atendimento de chamados e manutenção de dispositivos, buscando
              aplicar soluções tecnológicas para gerar impacto positivo na
              operação.
            </Typography>
          </MainSection>

          <MainSection title="Experiência">
            <ExperienceItem
              date="Nov 2025 - Presente"
              title="Técnico de Suporte em TI"
              place="Villefort Atacarejo"
              description="Suporte Nível 1 e 2, TCP/IP, Redes, Help Desk, Hardware e Windows Server."
            />
            <ExperienceItem
              date="Ago 2023 - Nov 2025"
              title="Assistente de Logística/Estoque"
              place="Indorama ltda"
              description="Assistência no tráfego e controle de produtos, com foco em organização e fluxo operacional."
            />
          </MainSection>

          <MainSection title="Formação Acadêmica">
            <ExperienceItem
              date="2021 - 2024"
              title="Análise e Desenvolvimento de Sistemas"
              place="Uniube"
              description="Information Technology."
            />
            <ExperienceItem
              date="Dez 2023 - Dez 2024"
              title="Desenvolvedor Backend"
              place="DevMedia"
              description="Foco em banco de dados e lógica de servidor."
            />
            <ExperienceItem
              date="Out 2023 - Out 2024"
              title="Desenvolvedor Front-end"
              place="Udemy"
              description="Tecnologia da Informação."
            />
          </MainSection>
        </Box>
      </Box>
    </Box>
  );
};

const SidebarSection = ({ title, children }) => (
  <Box sx={{ mb: 4 }}>
    <Typography
      variant="h6"
      sx={{
        fontWeight: "bold",
        borderBottom: "2px solid #00f5ff",
        pb: 0.5,
        mb: 1,
      }}
    >
      {title}
    </Typography>
    {children}
  </Box>
);

const MainSection = ({ title, children }) => (
  <Box sx={{ mb: 3 }}>
    <Typography
      variant="h5"
      sx={{
        color: "#1a4670",
        fontWeight: "bold",
        borderBottom: "1px solid #ddd",
        pb: 0.5,
        mb: 2,
      }}
    >
      {title}
    </Typography>
    {children}
  </Box>
);

const ExperienceItem = ({ date, title, place, description }) => (
  <Grid container sx={{ mb: 2 }}>
    <Grid item xs={12}>
      <Typography
        variant="subtitle1"
        sx={{ fontWeight: "bold", color: "#000", lineHeight: 1.2 }}
      >
        {title}
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 0.5 }}>
        <Typography
          variant="body2"
          sx={{ color: "#1a4670", fontStyle: "italic" }}
        >
          {place}
        </Typography>
        <Typography variant="body2" sx={{ color: "#666" }}>
          {date}
        </Typography>
      </Box>
      <Typography variant="body2" sx={{ color: "#444" }}>
        {description}
      </Typography>
    </Grid>
  </Grid>
);

export default Curriculo;

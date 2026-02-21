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

const SidebarSection = ({ title, children }) => (
  <Box sx={{ mb: 4 }}>
    <Typography
      variant="h6"
      sx={{
        fontWeight: "bold",
        borderBottom: "2px solid #00f5ff",
        pb: 0.5,
        mb: 1,
        fontSize: "1.1rem",
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
        "@media print": { bgcolor: "#fff", py: 0 },
      }}
    >
      <style>
        {`
          @media print {
            nav, header, footer, .no-print, 
            [class*="Navbar"], [class*="Footer"],
            .MuiAppBar-root {
              display: none !important;
            }
            @page { margin: 10mm; }
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
        Print / Save PDF
      </Button>

      <Box
        sx={{
          width: "100%",
          maxWidth: "850px",
          bgcolor: "#fff",
          display: "flex",
          boxShadow: "0 0 20px rgba(0,0,0,0.1)",
          minHeight: "1100px",
          "@media print": { boxShadow: "none", width: "100%" },
        }}
      >
        {/* COLUNA ESQUERDA */}
        <Box
          sx={{
            width: "35%",
            bgcolor: "#2c3e50",
            color: "#fff",
            p: 4,
            "@media print": {
              printColorAdjust: "exact",
              WebkitPrintColorAdjust: "exact",
            },
          }}
        >
          <SidebarSection title="Contact">
            <Typography
              variant="body2"
              sx={{ mt: 2, color: "#00f5ff", fontWeight: "bold" }}
            >
              Portfolio
            </Typography>
            <Typography
              variant="body2"
              sx={{ mb: 2, wordBreak: "break-all", fontSize: "0.75rem" }}
            >
              https://meu-portifolio-delta-gray.vercel.app/
            </Typography>

            <Typography
              variant="body2"
              sx={{ color: "#00f5ff", fontWeight: "bold" }}
            >
              Phone
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
              linkedin.com/in/vinicius-eduardo-08a68b201/
            </Typography>
          </SidebarSection>

          <SidebarSection title="Hard Skills">
            <List dense sx={{ p: 0 }}>
              {[
                "React & JavaScript",
                "Design Systems (MUI)",
                "Micro Front-ends",
                "SQL (Advanced)",
                "Web Components",
                "Python / Java",
                "Windows Server",
                "TCP/IP Networks",
              ].map((skill) => (
                <ListItem key={skill} sx={{ px: 0, py: 0.1 }}>
                  <ListItemText
                    primary={`• ${skill}`}
                    primaryTypographyProps={{ fontSize: "0.82rem" }}
                  />
                </ListItem>
              ))}
            </List>
          </SidebarSection>

          <SidebarSection title="ERP Systems">
            <List dense sx={{ p: 0 }}>
              {["Sankhya", "Consinco", "TOTVS"].map((erp) => (
                <ListItem key={erp} sx={{ px: 0, py: 0.1 }}>
                  <ListItemText
                    primary={`• ${erp}`}
                    primaryTypographyProps={{ fontSize: "0.82rem" }}
                  />
                </ListItem>
              ))}
            </List>
          </SidebarSection>

          <SidebarSection title="Languages">
            <Typography variant="body2" sx={{ fontSize: "0.85rem" }}>
              • English (Intermediate)
            </Typography>
            <Typography variant="body2" sx={{ fontSize: "0.85rem" }}>
              • Spanish (Intermediate)
            </Typography>
          </SidebarSection>
        </Box>

        {/* COLUNA DIREITA */}
        <Box sx={{ width: "65%", p: 5 }}>
          <Typography
            variant="h3"
            sx={{ fontWeight: 800, color: "#2c3e50", mb: 0.5 }}
          >
            VINÍCIUS EDUARDO
          </Typography>
          <Typography
            variant="h6"
            sx={{ color: "#1a4670", mb: 4, fontWeight: 600 }}
          >
            L2 IT Support Technician & Frontend Developer
          </Typography>

          <MainSection title="Professional Summary">
            <Typography
              variant="body2"
              sx={{ textAlign: "justify", color: "#333", lineHeight: 1.6 }}
            >
              Versatile IT Professional currently working as a **Level 2 Support
              Technician** while specializing in **Frontend Development**.
              Expertise in **React.js** and **Design Systems**, combined with a
              solid background in **SQL** and networking. Strong experience with
              **ERP ecosystems (Sankhya, Consinco, TOTVS)**, focused on
              delivering scalable UI components and optimizing technical
              infrastructure.
            </Typography>
          </MainSection>

          <MainSection title="Professional Experience">
            <ExperienceItem
              date="Nov 2025 - Present"
              title="L2 IT Support Technician"
              place="Villefort Atacarejo"
              description="Intermediate technical support (Level 2), network administration, hardware troubleshooting, and Windows Server management. Key focus on system stability and SQL database queries for operational reports."
            />
            <ExperienceItem
              date="Aug 2023 - Nov 2025"
              title="Systems & Logistics Assistant"
              place="Indorama ltda"
              description="Operational control and systems auditing using ERP software. Optimized inventory processes and ensured data integrity."
            />
          </MainSection>

          <MainSection title="Education">
            <ExperienceItem
              date="2021 - 2024"
              title="Systems Analysis and Development"
              place="Uniube"
              description="Focus on Software Architecture and Database Management."
            />
            <ExperienceItem
              date="2023 - 2024"
              title="Frontend & Web Technologies"
              place="Udemy / DevMedia"
              description="Advanced training in React, Web Components, and UI/UX design."
            />
          </MainSection>

          <MainSection title="Digital Footprint">
            <Typography variant="body2" sx={{ color: "#333" }}>
              • **Interactive Portfolio**: Visit my Vercel-hosted SPA to see my
              latest React components and IT projects.
            </Typography>
          </MainSection>
        </Box>
      </Box>
    </Box>
  );
};

export default Curriculo;

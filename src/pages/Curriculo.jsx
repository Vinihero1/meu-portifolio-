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
  <Box sx={{ mb: 3 }}>
    <Typography
      variant="h6"
      sx={{
        fontWeight: "bold",
        borderBottom: "2px solid #00f5ff",
        pb: 0.2,
        mb: 0.8,
        fontSize: "1rem",
      }}
    >
      {title}
    </Typography>
    {children}
  </Box>
);

const MainSection = ({ title, children }) => (
  <Box sx={{ mb: 2 }}>
    <Typography
      variant="h5"
      sx={{
        color: "#1a4670",
        fontWeight: "bold",
        borderBottom: "1px solid #ddd",
        pb: 0.2,
        mb: 1,
        fontSize: "1.2rem",
      }}
    >
      {title}
    </Typography>
    {children}
  </Box>
);

const ExperienceItem = ({ date, title, place, description, tech }) => (
  <Grid container sx={{ mb: 1.5 }}>
    <Grid item xs={12}>
      <Typography
        variant="subtitle1"
        sx={{
          fontWeight: "bold",
          color: "#000",
          lineHeight: 1.1,
          fontSize: "0.95rem",
        }}
      >
        {title}
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 0.2 }}>
        <Typography
          variant="body2"
          sx={{ color: "#1a4670", fontStyle: "italic", fontSize: "0.8rem" }}
        >
          {place}
        </Typography>
        <Typography variant="body2" sx={{ color: "#666", fontSize: "0.8rem" }}>
          {date}
        </Typography>
      </Box>
      <Typography
        variant="body2"
        sx={{
          color: "#444",
          textAlign: "justify",
          fontSize: "0.8rem",
          mb: 0.2,
        }}
      >
        {description}
      </Typography>
      {tech && (
        <Typography
          variant="caption"
          sx={{ color: "#1a4670", fontWeight: "bold", fontSize: "0.75rem" }}
        >
          Technologies: {tech}
        </Typography>
      )}
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
        "@media print": {
          bgcolor: "#fff",
          py: 0,
          minHeight: "auto",
          justifyContent: "flex-start",
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
              margin: 0 !important;
              padding: 0 !important;
            }
            @page { 
              margin: 0mm; 
              size: A4;
            }
            body { 
              padding: 0 !important; 
              margin: 0 !important;
            }
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
          "@media print": { display: "none" },
        }}
      >
        Print / Save PDF
      </Button>

      <Box
        sx={{
          width: "100%",
          maxWidth: "210mm",
          height: "297mm",
          bgcolor: "#fff",
          display: "flex",
          boxShadow: "0 0 20px rgba(0,0,0,0.1)",
          pageBreakInside: "avoid",
          breakInside: "avoid",
          "@media print": {
            boxShadow: "none",
            width: "210mm",
            height: "297mm",
            marginTop: "0mm",
            position: "absolute",
            top: 0,
            left: 0,
          },
        }}
      >
        {/* COLUNA ESQUERDA */}
        <Box
          sx={{
            width: "35%",
            bgcolor: "#2c3e50",
            color: "#fff",
            p: 3,
            pt: 4,
            "@media print": {
              printColorAdjust: "exact",
              WebkitPrintColorAdjust: "exact",
            },
          }}
        >
          <SidebarSection title="Contact">
            <Typography
              variant="body2"
              sx={{
                color: "#00f5ff",
                fontWeight: "bold",
                mt: 0.5,
                fontSize: "0.8rem",
              }}
            >
              Phone
            </Typography>
            <Typography variant="body2" sx={{ mb: 1, fontSize: "0.75rem" }}>
              34 98829-2941
            </Typography>

            <Typography
              variant="body2"
              sx={{ color: "#00f5ff", fontWeight: "bold", fontSize: "0.8rem" }}
            >
              E-mail
            </Typography>
            <Typography
              variant="body2"
              sx={{ mb: 1, fontSize: "0.72rem", whiteSpace: "nowrap" }}
            >
              viniciusuniube@hotmail.com
            </Typography>

            <Typography
              variant="body2"
              sx={{ color: "#00f5ff", fontWeight: "bold", fontSize: "0.8rem" }}
            >
              Portfolio
            </Typography>
            <Typography
              variant="body2"
              component="a"
              href="https://meu-portifolio-delta-gray.vercel.app/"
              target="_blank"
              sx={{
                color: "#fff",
                textDecoration: "none",
                fontSize: "0.68rem",
                display: "block",
                mb: 1,
                wordBreak: "break-all",
                "&:hover": { color: "#00f5ff" },
              }}
            >
              meu-portifolio-delta-gray.vercel.app
            </Typography>

            <Typography
              variant="body2"
              sx={{ color: "#00f5ff", fontWeight: "bold", fontSize: "0.8rem" }}
            >
              LinkedIn
            </Typography>
            <Typography
              variant="body2"
              component="a"
              href="https://www.linkedin.com/in/vinicius-eduardosilva/"
              target="_blank"
              sx={{
                color: "#fff",
                textDecoration: "none",
                fontSize: "0.62rem",
                display: "block",
                whiteSpace: "nowrap",
                "&:hover": { color: "#00f5ff" },
              }}
            >
              linkedin.com/in/vinicius-eduardosilva/
            </Typography>
          </SidebarSection>

          <SidebarSection title="Hard Skills">
            <List dense sx={{ p: 0 }}>
              {[
                "React.js & Next.js",
                "Vue.js",
                "Supabase (Database & Auth)",
                "Material UI (MUI)",
                "JavaScript & TypeScript",
                "HTML5 & CSS3 (Tailwind)",
                "RESTful APIs (Axios)",
                "Git & GitHub",
                "Relational Databases (SQL)",
              ].map((skill) => (
                <ListItem key={skill} sx={{ px: 0, py: 0.05 }}>
                  <ListItemText
                    primary={`• ${skill}`}
                    primaryTypographyProps={{ fontSize: "0.78rem" }}
                  />
                </ListItem>
              ))}
            </List>
          </SidebarSection>

          <SidebarSection title="Soft Skills">
            <List dense sx={{ p: 0 }}>
              {[
                "Analytical Thinking",
                "Problem Solving",
                "Clear Communication",
                "Adaptability",
                "Continuous Learning",
                "Team Collaboration",
              ].map((skill) => (
                <ListItem key={skill} sx={{ px: 0, py: 0.05 }}>
                  <ListItemText
                    primary={`• ${skill}`}
                    primaryTypographyProps={{ fontSize: "0.78rem" }}
                  />
                </ListItem>
              ))}
            </List>
          </SidebarSection>

          <SidebarSection title="Languages">
            <Typography variant="body2" sx={{ fontSize: "0.8rem" }}>
              • English (Intermediate)
            </Typography>
            <Typography variant="body2" sx={{ fontSize: "0.8rem" }}>
              • Spanish (Intermediate)
            </Typography>
          </SidebarSection>
        </Box>

        {/* COLUNA DIREITA */}
        <Box sx={{ width: "65%", p: 4, pt: 4 }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              color: "#2c3e50",
              mb: 0.2,
              lineHeight: 1.1,
              fontSize: "2rem",
            }}
          >
            VINÍCIUS EDUARDO
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "#1a4670",
              mb: 2,
              fontWeight: 600,
              fontSize: "1.1rem",
            }}
          >
            Frontend Developer
          </Typography>

          <MainSection title="Professional Summary">
            <Typography
              variant="body2"
              sx={{
                textAlign: "justify",
                color: "#333",
                lineHeight: 1.5,
                fontSize: "0.8rem",
              }}
            >
              Frontend Developer focused on building high-performance,
              responsive, and database-integrated web applications. Experienced
              in developing modern interfaces using React, Next.js, and Vue.js.
              Skilled in integrating Backend-as-a-Service (BaaS) technologies
              like Supabase, consuming REST APIs, and implementing clean,
              reusable UI architectures.
            </Typography>
          </MainSection>

          <MainSection title="Featured Projects">
            <ExperienceItem
              date="2026"
              title="Shopee Affiliate Curation Web App"
              place="Personal Project"
              description="Developed a curation and e-commerce storefront for Shopee affiliate links. Integrated Supabase for real-time database management and authentication. Built a highly dynamic layout with Vue.js to catalog products efficiently."
              tech="Vue.js, Supabase, SQL, Git, Tailwind CSS"
            />
          </MainSection>

          <MainSection title="Professional Experience">
            <ExperienceItem
              date="Nov 2025 - Present"
              title="IT Support Analyst"
              place="Villefort Atacarejo"
              description="Deliver technical L1/L2 support, manage SQL queries, and diagnose infrastructure/network faults. Apply debugging logic and database principles daily to solve complex problems and optimize local systems."
              tech="SQL, ERP Systems, Active Directory, Networking"
            />
          </MainSection>

          <MainSection title="Education">
            <ExperienceItem
              date="2021 - 2024"
              title="Systems Analysis and Development"
              place="Uniube"
              description="Degree focused on Software Architecture, Web/Mobile Development Concepts, Database Management, and UI/UX Principles."
            />
          </MainSection>

          <MainSection title="Key Highlights">
            <Typography
              variant="body2"
              sx={{ color: "#333", fontSize: "0.78rem", mb: 0.5 }}
            >
              • **State & Database Management**: Experience connecting frontend
              architectures directly to relational backends like Supabase.
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "#333", fontSize: "0.78rem" }}
            >
              • **Responsive UI**: Crafting intuitive interfaces across multiple
              modern frameworks (React, Next.js, and Vue.js).
            </Typography>
          </MainSection>
        </Box>
      </Box>
    </Box>
  );
};

export default Curriculo;

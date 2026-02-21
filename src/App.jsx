import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider, CssBaseline, Box } from "@mui/material";
import { useMemo, useState } from "react";
import { getTheme } from "./theme/theme";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Curriculo from "./pages/Curriculo";

// Criamos um componente interno para gerenciar a lógica do Footer
function AppContent({ mode, setMode }) {
  const location = useLocation();

  return (
    <>
      <Navbar mode={mode} setMode={setMode} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/curriculo" element={<Curriculo />} />
      </Routes>

      {/* O Footer SÓ aparece se o caminho NÃO for "/" */}
      {location.pathname !== "/" && <Footer />}
    </>
  );
}

function App() {
  const [mode, setMode] = useState("dark");
  const theme = useMemo(() => getTheme(mode), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <AppContent mode={mode} setMode={setMode} />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

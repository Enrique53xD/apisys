import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import PageTransition from "./components/PageTransition";
import WhatsAppButton from "./components/WhatsAppButton";
import Home from "./pages/Home";
import Soluciones from "./pages/Soluciones";
import Nosotros from "./pages/Nosotros";
import Contacto from "./pages/Contacto";
import Empezar from "./pages/Empezar";
import NotFound from "./pages/NotFound";
import "./App.css";

function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className={`scroll-to-top ${visible ? "visible" : ""}`}
      onClick={scrollToTop}
      aria-label="Volver arriba"
    >
      <ChevronUp size={22} />
    </button>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Navbar />
        <main className="main-content">
          <PageTransition>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/soluciones" element={<Soluciones />} />
              <Route path="/nosotros" element={<Nosotros />} />
              <Route path="/contacto" element={<Contacto />} />
              <Route path="/empezar" element={<Empezar />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </PageTransition>
        </main>
        <Footer />
        <WhatsAppButton />
        <ScrollToTopButton />
      </div>
    </Router>
  );
}

export default App;

import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  MessageCircle,
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
} from "lucide-react";
import apisysLogo from "../assets/apisys-logo.png";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      {/* CTA Banner */}
      <div className="footer__cta">
        <div className="container">
          <div className="footer__cta-inner">
            <div className="footer__cta-content">
              <h3 className="footer__cta-title">
                INICIA TU PROYECTO CON NOSOTROS
              </h3>
              <p className="footer__cta-text">
                Tu comienzo digital inicia con nosotros
              </p>
            </div>
            <Link to="/empezar" className="btn btn-primary footer__cta-btn">
              COMENZAR
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="footer__main">
        <div className="container">
          <div className="footer__grid">
            {/* Column 1 - Brand & Contact */}
            <div className="footer__col footer__col--brand">
              <Link to="/" className="footer__logo">
                <div className="footer__logo-mark">
                  <img
                    src={apisysLogo}
                    alt="APISYS"
                    className="footer__logo-img"
                    loading="lazy"
                  />
                </div>
              </Link>
              <p className="footer__brand-desc">
                Creemos que la tecnología puede estar al alcance de todos.
                Soluciones IT que transforman negocios.
              </p>
              <div className="footer__contact-info">
                <a
                  href="mailto:info@apisys.com.gt"
                  className="footer__contact-item"
                >
                  <Mail size={16} />
                  <span>info@apisys.com.gt</span>
                </a>
                <a href="tel:+50254228850" className="footer__contact-item">
                  <Phone size={16} />
                  <span>+502 5422-8850</span>
                </a>
                <div className="footer__contact-item">
                  <MapPin size={16} />
                  <span>Guatemala</span>
                </div>
              </div>
              <div className="footer__socials">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__social-link"
                  aria-label="Facebook"
                >
                  <Facebook size={18} />
                </a>
                <a
                  href="https://www.instagram.com/apisysgt/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__social-link"
                  aria-label="Instagram"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="https://wa.me/message/MMNITA5POQA3K1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__social-link"
                  aria-label="WhatsApp"
                >
                  <MessageCircle size={18} />
                </a>
              </div>
            </div>

            {/* Column 2 - Servicios */}
            <div className="footer__col">
              <h4 className="footer__col-title">Servicios</h4>
              <ul className="footer__links">
                <li>
                  <Link to="/soluciones#desarrollo" className="footer__link">
                    Desarrollo Web
                  </Link>
                </li>
                <li>
                  <Link to="/soluciones#soporte" className="footer__link">
                    Soporte Técnico
                  </Link>
                </li>
                <li>
                  <Link to="/soluciones#seguridad" className="footer__link">
                    Sistemas de Seguridad
                  </Link>
                </li>
                <li>
                  <Link
                    to="/soluciones#infraestructura"
                    className="footer__link"
                  >
                    Infraestructura de Red
                  </Link>
                </li>
                <li>
                  <Link to="/soluciones#hosting" className="footer__link">
                    Servicio de Hosting
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3 - Empresa */}
            <div className="footer__col">
              <h4 className="footer__col-title">Empresa</h4>
              <ul className="footer__links">
                <li>
                  <Link to="/nosotros" className="footer__link">
                    Nosotros
                  </Link>
                </li>
                <li>
                  <Link to="/soluciones" className="footer__link">
                    Nuestros Proyectos
                  </Link>
                </li>
                <li>
                  <Link to="/nosotros#proceso" className="footer__link">
                    Proceso de Desarrollo
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4 - Recursos */}
            <div className="footer__col">
              <h4 className="footer__col-title">Recursos</h4>
              <ul className="footer__links">
                <li>
                  <Link to="/empezar" className="footer__link">
                    Crea tu sitio web
                  </Link>
                </li>
                <li>
                  <Link to="/contacto" className="footer__link">
                    Atención al cliente
                  </Link>
                </li>
                <li>
                  <Link to="/contacto" className="footer__link">
                    Contáctanos
                  </Link>
                </li>
              </ul>

              <div className="footer__nav-links">
                <h4 className="footer__col-title footer__col-title--small">
                  Navegación
                </h4>
                <ul className="footer__links">
                  <li>
                    <Link to="/" className="footer__link">
                      INICIO
                    </Link>
                  </li>
                  <li>
                    <Link to="/soluciones" className="footer__link">
                      SOLUCIONES
                    </Link>
                  </li>
                  <li>
                    <Link to="/nosotros" className="footer__link">
                      NOSOTROS
                    </Link>
                  </li>
                  <li>
                    <Link to="/contacto" className="footer__link">
                      CONTACTO
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer__bottom">
        <div className="container">
          <div className="footer__bottom-inner">
            <p className="footer__copyright">
              Todos los derechos reservados &copy; 2026 |{" "}
              <strong>APISYS</strong>
            </p>
            <button
              className="footer__scroll-top"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              aria-label="Volver arriba"
            >
              Volver arriba ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import apisysLogo from "../assets/apisys-logo.png";
import "./Navbar.css";

const solutions = [
  { name: "Seguridad", path: "/soluciones#seguridad" },
  { name: "Infraestructura de Red", path: "/soluciones#infraestructura" },
  { name: "Desarrollo Web", path: "/soluciones#desarrollo" },
  { name: "Soporte Técnico", path: "/soluciones#soporte" },
  { name: "Hosting", path: "/soluciones#hosting" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu & dropdown whenever the route changes
  useEffect(() => {
    setIsOpen(false);
    setDropdownOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__inner container">
        <Link to="/" className="navbar__logo" aria-label="APISYS Home">
          <div className="navbar__logo-mark">
            <img src={apisysLogo} alt="APISYS" className="navbar__logo-img" />
          </div>
        </Link>

        <nav
          className="navbar__nav"
          role="navigation"
          aria-label="Navegación principal"
        >
          <ul className="navbar__menu">
            <li className="navbar__item">
              <Link
                to="/"
                className={`navbar__link ${isActive("/") ? "navbar__link--active" : ""}`}
              >
                INICIO
              </Link>
            </li>
            <li
              className="navbar__item navbar__item--dropdown"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <Link
                to="/soluciones"
                className={`navbar__link ${isActive("/soluciones") ? "navbar__link--active" : ""}`}
              >
                SOLUCIONES
                <ChevronDown
                  size={14}
                  className={`navbar__chevron ${dropdownOpen ? "navbar__chevron--open" : ""}`}
                />
              </Link>
              <div
                className={`navbar__dropdown ${dropdownOpen ? "navbar__dropdown--open" : ""}`}
              >
                <div className="navbar__dropdown-inner">
                  {solutions.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      className="navbar__dropdown-item"
                    >
                      <span className="navbar__dropdown-dot" />
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </li>
            <li className="navbar__item">
              <Link
                to="/nosotros"
                className={`navbar__link ${isActive("/nosotros") ? "navbar__link--active" : ""}`}
              >
                NOSOTROS
              </Link>
            </li>
            <li className="navbar__item">
              <Link
                to="/contacto"
                className={`navbar__link ${isActive("/contacto") ? "navbar__link--active" : ""}`}
              >
                CONTACTO
              </Link>
            </li>
          </ul>
        </nav>

        <Link to="/empezar" className="navbar__cta btn btn-primary">
          EMPEZAR
        </Link>

        <button
          className="navbar__toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`navbar__mobile ${isOpen ? "navbar__mobile--open" : ""}`}>
        <div className="navbar__mobile-inner">
          <nav className="navbar__mobile-nav">
            <Link
              to="/"
              className={`navbar__mobile-link ${isActive("/") ? "navbar__mobile-link--active" : ""}`}
              onClick={() => setIsOpen(false)}
            >
              INICIO
            </Link>
            <div className="navbar__mobile-group">
              <button
                className={`navbar__mobile-link navbar__mobile-link--parent ${isActive("/soluciones") ? "navbar__mobile-link--active" : ""}`}
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                SOLUCIONES
                <ChevronDown
                  size={16}
                  className={`navbar__chevron ${dropdownOpen ? "navbar__chevron--open" : ""}`}
                />
              </button>
              <div
                className={`navbar__mobile-sub ${dropdownOpen ? "navbar__mobile-sub--open" : ""}`}
              >
                {solutions.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="navbar__mobile-sublink"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            <Link
              to="/nosotros"
              className={`navbar__mobile-link ${isActive("/nosotros") ? "navbar__mobile-link--active" : ""}`}
              onClick={() => setIsOpen(false)}
            >
              NOSOTROS
            </Link>
            <Link
              to="/contacto"
              className={`navbar__mobile-link ${isActive("/contacto") ? "navbar__mobile-link--active" : ""}`}
              onClick={() => setIsOpen(false)}
            >
              CONTACTO
            </Link>
          </nav>
          <Link
            to="/empezar"
            className="navbar__mobile-cta btn btn-primary"
            onClick={() => setIsOpen(false)}
          >
            EMPEZAR
          </Link>
          <div className="navbar__mobile-footer">
            <span>info@apisys.com.gt</span>
            <span>+502 5422-8850</span>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="navbar__overlay"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}
    </header>
  );
}

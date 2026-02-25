import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowLeft, Home, Search } from "lucide-react";
import "./NotFound.css";

export default function NotFound() {
  return (
    <div className="not-found">
      <section className="not-found__hero">
        <div className="not-found__bg">
          <div className="not-found__gradient" />
          <div className="not-found__grid-pattern" />
          <div className="not-found__orb not-found__orb--1" />
          <div className="not-found__orb not-found__orb--2" />
        </div>

        <div className="container not-found__container">
          <div className="not-found__content">
            <div className="not-found__code">
              <span className="not-found__code-4">4</span>
              <span className="not-found__code-0">
                <Search size={64} strokeWidth={1.5} />
              </span>
              <span className="not-found__code-4">4</span>
            </div>

            <div className="not-found__glitch-line" />

            <h1 className="not-found__title">
              Página no encontrada
            </h1>

            <p className="not-found__text">
              Lo sentimos, la página que buscas no existe o ha sido movida.
              Verifica la URL o regresa al inicio.
            </p>

            <div className="not-found__terminal">
              <div className="not-found__terminal-header">
                <span className="not-found__terminal-dot not-found__terminal-dot--red" />
                <span className="not-found__terminal-dot not-found__terminal-dot--yellow" />
                <span className="not-found__terminal-dot not-found__terminal-dot--green" />
              </div>
              <div className="not-found__terminal-body">
                <p>
                  <span className="not-found__terminal-prompt">$</span>{" "}
                  <span className="not-found__terminal-cmd">curl</span>{" "}
                  <span className="not-found__terminal-url">{window.location.href}</span>
                </p>
                <p className="not-found__terminal-error">
                  Error 404: No se encontró el recurso solicitado.
                </p>
                <p>
                  <span className="not-found__terminal-prompt">$</span>{" "}
                  <span className="not-found__terminal-cursor">_</span>
                </p>
              </div>
            </div>

            <div className="not-found__actions">
              <Link to="/" className="btn btn-primary">
                <Home size={16} />
                Volver al inicio
              </Link>
              <Link to="/contacto" className="btn btn-outline">
                Contáctanos
                <ArrowUpRight size={16} />
              </Link>
            </div>

            <div className="not-found__links">
              <p className="not-found__links-label">O visita alguna de estas páginas:</p>
              <div className="not-found__links-list">
                <Link to="/soluciones" className="not-found__link">
                  <ArrowLeft size={14} />
                  Soluciones
                </Link>
                <Link to="/nosotros" className="not-found__link">
                  <ArrowLeft size={14} />
                  Nosotros
                </Link>
                <Link to="/contacto" className="not-found__link">
                  <ArrowLeft size={14} />
                  Contacto
                </Link>
                <Link to="/empezar" className="not-found__link">
                  <ArrowLeft size={14} />
                  Empezar
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

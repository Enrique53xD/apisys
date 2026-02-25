import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Code,
  Shield,
  Network,
  Headphones,
  Server,
  Monitor,
  Camera,
  Fingerprint,
  Globe,
  Wifi,
  Database,
  CheckCircle,
} from "lucide-react";
import { useReveal } from "../hooks/useReveal";
import "./Soluciones.css";

const services = [
  {
    id: "desarrollo",
    icon: <Code size={32} />,
    title: "APP WEB A MEDIDA",
    subtitle: "Desarrollo Web",
    description:
      "Creamos sistemas personalizados para optimizar los procesos de tu empresa de forma eficiente y confiable. Diseñamos páginas web funcionales y atractivas que reflejan la identidad y objetivos de tu negocio.",
    features: [
      "Aplicaciones web personalizadas",
      "Plataformas e-commerce",
      "Sistemas de gestión internos",
      "Diseño UI/UX moderno",
      "Optimización de rendimiento",
      "Mantenimiento continuo",
    ],
    visual: <Monitor size={80} strokeWidth={1} />,
  },
  {
    id: "seguridad",
    icon: <Shield size={32} />,
    title: "CCTV INTELIGENTE",
    subtitle: "Sistemas de Seguridad",
    description:
      "Implementamos circuitos de vigilancia con tecnología avanzada para mayor seguridad en tus instalaciones. Un biométrico no es un gasto, es una herramienta de control y productividad.",
    features: [
      "Cámaras de alta definición",
      "Monitoreo remoto 24/7",
      "Instalación de biométricos",
      "Control de acceso inteligente",
      "Grabación en la nube",
      "Alertas en tiempo real",
    ],
    visual: <Camera size={80} strokeWidth={1} />,
  },
  {
    id: "infraestructura",
    icon: <Network size={32} />,
    title: "INFRAESTRUCTURA DE RED",
    subtitle: "Conectividad Empresarial",
    description:
      "Dale a tu negocio el impulso que necesita con una infraestructura de red profesional, estable y escalable. Diseñamos e implementamos redes que soportan el crecimiento de tu empresa.",
    features: [
      "Diseño de redes LAN/WAN",
      "Cableado estructurado",
      "Configuración de routers y switches",
      "Redes inalámbricas empresariales",
      "VPN y seguridad de red",
      "Auditoría de infraestructura",
    ],
    visual: <Wifi size={80} strokeWidth={1} />,
  },
  {
    id: "soporte",
    icon: <Headphones size={32} />,
    title: "SOPORTE TÉCNICO",
    subtitle: "Asistencia Especializada",
    description:
      "Conoce nuestros planes que se acoplen a tu empresa. Ofrecemos soporte técnico confiable, rápido y especializado para mantener tu operación sin interrupciones.",
    features: [
      "Soporte remoto y presencial",
      "Mantenimiento preventivo",
      "Diagnóstico de equipos",
      "Resolución de incidencias",
      "Planes personalizados",
      "Atención prioritaria",
    ],
    visual: <Headphones size={80} strokeWidth={1} />,
  },
  {
    id: "hosting",
    icon: <Server size={32} />,
    title: "SERVICIO DE HOSTING",
    subtitle: "Alojamiento Web",
    description:
      "Hosting rápido, seguro y confiable para que tu sitio esté siempre en línea. Infraestructura optimizada con soporte técnico incluido para tu tranquilidad.",
    features: [
      "Servidores de alto rendimiento",
      "Certificados SSL incluidos",
      "Backups automáticos",
      "Panel de control intuitivo",
      "99.9% uptime garantizado",
      "Soporte técnico 24/7",
    ],
    visual: <Database size={80} strokeWidth={1} />,
  },
];

const projectStats = [
  { number: "50+", label: "Proyectos Completados" },
  { number: "30+", label: "Clientes Satisfechos" },
  { number: "5+", label: "Años de Experiencia" },
  { number: "24/7", label: "Soporte Disponible" },
];

export default function Soluciones() {
  useReveal();

  return (
    <div className="soluciones">
      {/* ===== HERO ===== */}
      <section className="soluciones-hero">
        <div className="soluciones-hero__bg">
          <div className="soluciones-hero__gradient" />
          <div className="soluciones-hero__grid-pattern" />
          <div className="soluciones-hero__orb soluciones-hero__orb--1" />
          <div className="soluciones-hero__orb soluciones-hero__orb--2" />
        </div>

        <div className="container soluciones-hero__container">
          <div className="soluciones-hero__content">
            <div className="badge soluciones-hero__badge">
              <span className="glow-dot" />
              Soluciones Implementadas
            </div>
            <h1 className="soluciones-hero__title">
              RESULTADOS REALES.{" "}
              <span className="gradient-text">SOLUCIONES IMPLEMENTADAS</span>
            </h1>
            <p className="soluciones-hero__subtitle">
              Cada proyecto refleja nuestro compromiso con la eficiencia,
              estabilidad y crecimiento tecnológico. Soluciones IT que
              transforman negocios y conectan personas.
            </p>
          </div>

          {/* Stats */}
          <div className="soluciones-hero__stats">
            {projectStats.map((stat, index) => (
              <div key={index} className="soluciones-hero__stat">
                <span className="soluciones-hero__stat-number">
                  {stat.number}
                </span>
                <span className="soluciones-hero__stat-label">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SERVICES LIST ===== */}
      <section className="soluciones-list section">
        <div className="container">
          {services.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className={`soluciones-item reveal ${index % 2 !== 0 ? "soluciones-item--reverse" : ""}`}
            >
              <div className="soluciones-item__content">
                <div className="soluciones-item__header">
                  <div className="soluciones-item__icon icon-wrapper">
                    {service.icon}
                  </div>
                  <div>
                    <span className="soluciones-item__subtitle section-label">
                      {service.subtitle}
                    </span>
                    <h2 className="soluciones-item__title">{service.title}</h2>
                  </div>
                </div>

                <div className="glow-line" />

                <p className="soluciones-item__desc">{service.description}</p>

                <div className="soluciones-item__features">
                  {service.features.map((feature, fIndex) => (
                    <div key={fIndex} className="soluciones-item__feature">
                      <CheckCircle size={16} />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <Link
                  to="/empezar"
                  className="btn btn-primary soluciones-item__btn"
                >
                  COMENZAR
                  <ArrowUpRight size={16} />
                </Link>
              </div>

              <div className="soluciones-item__visual">
                <div className="soluciones-item__visual-card">
                  <div className="soluciones-item__visual-icon">
                    {service.visual}
                  </div>
                  <div className="soluciones-item__visual-glow" />
                  <div className="soluciones-item__visual-dots">
                    {Array.from({ length: 16 }).map((_, i) => (
                      <span key={i} className="soluciones-item__visual-dot" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== BIOMETRICOS HIGHLIGHT ===== */}
      <section className="soluciones-highlight section">
        <div className="soluciones-highlight__bg bg-grid" />
        <div className="container">
          <div className="soluciones-highlight__inner reveal">
            <div className="soluciones-highlight__icon-wrap">
              <Fingerprint size={48} />
            </div>
            <h2 className="soluciones-highlight__title">
              INSTALACIÓN DE BIOMÉTRICOS
            </h2>
            <p className="soluciones-highlight__text">
              Un biométrico no es un gasto, es una herramienta de control y
              productividad. Implementamos soluciones de identificación biométrica
              para tu empresa.
            </p>
            <Link to="/empezar" className="btn btn-primary">
              COMENZAR
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== PROJECTS GALLERY ===== */}
      <section className="soluciones-projects section">
        <div className="container">
          <div className="soluciones-projects__header reveal">
            <span className="section-label">Proyectos</span>
            <h2 className="section-title">
              Soluciones IT que{" "}
              <span className="gradient-text">
                transforman negocios
              </span>{" "}
              y conectan personas
            </h2>
          </div>

          <div className="soluciones-projects__grid reveal">
            <div className="soluciones-projects__card soluciones-projects__card--large">
              <div className="soluciones-projects__card-inner">
                <div className="soluciones-projects__card-icon">
                  <Camera size={40} strokeWidth={1.2} />
                </div>
                <h3>Sistemas de Vigilancia</h3>
                <p>
                  Implementación de CCTV inteligente con monitoreo remoto para
                  empresas en Guatemala.
                </p>
              </div>
            </div>
            <div className="soluciones-projects__card">
              <div className="soluciones-projects__card-inner">
                <div className="soluciones-projects__card-icon">
                  <Code size={40} strokeWidth={1.2} />
                </div>
                <h3>Desarrollo de Software</h3>
                <p>
                  Aplicaciones web a medida para automatización de procesos
                  empresariales.
                </p>
              </div>
            </div>
            <div className="soluciones-projects__card">
              <div className="soluciones-projects__card-inner">
                <div className="soluciones-projects__card-icon">
                  <Globe size={40} strokeWidth={1.2} />
                </div>
                <h3>Sitios Web Corporativos</h3>
                <p>
                  Diseño y desarrollo de páginas web funcionales que reflejan la
                  identidad de cada negocio.
                </p>
              </div>
            </div>
            <div className="soluciones-projects__card soluciones-projects__card--large">
              <div className="soluciones-projects__card-inner">
                <div className="soluciones-projects__card-icon">
                  <Network size={40} strokeWidth={1.2} />
                </div>
                <h3>Infraestructura de Red</h3>
                <p>
                  Diseño e implementación de redes empresariales escalables con
                  tecnología de vanguardia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="soluciones-cta section">
        <div className="container">
          <div className="soluciones-cta__inner reveal">
            <h2 className="soluciones-cta__title">
              ¿Listo para mejorar tu tecnología?
            </h2>
            <p className="soluciones-cta__text">
              Hablemos y encuentra la solución ideal para tu empresa.
            </p>
            <div className="soluciones-cta__actions">
              <Link to="/empezar" className="btn btn-primary">
                COMENZAR PROYECTO
                <ArrowUpRight size={16} />
              </Link>
              <Link to="/contacto" className="btn btn-outline">
                CONTÁCTANOS
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

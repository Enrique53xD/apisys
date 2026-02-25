import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Code,
  Shield,
  Network,
  Headphones,
  Server,
  ChevronRight,
  Zap,
  Globe,
  Lock,
} from "lucide-react";
import { useReveal } from "../hooks/useReveal";
import "./Home.css";

const services = [
  {
    icon: <Code size={28} />,
    title: "Desarrollo Web",
    description:
      "Desarrolla tu sitio web con nosotros. Creamos aplicaciones web a medida, funcionales y atractivas.",
    link: "/soluciones#desarrollo",
  },
  {
    icon: <Headphones size={28} />,
    title: "Soporte Técnico",
    description:
      "Conoce nuestros planes que se acoplen a tu empresa. Soporte confiable y especializado.",
    link: "/soluciones#soporte",
  },
  {
    icon: <Network size={28} />,
    title: "Infraestructura de Red",
    description:
      "Dale a tu negocio el impulso que necesita con infraestructura de red profesional.",
    link: "/soluciones#infraestructura",
  },
  {
    icon: <Shield size={28} />,
    title: "Sistemas de Seguridad",
    description:
      "CCTV inteligente y biométricos. Protege tus instalaciones con tecnología avanzada.",
    link: "/soluciones#seguridad",
  },
  {
    icon: <Server size={28} />,
    title: "Servicio de Hosting",
    description:
      "Alojamiento web rápido, seguro y confiable para que tu sitio esté siempre en línea.",
    link: "/soluciones#hosting",
  },
];

const features = [
  {
    icon: <Zap size={22} />,
    title: "Rápida implementación",
    desc: "Procesos ágiles que minimizan tiempos de entrega.",
  },
  {
    icon: <Globe size={22} />,
    title: "Alcance digital",
    desc: "Conectamos tu negocio con el mundo digital moderno.",
  },
  {
    icon: <Lock size={22} />,
    title: "Seguridad garantizada",
    desc: "Protección integral para toda tu infraestructura.",
  },
];

export default function Home() {
  useReveal();

  return (
    <div className="home">
      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="hero__bg">
          <div className="hero__gradient" />
          <div className="hero__grid-pattern" />
          <div className="hero__orb hero__orb--1" />
          <div className="hero__orb hero__orb--2" />
        </div>

        <div className="container hero__container">
          <div className="hero__content">
            <div className="hero__badge badge">
              <span className="glow-dot" />
              Soluciones IT Integrales
            </div>

            <h1 className="hero__title">
              <span className="hero__title-line">
                En <span className="gradient-text">APISYS</span>
              </span>
              <span className="hero__title-line">
                creemos que la <span className="gradient-text">tecnología</span>
              </span>
              <span className="hero__title-line">
                puede estar al{" "}
                <span className="gradient-text">alcance de todos</span>
              </span>
            </h1>

            <p className="hero__subtitle">
              Diseñamos, implementamos y mantenemos soluciones tecnológicas que
              impulsan el crecimiento de tu empresa. Desde desarrollo web hasta
              infraestructura de red completa.
            </p>

            <div className="hero__actions">
              <Link to="/contacto" className="btn btn-primary hero__btn">
                Contáctanos
                <ArrowUpRight size={18} />
              </Link>
              <Link to="/nosotros" className="btn btn-outline hero__btn">
                Conócenos
                <ChevronRight size={18} />
              </Link>
            </div>

            <div className="hero__stats">
              <div className="hero__stat">
                <span className="hero__stat-number">50+</span>
                <span className="hero__stat-label">Proyectos</span>
              </div>
              <div className="hero__stat-divider" />
              <div className="hero__stat">
                <span className="hero__stat-number">24/7</span>
                <span className="hero__stat-label">Soporte</span>
              </div>
              <div className="hero__stat-divider" />
              <div className="hero__stat">
                <span className="hero__stat-number">100%</span>
                <span className="hero__stat-label">Compromiso</span>
              </div>
            </div>
          </div>

          <div className="hero__visual">
            <div className="hero__visual-card">
              <div className="hero__visual-code">
                <div className="hero__code-header">
                  <span className="hero__code-dot hero__code-dot--red" />
                  <span className="hero__code-dot hero__code-dot--yellow" />
                  <span className="hero__code-dot hero__code-dot--green" />
                </div>
                <pre className="hero__code-block">
                  <code>
                    <span className="code-keyword">const</span>{" "}
                    <span className="code-var">apisys</span> = {`{`}
                    {"\n"}
                    {"  "}
                    <span className="code-prop">misión</span>:{" "}
                    <span className="code-string">"Impulsar empresas"</span>,
                    {"\n"}
                    {"  "}
                    <span className="code-prop">servicios</span>: [{"\n"}
                    {"    "}
                    <span className="code-string">"Desarrollo Web"</span>,{"\n"}
                    {"    "}
                    <span className="code-string">"Infraestructura"</span>,
                    {"\n"}
                    {"    "}
                    <span className="code-string">"Seguridad"</span>,{"\n"}
                    {"    "}
                    <span className="code-string">"Soporte IT"</span>
                    {"\n"}
                    {"  "}],{"\n"}
                    {"  "}
                    <span className="code-prop">compromiso</span>:{" "}
                    <span className="code-bool">true</span>
                    {"\n"}
                    {`}`};
                  </code>
                </pre>
              </div>
              <div className="hero__visual-glow" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="home-services section" id="servicios">
        <div className="container">
          <div className="home-services__header reveal">
            <span className="section-label">Nuestros Servicios</span>
            <h2 className="section-title">
              Soluciones integrales para{" "}
              <span className="gradient-text">tu empresa</span>
            </h2>
            <p className="section-subtitle">
              Ofrecemos un ecosistema completo de servicios tecnológicos
              diseñados para impulsar tu negocio al siguiente nivel.
            </p>
          </div>

          <div className="home-services__grid reveal">
            {services.map((service, index) => (
              <Link
                to={service.link}
                key={index}
                className="home-services__card card reveal-stagger"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="home-services__card-icon icon-wrapper">
                  {service.icon}
                </div>
                <h3 className="home-services__card-title">{service.title}</h3>
                <p className="home-services__card-desc">
                  {service.description}
                </p>
                <span className="home-services__card-link">
                  COMENZAR <ArrowUpRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ABOUT PREVIEW ===== */}
      <section className="home-about section">
        <div className="home-about__bg bg-grid" />
        <div className="container">
          <div className="home-about__grid">
            <div className="home-about__content reveal">
              <span className="section-label">Conóce + APISYS</span>
              <h2 className="section-title">Sobre APISYS</h2>
              <div className="glow-line" />
              <p className="home-about__text">
                En Apisys creemos que la tecnología debe ser un{" "}
                <strong>aliado estratégico</strong>, no una complicación. Por
                ello, trabajamos de la mano con nuestros clientes para diseñar,
                implementar y mantener soluciones en áreas clave.
              </p>
              <p className="home-about__text">
                Conóce más sobre nosotros y descubre qué nos inspira.
              </p>
              <Link to="/nosotros" className="btn btn-outline home-about__btn">
                CONÓCENOS
                <ArrowUpRight size={16} />
              </Link>
            </div>

            <div className="home-about__features reveal">
              {features.map((feature, index) => (
                <div key={index} className="home-about__feature">
                  <div className="home-about__feature-icon">{feature.icon}</div>
                  <div>
                    <h4 className="home-about__feature-title">
                      {feature.title}
                    </h4>
                    <p className="home-about__feature-desc">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

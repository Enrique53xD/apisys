import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Target,
  Eye,
  Heart,
  Lightbulb,
  Search,
  BookOpen,
  Phone,
  Stethoscope,
  ClipboardList,
  Settings,
  HeadphonesIcon,
  Quote,
} from "lucide-react";
import { useReveal } from "../hooks/useReveal";
import "./Nosotros.css";

const values = [
  {
    icon: <Heart size={28} />,
    title: "SÉ EL CLIENTE",
    description:
      "Nos ponemos en los zapatos de quienes confían en nosotros. Entendemos sus necesidades como propias.",
  },
  {
    icon: <Lightbulb size={28} />,
    title: "PIENSA A FUTURO",
    description:
      "La tecnología crece a un ritmo exponencial, así nuestro compromiso nace en ser una empresa dedicada a la actualización constante.",
  },
  {
    icon: <Search size={28} />,
    title: "ENCUENTRA LA SOLUCIÓN",
    description:
      "No nos detenemos ante los problemas. Buscamos alternativas, innovamos y creamos soluciones reales.",
  },
  {
    icon: <BookOpen size={28} />,
    title: "APRENDE Y CREA",
    description:
      "El aprendizaje continuo es parte de nuestro ADN. Cada proyecto es una oportunidad de crecer y mejorar.",
  },
];

const processSteps = [
  {
    icon: <Stethoscope size={28} />,
    number: "01",
    title: "DIAGNÓSTICO",
    description:
      "Evaluamos tu infraestructura actual, identificamos oportunidades de mejora y definimos prioridades.",
  },
  {
    icon: <ClipboardList size={28} />,
    number: "02",
    title: "PLANIFICACIÓN",
    description:
      "Diseñamos un plan estratégico personalizado con objetivos claros, tiempos y entregables definidos.",
  },
  {
    icon: <Settings size={28} />,
    number: "03",
    title: "IMPLEMENTACIÓN",
    description:
      "Ejecutamos la solución con precisión, asegurando calidad en cada paso del proceso.",
  },
  {
    icon: <HeadphonesIcon size={28} />,
    number: "04",
    title: "SOPORTE CONTINUO",
    description:
      "Te acompañamos después de la entrega con soporte técnico y mantenimiento preventivo.",
  },
];

export default function Nosotros() {
  useReveal();

  return (
    <div className="nosotros">
      {/* ===== HERO ===== */}
      <section className="nosotros-hero">
        <div className="nosotros-hero__bg">
          <div className="nosotros-hero__gradient" />
          <div className="nosotros-hero__grid-pattern" />
          <div className="nosotros-hero__orb nosotros-hero__orb--1" />
          <div className="nosotros-hero__orb nosotros-hero__orb--2" />
        </div>

        <div className="container nosotros-hero__container">
          <div className="nosotros-hero__content">
            <div className="badge nosotros-hero__badge">
              <span className="glow-dot" />
              Sobre Nosotros
            </div>
            <h1 className="nosotros-hero__title">
              CONSTRUIMOS INFRAESTRUCTURA TECNOLÓGICA QUE{" "}
              <span className="gradient-text">IMPULSA EMPRESAS REALES</span>
            </h1>
            <p className="nosotros-hero__subtitle">
              Más que soporte IT, somos tu aliado estratégico en crecimiento
              digital. Transformamos necesidades en realidades digitales.
            </p>
          </div>
        </div>
      </section>

      {/* ===== MISSION & VISION ===== */}
      <section className="nosotros-mv section">
        <div className="container">
          <div className="nosotros-mv__grid">
            <div className="nosotros-mv__card reveal">
              <div className="nosotros-mv__card-icon icon-wrapper">
                <Target size={28} />
              </div>
              <h2 className="nosotros-mv__card-title">MISIÓN</h2>
              <div className="glow-line" />
              <p className="nosotros-mv__card-text">
                Impulsar la eficiencia operativa y el crecimiento de nuestros
                clientes a través de soluciones informáticas integrales que
                fusionan el desarrollo de software con una infraestructura
                tecnológica de vanguardia. En Apisys, transformamos necesidades
                en realidades digitales mediante la creación de aplicaciones web,
                plataformas de comercio electrónico, y la implementación experta
                de redes, seguridad electrónica y soporte técnico especializado,
                garantizando siempre la continuidad y seguridad de cada negocio.
              </p>
            </div>

            <div className="nosotros-mv__card reveal">
              <div className="nosotros-mv__card-icon icon-wrapper">
                <Eye size={28} />
              </div>
              <h2 className="nosotros-mv__card-title">VISIÓN</h2>
              <div className="glow-line" />
              <p className="nosotros-mv__card-text">
                Ser el referente líder en integración tecnológica,
                distinguiéndonos por nuestra capacidad de ofrecer un ecosistema
                completo de soluciones que conectan la innovación digital con la
                solidez física. Aspiramos a ser el socio estratégico
                indispensable que simplifica la tecnología para las empresas,
                elevando sus estándares de conectividad, productividad y
                seguridad a través de un servicio basado en la excelencia técnica
                y la confianza mutua.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA LLAMADA ===== */}
      <section className="nosotros-call section">
        <div className="nosotros-call__bg bg-grid" />
        <div className="container">
          <div className="nosotros-call__inner reveal">
            <div className="nosotros-call__content">
              <span className="section-label">Agenda una llamada</span>
              <h2 className="nosotros-call__title">CONVERSEMOS</h2>
              <div className="nosotros-call__points">
                <p>Sabemos lo que es perder tiempo por fallos técnicos.</p>
                <p>Sabemos lo que es no tener soporte confiable.</p>
                <p>Sabemos lo que es depender de proveedores inestables.</p>
              </div>
            </div>
            <div className="nosotros-call__action">
              <div className="nosotros-call__icon-wrap">
                <Phone size={32} />
              </div>
              <Link to="/contacto" className="btn btn-primary">
                HABLEMOS AHORA
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CEO QUOTE ===== */}
      <section className="nosotros-ceo section">
        <div className="container">
          <div className="nosotros-ceo__inner reveal">
            <div className="nosotros-ceo__quote-icon">
              <Quote size={40} />
            </div>
            <blockquote className="nosotros-ceo__quote">
              "Apisys, nace como una empresa dedicada a llevar soluciones a
              empresas pequeñas y medianas, por medio de la automatización de
              procesos, desarrollo de software e infraestructura de red, les
              damos a nuestro cliente objetivo la capacidad de ser empresas
              escalables y competentes."
            </blockquote>
            <div className="nosotros-ceo__author">
              <div className="nosotros-ceo__author-avatar">
                <span>CEO</span>
              </div>
              <div className="nosotros-ceo__author-info">
                <span className="nosotros-ceo__author-role">
                  CEO – FOUNDING PARTNER
                </span>
                <span className="nosotros-ceo__author-company">
                  APISYS Solutions
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== VALUES ===== */}
      <section className="nosotros-values section">
        <div className="container">
          <div className="nosotros-values__header reveal">
            <span className="section-label">Nuestros Valores</span>
            <h2 className="section-title">
              Lo que nos{" "}
              <span className="gradient-text">define como equipo</span>
            </h2>
            <p className="section-subtitle">
              La tecnología crece a un ritmo exponencial, así nuestro compromiso
              nace en ser una empresa dedicada a la actualización constante;
              llevando a nuestros clientes a mantenerse conectados al mundo
              digital moderno y brindar soluciones escalables.
            </p>
          </div>

          <div className="nosotros-values__grid">
            {values.map((value, index) => (
              <div key={index} className="nosotros-values__card card reveal">
                <div className="nosotros-values__card-icon icon-wrapper">
                  {value.icon}
                </div>
                <h3 className="nosotros-values__card-title">{value.title}</h3>
                <p className="nosotros-values__card-desc">
                  {value.description}
                </p>
              </div>
            ))}
          </div>

          <div className="nosotros-values__tagline reveal">
            <p>
              Desarrollamos sistemas. <span>Automatizamos procesos.</span>
            </p>
          </div>
        </div>
      </section>

      {/* ===== PROCESS ===== */}
      <section className="nosotros-process section" id="proceso">
        <div className="container">
          <div className="nosotros-process__header reveal">
            <span className="section-label">Proceso de Trabajo</span>
            <h2 className="section-title">
              Cómo hacemos que{" "}
              <span className="gradient-text">las cosas funcionen</span>
            </h2>
          </div>

          <div className="nosotros-process__grid">
            {processSteps.map((step, index) => (
              <div key={index} className="nosotros-process__step reveal">
                <div className="nosotros-process__step-number">
                  {step.number}
                </div>
                <div className="nosotros-process__step-icon icon-wrapper">
                  {step.icon}
                </div>
                <h3 className="nosotros-process__step-title">{step.title}</h3>
                <p className="nosotros-process__step-desc">
                  {step.description}
                </p>
                {index < processSteps.length - 1 && (
                  <div className="nosotros-process__step-connector" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="nosotros-final-cta section">
        <div className="nosotros-final-cta__bg bg-grid" />
        <div className="container">
          <div className="nosotros-final-cta__inner reveal">
            <h2 className="nosotros-final-cta__title">
              ¿TU EMPRESA ESTÁ LISTA PARA OPERAR SIN INTERRUPCIONES?
            </h2>
            <div className="nosotros-final-cta__actions">
              <Link to="/contacto" className="btn btn-primary">
                HABLEMOS AHORA!
                <ArrowUpRight size={16} />
              </Link>
              <Link to="/soluciones" className="btn btn-outline">
                CONOCE NUESTROS PROYECTOS
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

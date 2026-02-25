import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  ArrowLeft,
  Send,
  Code,
  Shield,
  Network,
  Headphones,
  Server,
  CheckCircle,
} from "lucide-react";
import { useReveal } from "../hooks/useReveal";
import "./Empezar.css";

const serviceOptions = [
  { value: "desarrollo-web", label: "Desarrollo Web", icon: <Code size={20} /> },
  { value: "soporte-tecnico", label: "Soporte Técnico", icon: <Headphones size={20} /> },
  { value: "infraestructura", label: "Infraestructura de Red", icon: <Network size={20} /> },
  { value: "seguridad", label: "Sistemas de Seguridad", icon: <Shield size={20} /> },
  { value: "hosting", label: "Servicio de Hosting", icon: <Server size={20} /> },
];

const steps = [
  "Cuéntanos sobre ti",
  "Tu negocio",
  "Selecciona servicio",
];

export default function Empezar() {
  useReveal();

  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    business: "",
    service: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleServiceSelect = (value: string) => {
    setFormData((prev) => ({ ...prev, service: value }));
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const canProceed = () => {
    switch (currentStep) {
      case 0:
        return formData.name.trim() !== "" && formData.email.trim() !== "";
      case 1:
        return formData.business.trim() !== "";
      case 2:
        return formData.service !== "";
      default:
        return false;
    }
  };

  if (submitted) {
    return (
      <div className="empezar">
        <section className="empezar-hero">
          <div className="empezar-hero__bg">
            <div className="empezar-hero__gradient" />
            <div className="empezar-hero__grid-pattern" />
            <div className="empezar-hero__orb empezar-hero__orb--1" />
            <div className="empezar-hero__orb empezar-hero__orb--2" />
          </div>
          <div className="container empezar-hero__container">
            <div className="empezar-success">
              <div className="empezar-success__icon">
                <CheckCircle size={64} />
              </div>
              <h1 className="empezar-success__title">
                ¡Gracias por tu interés!
              </h1>
              <p className="empezar-success__text">
                Hemos recibido tu información. Nuestro equipo se pondrá en
                contacto contigo pronto para comenzar a trabajar juntos.
              </p>
              <div className="empezar-success__actions">
                <Link to="/" className="btn btn-primary">
                  VOLVER AL INICIO
                  <ArrowUpRight size={16} />
                </Link>
                <Link to="/soluciones" className="btn btn-outline">
                  VER SERVICIOS
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="empezar">
      {/* ===== HERO ===== */}
      <section className="empezar-hero">
        <div className="empezar-hero__bg">
          <div className="empezar-hero__gradient" />
          <div className="empezar-hero__grid-pattern" />
          <div className="empezar-hero__orb empezar-hero__orb--1" />
          <div className="empezar-hero__orb empezar-hero__orb--2" />
        </div>

        <div className="container empezar-hero__container">
          <div className="empezar-hero__content reveal">
            <div className="badge empezar-hero__badge">
              <span className="glow-dot" />
              Nuevo Proyecto
            </div>
            <h1 className="empezar-hero__title">
              ESTE ES EL PRIMER PASO PARA{" "}
              <span className="gradient-text">INICIAR TU CAMINO</span> CON
              NOSOTROS
            </h1>
            <p className="empezar-hero__subtitle">
              Completa el formulario y nuestro equipo se pondrá en contacto
              contigo para evaluar tu proyecto y encontrar la mejor solución.
            </p>
          </div>
        </div>
      </section>

      {/* ===== FORM SECTION ===== */}
      <section className="empezar-form-section section">
        <div className="container">
          <div className="empezar-form-layout">
            {/* Steps Sidebar */}
            <div className="empezar-steps reveal">
              <h3 className="empezar-steps__title">Pasos</h3>
              <div className="empezar-steps__list">
                {steps.map((step, index) => (
                  <div
                    key={index}
                    className={`empezar-steps__item ${
                      index === currentStep
                        ? "empezar-steps__item--active"
                        : index < currentStep
                          ? "empezar-steps__item--completed"
                          : ""
                    }`}
                  >
                    <div className="empezar-steps__item-number">
                      {index < currentStep ? (
                        <CheckCircle size={18} />
                      ) : (
                        <span>{String(index + 1).padStart(2, "0")}</span>
                      )}
                    </div>
                    <span className="empezar-steps__item-label">{step}</span>
                    {index < steps.length - 1 && (
                      <div className="empezar-steps__item-connector" />
                    )}
                  </div>
                ))}
              </div>

              <div className="empezar-steps__info">
                <p>
                  ¿Necesitas ayuda? Contáctanos directamente:
                </p>
                <a href="mailto:info@apisys.com.gt" className="empezar-steps__info-link">
                  info@apisys.com.gt
                </a>
                <a href="tel:+50254228850" className="empezar-steps__info-link">
                  +502 5422-8850
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="empezar-form-wrap reveal">
              <form className="empezar-form" onSubmit={handleSubmit}>
                <div className="empezar-form__progress">
                  <div
                    className="empezar-form__progress-bar"
                    style={{
                      width: `${((currentStep + 1) / steps.length) * 100}%`,
                    }}
                  />
                </div>

                {/* Step 1: Personal Info */}
                {currentStep === 0 && (
                  <div className="empezar-form__step">
                    <div className="empezar-form__step-header">
                      <h2 className="empezar-form__step-title">
                        Cuéntanos sobre ti
                      </h2>
                      <p className="empezar-form__step-desc">
                        Necesitamos algunos datos básicos para poder contactarte.
                      </p>
                    </div>

                    <div className="empezar-form__group">
                      <label
                        htmlFor="empezar-name"
                        className="empezar-form__label"
                      >
                        NOMBRE Y APELLIDO <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        id="empezar-name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="empezar-form__input"
                        placeholder="Introduce un nombre y un apellido"
                        required
                      />
                    </div>

                    <div className="empezar-form__group">
                      <label
                        htmlFor="empezar-email"
                        className="empezar-form__label"
                      >
                        CORREO ELECTRÓNICO <span className="required">*</span>
                      </label>
                      <input
                        type="email"
                        id="empezar-email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="empezar-form__input"
                        placeholder="tu@email.com"
                        required
                      />
                    </div>

                    <div className="empezar-form__group">
                      <label
                        htmlFor="empezar-phone"
                        className="empezar-form__label"
                      >
                        NÚMERO DE TELÉFONO
                      </label>
                      <input
                        type="tel"
                        id="empezar-phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="empezar-form__input"
                        placeholder="+502 0000-0000"
                      />
                    </div>
                  </div>
                )}

                {/* Step 2: Business Info */}
                {currentStep === 1 && (
                  <div className="empezar-form__step">
                    <div className="empezar-form__step-header">
                      <h2 className="empezar-form__step-title">Tu negocio</h2>
                      <p className="empezar-form__step-desc">
                        Cuéntanos un poco sobre tu empresa y lo que necesitas.
                      </p>
                    </div>

                    <div className="empezar-form__group">
                      <label
                        htmlFor="empezar-business"
                        className="empezar-form__label"
                      >
                        CUÉNTANOS ACERCA DE TU NEGOCIO{" "}
                        <span className="required">*</span>
                      </label>
                      <textarea
                        id="empezar-business"
                        name="business"
                        value={formData.business}
                        onChange={handleChange}
                        className="empezar-form__textarea"
                        placeholder="Describe brevemente tu negocio, qué hace y qué necesitas..."
                        rows={6}
                        required
                      />
                    </div>
                  </div>
                )}

                {/* Step 3: Service Selection */}
                {currentStep === 2 && (
                  <div className="empezar-form__step">
                    <div className="empezar-form__step-header">
                      <h2 className="empezar-form__step-title">
                        Selecciona el servicio
                      </h2>
                      <p className="empezar-form__step-desc">
                        Elige el servicio que mejor se adapte a tus necesidades.
                      </p>
                    </div>

                    <div className="empezar-form__services">
                      {serviceOptions.map((option) => (
                        <button
                          key={option.value}
                          type="button"
                          className={`empezar-form__service-card ${
                            formData.service === option.value
                              ? "empezar-form__service-card--selected"
                              : ""
                          }`}
                          onClick={() => handleServiceSelect(option.value)}
                        >
                          <div className="empezar-form__service-icon">
                            {option.icon}
                          </div>
                          <span className="empezar-form__service-label">
                            {option.label}
                          </span>
                          {formData.service === option.value && (
                            <div className="empezar-form__service-check">
                              <CheckCircle size={18} />
                            </div>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Form Actions */}
                <div className="empezar-form__actions">
                  {currentStep > 0 && (
                    <button
                      type="button"
                      className="btn btn-ghost empezar-form__prev"
                      onClick={handlePrev}
                    >
                      <ArrowLeft size={16} />
                      Atrás
                    </button>
                  )}

                  <div className="empezar-form__actions-right">
                    {currentStep < steps.length - 1 ? (
                      <button
                        type="button"
                        className="btn btn-primary empezar-form__next"
                        onClick={handleNext}
                        disabled={!canProceed()}
                      >
                        Siguiente
                        <ArrowUpRight size={16} />
                      </button>
                    ) : (
                      <button
                        type="submit"
                        className="btn btn-primary empezar-form__submit"
                        disabled={!canProceed()}
                      >
                        <Send size={16} />
                        Enviar
                      </button>
                    )}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ===== BACK TO HOME ===== */}
      <section className="empezar-back section">
        <div className="container">
          <div className="empezar-back__inner reveal">
            <Link to="/" className="btn btn-outline empezar-back__btn">
              <ArrowLeft size={16} />
              VOLVER AL INICIO
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Mail,
  Phone,
  Facebook,
  Instagram,
  MessageCircle,
  Send,
  MapPin,
  Clock,
} from "lucide-react";
import { useReveal } from "../hooks/useReveal";
import "./Contacto.css";

export default function Contacto() {
  useReveal();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [charCount, setCharCount] = useState(0);
  const maxChars = 180;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (name === "message" && value.length > maxChars) return;

    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "message") {
      setCharCount(value.length);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert("¡Gracias por contactarnos! Te responderemos pronto.");
    setFormData({ name: "", email: "", phone: "", message: "" });
    setCharCount(0);
  };

  return (
    <div className="contacto">
      {/* ===== HERO ===== */}
      <section className="contacto-hero">
        <div className="contacto-hero__bg">
          <div className="contacto-hero__gradient" />
          <div className="contacto-hero__grid-pattern" />
          <div className="contacto-hero__orb contacto-hero__orb--1" />
          <div className="contacto-hero__orb contacto-hero__orb--2" />
        </div>

        <div className="container contacto-hero__container">
          <div className="contacto-hero__content">
            <div className="badge contacto-hero__badge">
              <span className="glow-dot" />
              Contacto
            </div>
            <h1 className="contacto-hero__title">
              <span className="gradient-text">CONTÁCTANOS</span>
            </h1>
            <p className="contacto-hero__subtitle">
              Para atención al cliente, puedes escribirnos a nuestro correo o
              llamarnos al número telefónico. Estamos aquí para ayudarte.
            </p>
          </div>
        </div>
      </section>

      {/* ===== CONTACT SECTION ===== */}
      <section className="contacto-main section">
        <div className="container">
          <div className="contacto-main__grid">
            {/* Contact Info */}
            <div className="contacto-info reveal">
              <h2 className="contacto-info__title">
                Hablemos sobre tu proyecto
              </h2>
              <p className="contacto-info__desc">
                Cuéntanos qué necesitas y encontraremos la mejor solución
                tecnológica para tu empresa.
              </p>

              <div className="contacto-info__items">
                <a
                  href="mailto:info@apisys.com.gt"
                  className="contacto-info__item"
                >
                  <div className="contacto-info__item-icon icon-wrapper">
                    <Mail size={22} />
                  </div>
                  <div className="contacto-info__item-content">
                    <span className="contacto-info__item-label">
                      Correo Electrónico
                    </span>
                    <span className="contacto-info__item-value">
                      info@apisys.com.gt
                    </span>
                  </div>
                </a>

                <a href="tel:+50254228850" className="contacto-info__item">
                  <div className="contacto-info__item-icon icon-wrapper">
                    <Phone size={22} />
                  </div>
                  <div className="contacto-info__item-content">
                    <span className="contacto-info__item-label">Teléfono</span>
                    <span className="contacto-info__item-value">
                      +502 5422-8850
                    </span>
                  </div>
                </a>

                <div className="contacto-info__item">
                  <div className="contacto-info__item-icon icon-wrapper">
                    <MapPin size={22} />
                  </div>
                  <div className="contacto-info__item-content">
                    <span className="contacto-info__item-label">Ubicación</span>
                    <span className="contacto-info__item-value">
                      Guatemala, Guatemala
                    </span>
                  </div>
                </div>

                <div className="contacto-info__item">
                  <div className="contacto-info__item-icon icon-wrapper">
                    <Clock size={22} />
                  </div>
                  <div className="contacto-info__item-content">
                    <span className="contacto-info__item-label">Horario</span>
                    <span className="contacto-info__item-value">
                      Lun - Vie: 8:00 AM - 6:00 PM
                    </span>
                  </div>
                </div>
              </div>

              {/* Socials */}
              <div className="contacto-info__socials">
                <span className="contacto-info__socials-label">
                  Síguenos en redes
                </span>
                <div className="contacto-info__socials-links">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contacto-info__social-link"
                    aria-label="Facebook"
                  >
                    <Facebook size={20} />
                  </a>
                  <a
                    href="https://www.instagram.com/apisysgt/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contacto-info__social-link"
                    aria-label="Instagram"
                  >
                    <Instagram size={20} />
                  </a>
                  <a
                    href="https://wa.me/message/MMNITA5POQA3K1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contacto-info__social-link"
                    aria-label="WhatsApp"
                  >
                    <MessageCircle size={20} />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contacto-form-wrap reveal">
              <form className="contacto-form" onSubmit={handleSubmit}>
                <div className="contacto-form__header">
                  <h3 className="contacto-form__title">Envíanos un mensaje</h3>
                  <p className="contacto-form__desc">
                    Completa el formulario y te responderemos a la brevedad.
                  </p>
                </div>

                <div className="contacto-form__group">
                  <label htmlFor="contact-name" className="contacto-form__label">
                    NOMBRE Y APELLIDO <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="contacto-form__input"
                    placeholder="Tu nombre completo"
                    required
                  />
                </div>

                <div className="contacto-form__group">
                  <label
                    htmlFor="contact-email"
                    className="contacto-form__label"
                  >
                    CORREO ELECTRÓNICO <span className="required">*</span>
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="contacto-form__input"
                    placeholder="tu@email.com"
                    required
                  />
                </div>

                <div className="contacto-form__group">
                  <label
                    htmlFor="contact-phone"
                    className="contacto-form__label"
                  >
                    NÚMERO DE TELÉFONO
                  </label>
                  <input
                    type="tel"
                    id="contact-phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="contacto-form__input"
                    placeholder="+502 0000-0000"
                  />
                </div>

                <div className="contacto-form__group">
                  <label
                    htmlFor="contact-message"
                    className="contacto-form__label"
                  >
                    MENSAJE
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="contacto-form__textarea"
                    placeholder="¿En qué podemos ayudarte?"
                    rows={4}
                  />
                  <span className="contacto-form__char-count">
                    {charCount} / {maxChars}
                  </span>
                </div>

                <button type="submit" className="btn btn-primary contacto-form__submit">
                  <Send size={16} />
                  ENVIAR
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES CTA ===== */}
      <section className="contacto-services section">
        <div className="contacto-services__bg bg-grid" />
        <div className="container">
          <div className="contacto-services__inner reveal">
            <div className="contacto-services__content">
              <span className="section-label">Servicios</span>
              <h2 className="contacto-services__title">
                ¿Listo para mejorar tu tecnología?
              </h2>
              <p className="contacto-services__text">
                Hablemos y encuentra la solución ideal para tu empresa. Nuestro
                equipo está listo para ayudarte a dar el siguiente paso.
              </p>
            </div>
            <Link to="/soluciones" className="btn btn-primary contacto-services__btn">
              VER MÁS
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

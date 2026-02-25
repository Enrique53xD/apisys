import { MessageCircle } from "lucide-react";
import "./WhatsAppButton.css";

const WHATSAPP_URL = "https://wa.me/message/MMNITA5POQA3K1";

export default function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-btn"
      aria-label="Contáctanos por WhatsApp"
    >
      <span className="whatsapp-btn__pulse" />
      <span className="whatsapp-btn__icon">
        <MessageCircle size={28} />
      </span>
      <span className="whatsapp-btn__tooltip">¡Escríbenos!</span>
    </a>
  );
}

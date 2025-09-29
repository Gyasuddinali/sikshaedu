import React from 'react';
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import './float.css';

const FloatingButtons = () => {
  return (
    <div className="floating-buttons">
      {/* WhatsApp */}
      <a
        href="https://wa.me/919199245536"
        target="_blank"
        rel="noopener noreferrer"
        className="fab fab-whatsapp"
        title="Chat on WhatsApp"
      >
        <span className="fab-label">Chat on WhatsApp</span>
                <FaWhatsapp />

      </a>

      {/* Call */}
      <a
        href="tel:+919199245536"
        className="fab fab-call"
        title="Call Now"
      >
        <span className="fab-label">Call Us</span>
        <FaPhoneAlt />
      </a>
    </div>
  );
};

export default FloatingButtons;

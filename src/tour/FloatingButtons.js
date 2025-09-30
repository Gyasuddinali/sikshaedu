import React, { useState } from 'react';
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaYoutube,
  FaInstagram,
  FaPlus,
  FaTimes,
} from 'react-icons/fa';
import './float.css';

const FloatingButtons = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fab-container">
      {/* Action Buttons */}
      <div className={`fab-actions ${open ? 'open' : ''}`}>
        <a href="tel:+" className="fab-item call" title="Call Us">
          <FaPhoneAlt />
        </a>
        <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="fab-item whatsapp" title="WhatsApp">
          <FaWhatsapp />
        </a>
        <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer" className="fab-item youtube" title="YouTube">
          <FaYoutube />
        </a>
        <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="fab-item instagram" title="Instagram">
          <FaInstagram />
        </a>
      </div>

      {/* Main Toggle Button */}
      <button className="fab-main" onClick={() => setOpen(!open)} aria-label="Toggle Menu">
        {open ? <FaTimes /> : <FaPlus />}
      </button>
    </div>
  );
};

export default FloatingButtons;

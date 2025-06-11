import React from "react";
import "../styles/Footer.css";
import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-top">
        <h3 className="footer-title">Vruksha Academy</h3>
        <p className="footer-tagline">
          Empowering future educators through innovative and inclusive Montessori training programs.
        </p>
        <div className="footer-contact">
          <p>Email: vrukshaacademyinfo@gmail.com</p>
          <p>Phone: +91 86101 45697</p>
        </div>
        <div className="footer-icons">
          <a href="https://www.instagram.com/vruksha_academy24" target="_blank" rel="noreferrer" title="Instagram">
            <FaInstagram />
          </a>
          <a href="https://www.facebook.com/share/16fsByPp6L/" target="_blank" rel="noreferrer" title="Facebook">
            <FaFacebookF />
          </a>
          <a href="https://www.youtube.com/@VrukshaAcademy_Montessorilearn" target="_blank" rel="noreferrer" title="YouTube">
            <FaYoutube />
          </a>
          <a href=" https://wa.me/918610145697" target="_blank" rel="noreferrer" title="WhatsApp">
            <FaWhatsapp />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Vruksha Academy | Montessori Teacher Training
      </div>
    </footer>
  );
};

export default Footer;

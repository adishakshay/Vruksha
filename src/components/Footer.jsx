import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";
import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Column 1 - About */}
        <div className="footer-col">
          <h3 className="footer-heading">Vruksha Academy</h3>
          <p className="footer-text">
            Empowering future educators through innovative and inclusive Montessori training programs.
          </p>
        </div>

        {/* Column 2 - Quick Links */}
        <div className="footer-col">
          <h4 className="footer-subheading">Quick Links</h4>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/courses">Courses</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Column 3 - Contact & Social */}
        <div className="footer-col contact-col">
          <h4 className="footer-subheading">Contact</h4>
          <p className="footer-text">vrukshaacademyinfo@gmail.com</p>
          <p className="footer-text">+91 86101 45697</p>
          <div className="footer-icons">
            <a href="https://www.instagram.com/vruksha_academy24" target="_blank" rel="noreferrer"><FaInstagram /></a>
            <a href="https://www.facebook.com/share/16fsByPp6L/" target="_blank" rel="noreferrer"><FaFacebookF /></a>
            <a href="https://www.youtube.com/@VrukshaAcademy_Montessorilearn" target="_blank" rel="noreferrer"><FaYoutube /></a>
            <a href="https://wa.me/918610145697" target="_blank" rel="noreferrer"><FaWhatsapp /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Vruksha Academy | Montessori Teacher Training
      </div>
    </footer>
  );
};

export default Footer;

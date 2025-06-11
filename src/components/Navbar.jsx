import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../styles/Navbar.css';
import logo from '../assets/Screenshot 2025-04-12 232931.png';

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      setIsLoggedIn(false);
      localStorage.removeItem("userData");
      navigate("/login");
    }
  };

  return (
    <nav className="navbar-container">
      <img className="navbar-logo-img" src={logo} alt="Vruksha Academy Logo" />

      {/* Toggle Button */}
      <div className="navbar-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Navigation Links */}
      <ul className={`navbar-links ${menuOpen ? "active" : ""}`}>
        <li><Link to="/" className="navbar-link" onClick={() => setMenuOpen(false)}>Home</Link></li>
        <li><Link to="/about" className="navbar-link" onClick={() => setMenuOpen(false)}>About</Link></li>
        <li><Link to="/courses" className="navbar-link" onClick={() => setMenuOpen(false)}>Courses</Link></li>
        <li><Link to="/register" className="navbar-link" onClick={() => setMenuOpen(false)}>Register</Link></li>
        <li><Link to="/contact" className="navbar-link" onClick={() => setMenuOpen(false)}>Contact</Link></li>

        {/* Auth Buttons (Uncomment if needed) */}
        {/* {isLoggedIn ? (
          <li>
            <button
              onClick={() => {
                handleLogout();
                setMenuOpen(false);
              }}
              className="navbar-link"
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
            >
              Logout
            </button>
          </li>
        ) : (
          <>
            <li><Link to="/login" className="navbar-link" onClick={() => setMenuOpen(false)}>Login</Link></li>
            <li><Link to="/signup" className="navbar-link" onClick={() => setMenuOpen(false)}>Signup</Link></li>
          </>
        )} */}
      </ul>
    </nav>
  );
};

export default Navbar;

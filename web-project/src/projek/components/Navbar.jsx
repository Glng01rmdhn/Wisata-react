// src/projek/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const navbarStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 2rem",
    backgroundColor: "#003f2f",
    color: "#fff",
  };

  const navLinksStyle = {
    display: "flex",
    gap: "1rem",
  };

  const linkStyle = {
    color: "#fff",
    textDecoration: "none",
    fontWeight: "bold",
  };

  return (
    <nav style={navbarStyle}>
      <div style={{ fontSize: "1.5rem" }}>JungleLand</div>
      <div style={navLinksStyle}>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/about" style={linkStyle}>About</Link>
        <Link to="/contact" style={linkStyle}>Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;

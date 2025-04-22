import React from "react";

const HomePage = () => {
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

  const heroStyle = {
    backgroundImage: "url('/images/hero.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "80vh",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    textAlign: "center",
    padding: "2rem",
  };

  const heroTextStyle = {
    fontSize: "3rem",
    fontWeight: "bold",
    marginBottom: "1rem",
    textShadow: "2px 2px 8px rgba(0,0,0,0.6)",
  };

  const heroParaStyle = {
    fontSize: "1.2rem",
    maxWidth: "600px",
    textShadow: "1px 1px 4px rgba(0,0,0,0.5)",
  };

  const featuredStyle = {
    padding: "4rem 2rem",
    backgroundColor: "#fff",
  };

  const cardStyle = {
    width: "300px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    overflow: "hidden",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  };

  const cardImageStyle = {
    height: "200px",
    background: "#ccc url('https://via.placeholder.com/300x200') center/cover no-repeat",
  };

  const contentStyle = {
    padding: "1rem",
  };

  const footerStyle = {
    backgroundColor: "#003f2f",
    color: "#fff",
    textAlign: "center",
    padding: "2rem 1rem",
  };

  return (
    <div style={{ fontFamily: "sans-serif", backgroundColor: "#f7f7f7" }}>
      {/* Navbar */}
      <nav style={navbarStyle}>
        <div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>JungleLand</div>
        <div style={navLinksStyle}>
          <a href="#" style={{ color: "#fff", textDecoration: "none" }}>Beranda</a>
          <a href="#" style={{ color: "#fff", textDecoration: "none" }}>sejarah</a>
          <a href="#" style={{ color: "#fff", textDecoration: "none" }}>Kontak</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={heroStyle}>
        <h1 style={heroTextStyle}>Welcome to JungleLand</h1>
        <p style={heroParaStyle}>
          Nikmati berbagai wahana seru dan petualangan tak terlupakan bersama keluarga dan teman-teman!
        </p>
      </section>

      {/* Featured Sections */}
      <section style={featuredStyle}>
        <h2 style={{ textAlign: "center", marginBottom: "2rem", fontSize: "2rem" }}>Wahana Populer</h2>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "2rem" }}>
          {["Ferris Wheel", "Haunted House", "Roller Coaster"].map((wahana, i) => (
            <div key={i} style={cardStyle}>
              <div style={cardImageStyle} />
              <div style={contentStyle}>
                <h3 style={{ margin: "0 0 1rem 0" }}>{wahana}</h3>
                <p>Wahana yang penuh keseruan dan cocok untuk semua usia.</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={footerStyle}>
        <p>&copy; 2025 JungleLand. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;

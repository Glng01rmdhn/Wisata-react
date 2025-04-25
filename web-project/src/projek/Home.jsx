import React, { useState } from "react";

const HomePage = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

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
    backgroundImage: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('./assets/banner.jpg')",
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
    color: "#003f2f",
  };

  const cardStyle = {
    width: "300px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    overflow: "hidden",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    transition: "all 0.3s ease", // Animasi transisi
  };

  const hoveredCardStyle = {
    transform: "scale(1.05)", // Perbesar card saat hover
    boxShadow: "0 6px 20px rgba(0,0,0,0.2)", // Bayangan lebih besar saat hover
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

  const wahanaList = [
    {
      title: "Ferris Wheel",
      description: "Ferris Wheel menawarkan pengalaman berputar santai di ketinggian, dengan panorama indah yang membentang sejauh mata memandang. Cocok dinikmati oleh semua usia, wahana ini menjadi ikon favorit pengunjung.",
      image: "/assets/ferrisWhel.jpeg", // ini nama file yang kamu upload
    },
    {
      title: "Haunted House",
      description: "menghadirkan pengalaman menyeramkan dengan efek suara dan penampakan hantu yang mengejutkan, cocok untuk para pecinta horor dan tantangan.",
      image: "/assets/HauntedHouse.jpeg", // bisa diganti
    },
    {
      title: "Roller Coaster",
      description: "memberikan sensasi kecepatan dan tikungan tajam yang memacu adrenalin. Wahana ini cocok bagi pengunjung yang mencari pengalaman seru dan mendebarkan.",
      image: "/assets/rollerCoaster.jpeg", // bisa diganti
    },
  ];

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div style={{ fontFamily: "sans-serif", backgroundColor: "#f7f7f7" }}>
      <nav style={navbarStyle}>
        <div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>JungleLand</div>
        <div style={navLinksStyle}>
          <a href="#" style={{ color: "#fff", textDecoration: "none" }}>Home</a>
          <a href="#" style={{ color: "#fff", textDecoration: "none" }}>About</a>
          <a href="#" style={{ color: "#fff", textDecoration: "none" }}>Contact</a>
        </div>
      </nav>

      <section style={heroStyle}>
        <h1 style={heroTextStyle}>Welcome to JungleLand</h1>
        <p style={heroParaStyle}>
          Nikmati berbagai wahana seru dan petualangan tak terlupakan bersama keluarga dan teman-teman!
        </p>
      </section>

      <section style={featuredStyle}>
        <h2 style={{ textAlign: "center", marginBottom: "2rem", fontSize: "2rem" }}>Wahana Populer</h2>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "2rem" }}>
          {wahanaList.map((item, i) => (
            <div
              key={i}
              style={{
                ...cardStyle,
                ...(hoveredIndex === i ? hoveredCardStyle : {}),
              }}
              onMouseEnter={() => handleMouseEnter(i)}
              onMouseLeave={handleMouseLeave}
            >
              <div
                style={{
                  height: "250px",
                  background: `url(${item.image}) center/cover no-repeat`,
                }}
              />
              <div style={contentStyle}>
                <h3 style={{ margin: "0 0 1rem 0" }}>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer style={footerStyle}>
        <p>&copy; 2025 JungleLand. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;

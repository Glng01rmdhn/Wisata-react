import React from "react";

const ContactPage = () => {
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
    height: "60vh",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    textAlign: "center",
    padding: "2rem",
  };

  const heroTextStyle = {
    fontSize: "2.5rem",
    fontWeight: "bold",
    marginBottom: "0.5rem",
    textShadow: "2px 2px 8px rgba(0,0,0,0.6)",
  };

  const sectionStyle = {
    padding: "4rem 2rem",
    backgroundColor: "#fff",
    color: "#003f2f",
    maxWidth: "600px",
    margin: "0 auto",
  };

  const labelStyle = {
    display: "block",
    marginBottom: "0.5rem",
    fontWeight: "bold",
  };

  const inputStyle = {
    width: "100%",
    padding: "0.75rem",
    marginBottom: "1.5rem",
    border: "1px solid #ccc",
    borderRadius: "5px",
  };

  const buttonStyle = {
    backgroundColor: "#003f2f",
    color: "#fff",
    border: "none",
    padding: "0.75rem 1.5rem",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
  };

  const footerStyle = {
    backgroundColor: "#003f2f",
    color: "#fff",
    textAlign: "center",
    padding: "2rem 1rem",
    marginTop: "4rem",
  };

  return (
    <div style={{ fontFamily: "sans-serif", backgroundColor: "#f7f7f7" }}>
      <nav style={navbarStyle}>
        <div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>JungleLand</div>
        <div style={navLinksStyle}>
          <a href="/" style={{ color: "#fff", textDecoration: "none" }}>Home</a>
          <a href="#" style={{ color: "#fff", textDecoration: "none" }}>About</a>
          <a href="#" style={{ color: "#fff", textDecoration: "none" }}>Contact</a>
        </div>
      </nav>

      <section style={heroStyle}>
        <h1 style={heroTextStyle}>Hubungi Kami</h1>
        <p style={{ maxWidth: "600px", textShadow: "1px 1px 4px rgba(0,0,0,0.5)" }}>
          Punya pertanyaan, saran, atau ingin bekerja sama? Silakan isi formulir di bawah ini dan tim kami akan segera menghubungi Anda!
        </p>
      </section>

      <section style={sectionStyle}>
        <form>
          <label htmlFor="name" style={labelStyle}>Nama Lengkap</label>
          <input type="text" id="name" name="name" style={inputStyle} required />

          <label htmlFor="email" style={labelStyle}>Email</label>
          <input type="email" id="email" name="email" style={inputStyle} required />

          <label htmlFor="message" style={labelStyle}>Pesan</label>
          <textarea id="message" name="message" rows="5" style={inputStyle} required></textarea>

          <button type="submit" style={buttonStyle}>Kirim</button>
        </form>
      </section>

      <footer style={footerStyle}>
        <p>&copy; 2025 JungleLand. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ContactPage;

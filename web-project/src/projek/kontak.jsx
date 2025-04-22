import React, { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Pesan berhasil dikirim! (Ini hanya simulasi)");
    setFormData({ name: "", email: "", message: "" });
  };

  const contactFormStyle = {
    maxWidth: "600px",
    margin: "2rem auto",
    padding: "2rem",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  };

  const inputStyle = {
    width: "100%",
    padding: "0.8rem",
    marginBottom: "1rem",
    border: "1px solid #ddd",
    borderRadius: "5px",
  };

  const buttonStyle = {
    padding: "0.8rem 2rem",
    backgroundColor: "#003f2f",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "1rem",
  };

  const headingStyle = {
    textAlign: "center",
    fontSize: "2rem",
    marginBottom: "2rem",
  };

  return (
    <div style={{ fontFamily: "sans-serif", backgroundColor: "#f7f7f7", padding: "2rem" }}>
      <h1 style={headingStyle}>Kontak Kami</h1>
      <form style={contactFormStyle} onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" style={{ display: "block", marginBottom: "0.5rem" }}>Nama</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Masukkan Nama"
            style={inputStyle}
            required
          />
        </div>

        <div>
          <label htmlFor="email" style={{ display: "block", marginBottom: "0.5rem" }}>Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Masukkan Email"
            style={inputStyle}
            required
          />
        </div>

        <div>
          <label htmlFor="message" style={{ display: "block", marginBottom: "0.5rem" }}>Pesan</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Tulis pesan Anda"
            style={{ ...inputStyle, height: "200px" }}
            required
          />
        </div>

        <div style={{ textAlign: "center" }}>
          <button type="submit" style={buttonStyle}>Kirim Pesan</button>
        </div>
      </form>

      {/* Peta Lokasi JungleLand */}
      <div style={{ marginTop: "4rem", textAlign: "center" }}>
        <h2>Tempat Kami</h2>
        <iframe
          src="https://www.google.com/maps/embed/v1/place?q=JungleLand+Indonesia&key=YOUR_GOOGLE_MAPS_API_KEY"
          width="100%"
          height="450"
          style={{ border: "0", borderRadius: "10px" }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactPage;

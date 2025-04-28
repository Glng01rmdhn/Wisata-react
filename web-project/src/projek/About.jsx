import React from "react";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';


const AboutPage = () => {
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
  };

  const titleStyle = {
    textAlign: "center",
    marginBottom: "2rem",
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: "#003f2f",
  };

  const historyStyle = {
    backgroundColor: "#f7f7f7",
    padding: "3rem 2rem",
    marginBottom: "2rem",
    color: "#003f2f",
  };

  const historyTextStyle = {
    maxWidth: "800px",
    margin: "0 auto",
    textAlign: "justify",
    fontSize: "1.1rem",
  };

  const facilitiesStyle = {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    gap: "2rem",
    color: "#003f2f",
  };

  const facilityCardStyle = {
    width: "250px",
    padding: "1.5rem",
    backgroundColor: "#f1f1f1",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    textAlign: "center",
    cursor: "pointer",
  };

  const ticketPriceStyle = {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    gap: "1.5rem",
    marginBottom: "3rem",
  };

  const priceCardStyle = {
    backgroundColor: "#003f2f",
    color: "#fff",
    padding: "2rem 1.5rem",
    borderRadius: "10px",
    width: "200px",
    textAlign: "center",
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
    cursor: "pointer",
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
      {/* NAVBAR */}
      <nav style={navbarStyle}>
      <nav style={navbarStyle}>
  <div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>JungleLand</div>
  <div style={navLinksStyle}>
    <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>Home</Link>
    <Link to="/about" style={{ color: "#fff", textDecoration: "none" }}>About</Link>
    <Link to="/contact" style={{ color: "#fff", textDecoration: "none" }}>Contact</Link>
  </div>
</nav>

      </nav>

      <section style={heroStyle}>
        <motion.h1
          style={heroTextStyle}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Tentang JungleLand
        </motion.h1>
        <motion.p
          style={{ maxWidth: "600px", textShadow: "1px 1px 4px rgba(0,0,0,0.5)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Selamat datang di JungleLand! Kami adalah destinasi wisata keluarga dengan berbagai wahana seru dan pengalaman tak terlupakan.
        </motion.p>
      </section>

      <motion.section
        style={historyStyle}
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 style={titleStyle}>Sejarah JungleLand</h2>
        <p style={historyTextStyle}>
          JungleLand pertama kali dibuka pada tahun 2000 dengan tujuan memberikan pengalaman wahana dan hiburan yang seru untuk seluruh keluarga.
          Dengan perkembangan yang pesat, JungleLand kini menjadi taman hiburan terbesar di Indonesia dengan lebih dari 50 wahana menarik dan area rekreasi yang luas.
        </p>
      </motion.section>

      <section style={sectionStyle}>
        <h2 style={titleStyle}>Fasilitas Kami</h2>
        <div style={facilitiesStyle}>
          {["Restoran", "Parkir Luas", "Toilet Bersih"].map((title, index) => (
            <motion.div
              key={index}
              style={facilityCardStyle}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h3>{title}</h3>
              <p>
                {title === "Restoran" && "Berbagai pilihan kuliner lezat di area taman untuk mengisi perut Anda setelah seru-seruan di wahana."}
                {title === "Parkir Luas" && "Area parkir yang luas dan aman untuk kendaraan pribadi Anda."}
                {title === "Toilet Bersih" && "Fasilitas toilet yang bersih dan nyaman di berbagai titik di dalam taman."}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <section style={sectionStyle}>
        <h2 style={titleStyle}>Harga Tiket</h2>
        <div style={ticketPriceStyle}>
          {[ 
            { title: "Weekday", price: "Rp 150.000", detail: "Senin - Jumat" },
            { title: "Weekend", price: "Rp 200.000", detail: "Sabtu - Minggu" },
            { title: "Annual Pass", price: "Rp 1.200.000", detail: "Setahun Penuh Akses" },
          ].map((ticket, index) => (
            <motion.div
              key={index}
              style={priceCardStyle}
              whileHover={{ scale: 1.1 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h3>{ticket.title}</h3>
              <p>{ticket.price}</p>
              <p>{ticket.detail}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <footer style={footerStyle}>
        <p>&copy; 2025 JungleLand. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AboutPage;

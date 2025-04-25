import React from "react";

const AboutPage = () => {
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
      <section style={heroStyle}>
        <h1 style={heroTextStyle}>Tentang JungleLand</h1>
        <p style={{ maxWidth: "600px", textShadow: "1px 1px 4px rgba(0,0,0,0.5)" }}>
          Selamat datang di JungleLand! Kami adalah destinasi wisata keluarga dengan berbagai wahana seru dan pengalaman tak terlupakan.
        </p>
      </section>

      <section style={historyStyle}>
        <h2 style={titleStyle}>Sejarah JungleLand</h2>
        <p style={historyTextStyle}>
          JungleLand pertama kali dibuka pada tahun 2000 dengan tujuan memberikan pengalaman wahana dan hiburan yang seru untuk seluruh keluarga. 
          Dengan perkembangan yang pesat, JungleLand kini menjadi taman hiburan terbesar di Indonesia dengan lebih dari 50 wahana menarik dan area rekreasi yang luas.
        </p>
      </section>

      <section style={facilitiesStyle}>
        <h2 style={titleStyle}>Fasilitas Kami</h2>
        <div style={facilitiesStyle}>
          <div style={facilityCardStyle}>
            <h3>Restoran</h3>
            <p>Berbagai pilihan kuliner lezat di area taman untuk mengisi perut Anda setelah seru-seruan di wahana.</p>
          </div>
          <div style={facilityCardStyle}>
            <h3>Parkir Luas</h3>
            <p>Area parkir yang luas dan aman untuk kendaraan pribadi Anda.</p>
          </div>
          <div style={facilityCardStyle}>
            <h3>Toilet Bersih</h3>
            <p>Fasilitas toilet yang bersih dan nyaman di berbagai titik di dalam taman.</p>
          </div>
        </div>
      </section>

      <section style={ticketPriceStyle}>
        <h2 style={titleStyle } color="#003f2f">Harga Tiket</h2>
        <div style={ticketPriceStyle}>
          <div style={priceCardStyle}>
            <h3>Weekday</h3>
            <p>Rp 150.000</p>
            <p>Senin - Jumat</p>
          </div>
          <div style={priceCardStyle}>
            <h3>Weekend</h3>
            <p>Rp 200.000</p>
            <p>Sabtu - Minggu</p>
          </div>
          <div style={priceCardStyle}>
            <h3>Annual Pass</h3>
            <p>Rp 1.200.000</p>
            <p>Setahun Penuh Akses</p>
          </div>
        </div>
      </section>

      <footer style={footerStyle}>
        <p>&copy; 2025 JungleLand. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AboutPage;

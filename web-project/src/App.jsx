import { Routes, Route } from 'react-router-dom';
import HomePage from './projek/Home'; // ini halaman Home
import AboutPage from './projek/About'; // ini halaman About
import KontakPage from './projek/kontak'; // ini halaman Kontak

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<KontakPage />} />
    </Routes>
  );
}

export default App;






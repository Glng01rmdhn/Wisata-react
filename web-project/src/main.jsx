import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // ⬅️ Tambahan!
import './index.css';
import App from './App.jsx'; // ⬅️ Nanti harus ganti import ke App.jsx, bukan Home.jsx langsung!

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);

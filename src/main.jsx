// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App'; // Importo App
import CarDetails from './Components/Pages/CarDetails';
import './index.css'; // Importo stilizimin

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} /> {/* Faqja kryesore */}
        <Route path="/car/:id" element={<CarDetails />} /> {/* Faqja e detajuara */}
      </Routes>
    </Router>
  </React.StrictMode>
);
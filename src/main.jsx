import React, { useState } from 'react';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HomePage from './App.jsx'
import ContactPage from './ContactPage.jsx'

// Componente principal que maneja la navegación
const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigation = (page) => {
    setCurrentPage(page);
    // Scroll al inicio cuando cambias de página
    window.scrollTo(0, 0);
  };

  return (
    <>
      {currentPage === 'home' && <HomePage onNavigate={handleNavigation} />}
      {currentPage === 'contact' && <ContactPage onNavigate={handleNavigation} />}
    </>
  );
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

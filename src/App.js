import './App.css';
import React, { StrictMode } from 'react';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import DipslayBlog from './components/DipslayBlog';

function App() {
  return (
    <StrictMode>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/blog/:id" element={<DipslayBlog />} />
      </Routes>
    </StrictMode>
  );
}

export default App;

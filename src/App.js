import './App.css';
import React, { StrictMode } from 'react';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import DipslayBlog from './components/DipslayBlog';
import Login from './components/Login';
import SignUp from './components/Signup';

function App() {
  return (
    <StrictMode>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/blog/:id" element={<DipslayBlog />} />
      </Routes>
    </StrictMode>
  );
}

export default App;

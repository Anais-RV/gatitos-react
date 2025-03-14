import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import AdoptPage from './pages/AdoptPage/AdoptPage';
import { ThemeProvider } from './context/ThemeContext';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/adopt" element={<AdoptPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
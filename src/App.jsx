import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import AdoptPage from './pages/AdoptPage/AdoptPage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adopt" element={<AdoptPage />} />
      </Routes>
    </Router>
  );
}

export default App;
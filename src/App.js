// src/App.js
import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import TP1 from './pages/TP1';
import TP2 from './pages/TP2';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/TP1" element={<TP1 />} />
        <Route path="/TP2" element={<TP2 />} />
      </Routes>
    </Router>
  );
}

export default App;

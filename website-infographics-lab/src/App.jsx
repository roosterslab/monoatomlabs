import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Catalog from './pages/Catalog';
import InfographicView from './pages/InfographicView';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Catalog />} />
        <Route path="/infographic/:id" element={<InfographicView />} />
      </Routes>
    </Router>
  );
}

export default App;

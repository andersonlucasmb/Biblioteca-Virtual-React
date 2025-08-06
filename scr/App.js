import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Catalogo from './pages/Catalogo';
import DetalhesLivro from './pages/DetalhesLivro';

function App() {
  return (
    <div className="App">
      <h1>Biblioteca Virtual</h1>
      <Routes>
        <Route path="/" element={<Navigate to="/catalogo" />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/livro/:id" element={<DetalhesLivro />} />
      </Routes>
    </div>
  );
}

export default App;

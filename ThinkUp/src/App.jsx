// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar'; // Ajusta el path según tu estructura
import Home from './pages/Home';
import Sudoku from './pages/Sudoku';
import TorresHanoi from './pages/TorresHanoi';
import Mastermind from './pages/Mastermind';
import Laberintos from './pages/Laberintos';
import Ajedrez from './pages/Ajedrez';
import JuegoSecuencias from './pages/JuegoSecuencias';
import Crucigramas from './pages/Crucigramas';

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sudoku" element={<Sudoku />} />
            <Route path="/torres-hanoi" element={<TorresHanoi />} />
            <Route path="/mastermind" element={<Mastermind />} />
            <Route path="/laberintos" element={<Laberintos />} />
            <Route path="/ajedrez" element={<Ajedrez />} />
            <Route path="/juego-secuencias" element={<JuegoSecuencias />} />
            <Route path="/crucigramas" element={<Crucigramas />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

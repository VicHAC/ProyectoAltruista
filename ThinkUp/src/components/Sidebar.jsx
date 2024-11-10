import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaPuzzlePiece, FaChess, FaBars, FaBrain, FaDice, FaMapSigns, FaStream } from 'react-icons/fa';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  const handleOverlayClick = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  return (
    <div className="relative">
      {/* Overlay oscuro que cubre toda la pantalla cuando el sidebar está abierto */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={handleOverlayClick}
        ></div>
      )}

      {/* Botón de hamburguesa para abrir el sidebar, visible solo cuando el sidebar está retraído */}
      {!isOpen && (
        <div className="fixed top-4 left-4 text-2xl cursor-pointer z-50" onClick={toggleSidebar}>
          <FaBars />
        </div>
      )}

      {/* Sidebar */}
      <div className={`fixed top-0 left-0 h-full bg-gray-800 text-white w-64 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 z-50`}>
        <div className="p-4 text-2xl font-bold flex items-center justify-between">
          <Link to="/" onClick={handleLinkClick}>
            <span>ThinkUp</span>
          </Link>
          {/* Botón para cerrar el sidebar, visible solo cuando está abierto */}
          {isOpen && (
            <div className="text-2xl cursor-pointer" onClick={toggleSidebar}>
              <FaBars />
            </div>
          )}
        </div>

        {/* Enlaces de navegación */}
        <nav className="flex flex-col gap-4 mt-8">
          <Link to="/" onClick={handleLinkClick} className="flex items-center gap-4 px-4 py-2 text-lg hover:bg-gray-700">
            <FaHome className="text-xl" />
            <span>Inicio</span>
          </Link>
          <Link to="/sudoku" onClick={handleLinkClick} className="flex items-center gap-4 px-4 py-2 text-lg hover:bg-gray-700">
            <FaPuzzlePiece className="text-xl" />
            <span>Sudoku</span>
          </Link>
          <Link to="/torres-hanoi" onClick={handleLinkClick} className="flex items-center gap-4 px-4 py-2 text-lg hover:bg-gray-700">
            <FaChess className="text-xl" />
            <span>Torres de Hanoi</span>
          </Link>
          <Link to="/mastermind" onClick={handleLinkClick} className="flex items-center gap-4 px-4 py-2 text-lg hover:bg-gray-700">
            <FaBrain className="text-xl" />
            <span>Mastermind</span>
          </Link>
          <Link to="/laberintos" onClick={handleLinkClick} className="flex items-center gap-4 px-4 py-2 text-lg hover:bg-gray-700">
            <FaMapSigns className="text-xl" />
            <span>Laberintos</span>
          </Link>
          <Link to="/ajedrez" onClick={handleLinkClick} className="flex items-center gap-4 px-4 py-2 text-lg hover:bg-gray-700">
            <FaChess className="text-xl" />
            <span>Ajedrez</span>
          </Link>
          <Link to="/juego-secuencias" onClick={handleLinkClick} className="flex items-center gap-4 px-4 py-2 text-lg hover:bg-gray-700">
            <FaStream className="text-xl" />
            <span>Juego de Secuencias</span>
          </Link>
          <Link to="/crucigramas" onClick={handleLinkClick} className="flex items-center gap-4 px-4 py-2 text-lg hover:bg-gray-700">
            <FaDice className="text-xl" />
            <span>Crucigramas</span>
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default Sidebar;

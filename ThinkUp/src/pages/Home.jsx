import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();

  // Array con las rutas de los juegos
  const gamesRoutes = [
    '/sudoku',
    '/torres-hanoi',
    '/mastermind',
    '/ajedrez',
    '/juego-secuencias',
    '/crucigramas',
  ];

  // Función para redirigir a un juego aleatorio
  const handleRandomGame = () => {
    const randomGame = gamesRoutes[Math.floor(Math.random() * gamesRoutes.length)];
    navigate(randomGame); // Redirige a la ruta aleatoria
  };
  return (
    <div className="px-8 py-6">
      {/* Encabezado */}
      <h1 className="text-4xl font-bold text-center mb-6">Bienvenido al Entorno Interactivo de Pensamiento Lógico</h1>
      <p className="text-lg text-center mb-8">Una plataforma diseñada para fortalecer tu capacidad lógica y de resolución de problemas a través de desafíos interactivos y juegos de lógica.</p>

      {/* Juegos destacados */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Explora los Juegos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: "Sudoku", description: "Mejora tus habilidades de análisis y concentración.", link: "/sudoku" },
            { name: "Torres de Hanoi", description: "Desafía tu capacidad de planificación.", link: "/torres-hanoi" },
            { name: "Mastermind", description: "Pon a prueba tu lógica deductiva.", link: "/mastermind" },
            { name: "Ajedrez", description: "Perfecciona tus estrategias.", link: "/ajedrez" },
            { name: "Juego de Secuencias", description: "Desarrolla habilidades en secuenciación.", link: "/juego-secuencias" },
            { name: "Crucigramas", description: "Refuerza tu capacidad de deducción.", link: "/crucigramas" }
          ].map((game, index) => (
            <Link to={game.link} key={index} className="p-6 bg-gray-100 rounded shadow hover:bg-gray-200">
              <h3 className="text-xl font-bold mb-2">{game.name}</h3>
              <p>{game.description}</p>
              <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">¡Jugar ahora!</button>
            </Link>
          ))}
        </div>
      </section>

      {/* Beneficios */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Beneficios de Usar la Plataforma</h2>
        <ul className="space-y-4">
          <li>🔍 <strong>Desarrolla habilidades críticas:</strong> Mejora tu capacidad lógica y analítica.</li>
          <li>🎮 <strong>Aprendizaje basado en juegos:</strong> Aprende de forma divertida y efectiva.</li>
          <li>📱 <strong>Accesible desde cualquier dispositivo:</strong> Compatible con móviles y escritorio.</li>
        </ul>
      </section>

      {/* Próximas características */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Próximas Características</h2>
        <p>En el futuro, se incluirán funcionalidades como perfiles de usuario, seguimiento de progreso y tablas de líderes.</p>
      </section>

      {/* Retroalimentación */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Retroalimentación</h2>
        <p>¿Qué te gustaría ver en esta plataforma? <Link to="/feedback" className="text-blue-600 hover:underline">¡Compártenos tu opinión aquí!</Link></p>
      </section>

      {/* Llamado a la acción */}
      <div className="text-center mt-8">
        <button 
          onClick={handleRandomGame} 
          className="px-6 py-3 bg-green-600 text-white rounded-full text-lg hover:bg-green-700"
        >
          Comienza a Desafiar tu Mente
        </button>
      </div>
    </div>
  );
}

export default Home;

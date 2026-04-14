// Página principal - Home
import "./Home.css";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

// Array de personas para la tabla
const personas = [
  { nombre: 'Carlos', apellido: 'Garcia', edad: 15 },
  { nombre: 'Ana', apellido: 'Lopez', edad: 28 },
  { nombre: 'Luis', apellido: 'Medina', edad: 22 },
  { nombre: 'Maria', apellido: 'Hernandez', edad: 17 },
  { nombre: 'Pedro', apellido: 'Ramirez', edad: 35 },
  { nombre: 'Sofia', apellido: 'Torres', edad: 19 },
];

function Home() {
  return (
    <div className="home-container">
      {/* Sección Hero */}
      <section className="home-hero">
        <h1 className="home-title">
          Bienvenido a <span className="highlight">Mi App React</span>
        </h1>
        <p className="home-subtitle">
          Una aplicación creada con React + Vite y React Router para navegar
          entre páginas sin recargar el navegador.
        </p>
      </section>

      {/* Sección de características */}
      <section className="home-features">
        <div className="feature-card">
          <span className="feature-icon">⚡</span>
          <h3>Rápido</h3>
          <p>Construido con Vite para una experiencia de desarrollo ultra rápida.</p>
        </div>
        <div className="feature-card">
          <span className="feature-icon">🔀</span>
          <h3>Navegación SPA</h3>
          <p>React Router permite navegar sin recargar la página completa.</p>
        </div>
        <div className="feature-card">
          <span className="feature-icon">🎨</span>
          <h3>Moderno</h3>
          <p>Diseño moderno con componentes reutilizables y código limpio.</p>
        </div>
      </section>

      {/* Tabla de personas (del código original) */}
      <section className="home-tabla">
        <h2 className="tabla-titulo">Tabla de Personas</h2>
        <TableContainer component={Paper} sx={{ 
          background: 'rgba(255, 255, 255, 0.05)', 
          borderRadius: '16px',
          border: '1px solid rgba(255, 255, 255, 0.08)',
        }}>
          <Table sx={{ minWidth: 500 }} aria-label="tabla de personas">
            <TableHead>
              <TableRow>
                <TableCell sx={{ color: '#e94560', fontWeight: 700, borderColor: 'rgba(255,255,255,0.08)' }}>Nombre</TableCell>
                <TableCell sx={{ color: '#e94560', fontWeight: 700, borderColor: 'rgba(255,255,255,0.08)' }}>Apellido</TableCell>
                <TableCell sx={{ color: '#e94560', fontWeight: 700, borderColor: 'rgba(255,255,255,0.08)' }}>Edad</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {personas.map((persona, index) => (
                <TableRow key={index}>
                  <TableCell sx={{ color: '#a8b2d1', borderColor: 'rgba(255,255,255,0.05)' }}>{persona.nombre}</TableCell>
                  <TableCell sx={{ color: '#a8b2d1', borderColor: 'rgba(255,255,255,0.05)' }}>{persona.apellido}</TableCell>
                  <TableCell sx={{ color: '#a8b2d1', borderColor: 'rgba(255,255,255,0.05)' }}>{persona.edad}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </section>
    </div>
  );
}

export default Home;

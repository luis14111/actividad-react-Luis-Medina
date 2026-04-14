// Componente principal - Define las rutas de la aplicación
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Acerca from "./pages/Acerca";
import Contacto from "./pages/Contacto";

function App() {
  return (
    <>
      {/* Barra de navegación siempre visible */}
      <Navbar />

      {/* Definición de rutas - no hay recarga de página al navegar */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/acerca" element={<Acerca />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </>
  );
}

export default App;

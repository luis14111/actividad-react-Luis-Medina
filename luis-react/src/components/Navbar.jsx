// Componente de navegación - usa NavLink para resaltar la ruta activa
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <span className="navbar-logo">⚛️</span>
        <span className="navbar-title">Luis Fernando</span>
      </div>
      <ul className="navbar-links">
        <li>
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
          >
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/acerca"
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
          >
            Acerca de mí
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contacto"
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
          >
            Contacto
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/usuarios"
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
          >
            Usuarios
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

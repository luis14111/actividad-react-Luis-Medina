// Página "Acerca de mí" - Información obtenida desde el contexto AlumnoContext
import "./Acerca.css";
import fotoPerfil from "../assets/foto.jpeg";
import { useAlumnoContext } from "../context/AlumnoContext";

function Acerca() {
  const { alumno } = useAlumnoContext();

  return (
    <div className="acerca-container">
      <div className="acerca-card">
        {/* Foto de perfil */}
        <div className="acerca-avatar">
          <img
            src={fotoPerfil}
            alt="Foto de perfil"
            className="avatar-img"
          />
        </div>

        {/* Información personal desde el contexto */}
        <h1 className="acerca-nombre">{alumno.nombre}</h1>
        <p className="acerca-carrera">{alumno.carrera}</p>
        <p className="acerca-grupo-semestre">
          Grupo: <strong>{alumno.grupo}</strong> &nbsp;|&nbsp; Semestre: <strong>{alumno.semestre}</strong>
        </p>
        <p className="acerca-bio">
          Soy estudiante de la facultad de informatica mazatlan y me gusta el desarrollo web y la tecnología.
          Me interesa crear aplicaciones modernas y funcionales que resuelvan
          problemas reales. Actualmente estoy aprendiendo React y otras
          tecnologías del ecosistema frontend.
        </p>

        {/* Habilidades */}
        <div className="acerca-seccion">
          <h3>Habilidades</h3>
          <div className="skills-grid">
            <span className="skill-badge">HTML</span>
            <span className="skill-badge">CSS</span>
            <span className="skill-badge">JavaScript</span>
            <span className="skill-badge">React</span>
            <span className="skill-badge">Git</span>
          </div>
        </div>

        {/* Intereses */}
        <div className="acerca-seccion">
          <h3>Intereses</h3>
          <ul className="intereses-lista">
            <li>🌐 Desarrollo Web</li>
            <li>📱 Aplicaciones Móviles</li>
            <li>🤖 Inteligencia Artificial</li>
            <li>🎮 Videojuegos</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Acerca;

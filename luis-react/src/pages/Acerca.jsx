// Página "Acerca de mí" - Información personal de ejemplo
import "./Acerca.css";
import fotoPerfil from "../assets/foto.jpeg";

function Acerca() {
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

        {/* Información personal */}
        <h1 className="acerca-nombre">Luis Fernando Medina Lizarraga</h1>
        <p className="acerca-carrera">Licenciatura en Ingeniería en Sistemas de la Informacion</p>
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

import { useAlumnoContext } from "../context/AlumnoContext";

// Componente que muestra un resumen del perfil del alumno usando useContext
function PerfilResumen() {
  const { alumno } = useAlumnoContext();

  return (
    <div className="perfil-resumen">
      <h2>👤 Resumen del Perfil</h2>
      <p>
        <strong>{alumno.nombre}</strong> — {alumno.carrera}
      </p>
      <p>
        Grupo: <strong>{alumno.grupo}</strong> | Semestre:{" "}
        <strong>{alumno.semestre}</strong>
      </p>
    </div>
  );
}

export default PerfilResumen;

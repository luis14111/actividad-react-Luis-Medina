import { createContext, useContext, useState } from "react";

// Se crea el contexto para la información del alumno
const AlumnoContext = createContext();

export function AlumnoProvider({ children }) {
  const [alumno] = useState({
    nombre: "Luis Fernando Medina Lizarraga",
    carrera: "Licenciatura en Ingenieria en Sistemas de la Informacion",
    grupo: "4-1",
    semestre: "8 semestre",
  });

  return (
    <AlumnoContext.Provider value={{ alumno }}>
      {children}
    </AlumnoContext.Provider>
  );
}

// Hook personalizado para consumir el contexto fácilmente
export function useAlumnoContext() {
  return useContext(AlumnoContext);
}

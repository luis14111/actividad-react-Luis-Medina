import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { AlumnoProvider } from './context/AlumnoContext'

// Se envuelve App con BrowserRouter y AlumnoProvider para habilitar el enrutamiento
// y el acceso al contexto del alumno desde cualquier componente
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AlumnoProvider>
        <App />
      </AlumnoProvider>
    </BrowserRouter>
  </StrictMode>,
)

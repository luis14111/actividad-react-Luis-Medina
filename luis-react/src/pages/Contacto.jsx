// Página de Contacto - Formulario de ejemplo
import { useState } from "react";
import "./Contacto.css";

function Contacto() {
  // Estado para los campos del formulario
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const [enviado, setEnviado] = useState(false);

  // Manejar cambios en los inputs
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Manejar envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos del formulario:", formData);
    setEnviado(true);
    // Resetear después de 3 segundos
    setTimeout(() => {
      setEnviado(false);
      setFormData({ nombre: "", email: "", mensaje: "" });
    }, 3000);
  };

  return (
    <div className="contacto-container">
      <div className="contacto-card">
        <h1 className="contacto-titulo">Contacto</h1>
        <p className="contacto-descripcion">
          ¿Tienes alguna pregunta o quieres ponerte en contacto? 
          Completa el formulario y te responderé lo antes posible.
        </p>

        {/* Mensaje de éxito */}
        {enviado && (
          <div className="contacto-exito">
            ✅ ¡Mensaje enviado correctamente! Gracias por contactarme.
          </div>
        )}

        {/* Formulario */}
        <form onSubmit={handleSubmit} className="contacto-form">
          <div className="form-grupo">
            <label htmlFor="nombre">Nombre</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              placeholder="Tu nombre completo"
              required
            />
          </div>

          <div className="form-grupo">
            <label htmlFor="email">Correo electrónico</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="ejemplo@correo.com"
              required
            />
          </div>

          <div className="form-grupo">
            <label htmlFor="mensaje">Mensaje</label>
            <textarea
              id="mensaje"
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              placeholder="Escribe tu mensaje aquí..."
              rows="5"
              required
            />
          </div>

          <button type="submit" className="contacto-btn">
            Enviar mensaje
          </button>
        </form>

        {/* Información adicional */}
        <div className="contacto-info">
          <div className="info-item">
            <span className="info-icon">📧</span>
            <span>lm8555567@gmail.com</span>
          </div>
          <div className="info-item">
            <span className="info-icon">📍</span>
            <span>Mazatlan Sinaloa, México</span>
          </div>
          <div className="info-item">
            <span className="info-icon">📱</span>
            <span>+52 669 327 2665</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacto;

// Hook para manejar estado
import { useState } from "react";

// Componentes de Google Maps para React
import {
  GoogleMap,
  Marker,
  DirectionsRenderer,
  useJsApiLoader,
} from "@react-google-maps/api";

import "./RutaGoogleMaps.css";

// Coordenadas del punto de inicio: FIMAZ
const origen = {
  lat: 23.23156418615661,
  lng: -106.42652057583466,
};

// Coordenadas del destino: Plazuela Machado
const destino = {
  lat: 23.1986,
  lng: -106.4211,
};

// Estilo del mapa
const containerStyle = {
  width: "100%",
  height: "500px",
};

export default function RutaGoogleMaps() {
  // Estado donde guardamos la ruta
  const [directions, setDirections] = useState(null);
  const [travelMode, setTravelMode] = useState("DRIVING");

  // Carga de la API de Google Maps
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    libraries: ["routes", "places"], // Necesario para DirectionsService
  });

  // Función para calcular la ruta
  const calcularRuta = () => {
    // Validar que la API esté disponible
    if (!window.google || !window.google.maps) {
      console.error("Google Maps API no está disponible");
      alert("Error: Google Maps API no está cargada");
      return;
    }

    // Servicio de rutas de Google
    const directionsService = new window.google.maps.DirectionsService();

    directionsService.route(
      {
        origin: origen, // Punto inicial (FIMAZ)
        destination: destino, // Punto final (Machado)

        // Tipo de transporte
        travelMode: window.google.maps.TravelMode[travelMode],
      },
      (result, status) => {
        if (status === "OK") {
          // Guardamos la ruta
          setDirections(result);
          console.log("Ruta calculada exitosamente");
        } else {
          console.error("Error al calcular la ruta:", status);
          alert(`Error al calcular la ruta: ${status}`);
        }
      }
    );
  };

  // Mientras carga el mapa
  if (!isLoaded) return <p className="ruta-loading">Cargando mapa...</p>;

  return (
    <div className="ruta-container">
      <div className="ruta-header">
        <h1 className="ruta-titulo">🗺️ Ruta de FIMAZ a Plazuela Machado</h1>
        <p className="ruta-subtitulo">
          Esta vista muestra una ruta utilizando Google Maps y Directions API.
        </p>
      </div>

      {/* Controles para generar la ruta y cambiar transporte */}
      <div className="ruta-controls">
        <select 
          value={travelMode} 
          onChange={(e) => setTravelMode(e.target.value)}
          className="ruta-select"
        >
          <option value="DRIVING">Automóvil</option>
          <option value="WALKING">A pie</option>
          <option value="BICYCLING">Bicicleta</option>
        </select>
        <button onClick={calcularRuta} className="ruta-btn">
          📍 Calcular ruta
        </button>
      </div>

      {/* Mapa */}
      <div className="ruta-mapa-wrapper">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={origen}
          zoom={13}
        >
          {/* Marcador origen */}
          <Marker position={origen} label="FIMAZ" />

          {/* Marcador destino */}
          <Marker position={destino} label="Machado" />

          {/* Render de la ruta */}
          {directions && <DirectionsRenderer directions={directions} />}
        </GoogleMap>
      </div>

      {/* Info cards */}
      <div className="ruta-info-cards">
        <div className="ruta-info-card">
          <span className="ruta-info-icon">🏫</span>
          <h3>Origen — FIMAZ</h3>
          <p>Facultad de Informática Mazatlán, punto de partida de la ruta.</p>
        </div>
        <div className="ruta-info-card">
          <span className="ruta-info-icon">🏛️</span>
          <h3>Destino — Plazuela Machado</h3>
          <p>Icónica plaza en el centro histórico de Mazatlán.</p>
        </div>
        <div className="ruta-info-card">
          <span className="ruta-info-icon">
            {travelMode === "DRIVING" ? "🚗" : travelMode === "WALKING" ? "🚶" : "🚴"}
          </span>
          <h3>Modo de transporte</h3>
          <p>
            La ruta se calcula en modo{" "}
            {travelMode === "DRIVING"
              ? "Automóvil"
              : travelMode === "WALKING"
              ? "A pie"
              : "Bicicleta"}
            .
          </p>
        </div>
      </div>
    </div>
  );
}

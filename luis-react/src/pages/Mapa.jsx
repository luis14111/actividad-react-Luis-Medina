// Página del Mapa - Muestra Google Maps con un marcador en Mazatlán
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { useState } from 'react';
import './Mapa.css';

const containerStyle = {
  width: '100%',
  height: '500px'
};

// Coordenadas de Mazatlán, Sinaloa
const center = {
  lat: 23.2494,
  lng: -106.4111
};

function Mapa() {
  const [mostrarInfo, setMostrarInfo] = useState(false);

  return (
    <div className="mapa-container">
      <div className="mapa-header">
        <h1 className="mapa-titulo">📍 Mapa Interactivo</h1>
        <p className="mapa-subtitulo">Mazatlán, Sinaloa — Haz clic en el marcador para más información</p>
      </div>

      <div className="mapa-wrapper">
        <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={13}
            options={{
              styles: [
                { elementType: 'geometry', stylers: [{ color: '#1a1a2e' }] },
                { elementType: 'labels.text.stroke', stylers: [{ color: '#1a1a2e' }] },
                { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
                { featureType: 'water', elementType: 'geometry', stylers: [{ color: '#17263c' }] },
                { featureType: 'road', elementType: 'geometry', stylers: [{ color: '#38414e' }] },
                { featureType: 'road', elementType: 'geometry.stroke', stylers: [{ color: '#212a37' }] },
                { featureType: 'poi', elementType: 'geometry', stylers: [{ color: '#263c3f' }] },
              ]
            }}
          >
            <Marker
              position={center}
              onClick={() => setMostrarInfo(true)}
            />

            {mostrarInfo && (
              <InfoWindow
                position={center}
                onCloseClick={() => setMostrarInfo(false)}
              >
                <div className="info-window">
                  <h3>📍 Mazatlán, Sinaloa</h3>
                  <p>Conocida como "La Perla del Pacífico"</p>
                  <p><strong>Lat:</strong> 23.2494 | <strong>Lng:</strong> -106.4111</p>
                </div>
              </InfoWindow>
            )}
          </GoogleMap>
        </LoadScript>
      </div>

      <div className="mapa-info-cards">
        <div className="info-card">
          <span className="info-icon">🌊</span>
          <h3>Ciudad Costera</h3>
          <p>Mazatlán es famosa por sus hermosas playas en el Pacífico mexicano.</p>
        </div>
        <div className="info-card">
          <span className="info-icon">🗺️</span>
          <h3>Instrucciones</h3>
          <p>Haz clic en el marcador rojo del mapa para ver la información del lugar.</p>
        </div>
        <div className="info-card">
          <span className="info-icon">📌</span>
          <h3>Coordenadas</h3>
          <p>Latitud: 23.2494 N<br />Longitud: 106.4111 O</p>
        </div>
      </div>
    </div>
  );
}

export default Mapa;

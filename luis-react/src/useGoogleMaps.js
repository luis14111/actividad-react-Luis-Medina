// Hook compartido para cargar Google Maps API una sola vez
// con todas las libraries necesarias para todos los componentes
import { useJsApiLoader } from "@react-google-maps/api";

const libraries = ["drawing", "routes", "places"];

export function useGoogleMaps() {
  return useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    libraries,
  });
}

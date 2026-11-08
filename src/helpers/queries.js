const API_URL = import.meta.env.VITE_API_URL;

// Prueba de conexión con el back (GET /api)
export const probarConexion = async () => {
  try {
    const respuesta = await fetch(API_URL);
    if (!respuesta.ok) throw new Error(`Error ${respuesta.status}`);
    return await respuesta.json();
  } catch (error) {
    console.error("No se pudo conectar con el back:", error);
    return null;
  }
};

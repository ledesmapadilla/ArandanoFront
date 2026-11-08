import { useEffect, useState } from "react";
import { Container, Alert, Spinner } from "react-bootstrap";
import { probarConexion } from "../../helpers/queries";

const Inicio = () => {
  const [estado, setEstado] = useState({ cargando: true, mensaje: null });

  useEffect(() => {
    probarConexion().then((datos) =>
      setEstado({ cargando: false, mensaje: datos?.message ?? null }),
    );
  }, []);

  return (
    <Container className="my-4">
      <h1>Inicio</h1>
      {estado.cargando ? (
        <Spinner animation="border" />
      ) : estado.mensaje ? (
        <Alert variant="success">Back conectado: {estado.mensaje}</Alert>
      ) : (
        <Alert variant="danger">No se pudo conectar con el back.</Alert>
      )}
    </Container>
  );
};

export default Inicio;

import { useEffect, useState } from "react";
import { Container, Spinner } from "react-bootstrap";
import { probarConexion } from "../../helpers/queries";
import { COLORES, pagina } from "../../helpers/estilos";

const Inicio = () => {
  const [estado, setEstado] = useState({ cargando: true, mensaje: null });

  useEffect(() => {
    probarConexion().then((datos) =>
      setEstado({ cargando: false, mensaje: datos?.message ?? null }),
    );
  }, []);

  return (
    <div style={pagina}>
      <Container fluid className="px-3 py-2 d-flex flex-column flex-grow-1">
        <div className="d-flex align-items-center gap-2 mb-2 flex-wrap">
          <span className="fw-bold" style={{ color: COLORES.verde, fontSize: "1.05rem" }}>
            Inicio
          </span>
          {estado.cargando ? (
            <Spinner animation="border" size="sm" variant="secondary" />
          ) : (
            <span
              className="px-2 py-1 rounded-3"
              style={{
                fontSize: "0.76rem",
                fontWeight: 600,
                backgroundColor: estado.mensaje ? COLORES.verdeClaro : "#fee2e2",
                color: estado.mensaje ? COLORES.verde : COLORES.rojo,
              }}
            >
              {estado.mensaje ? `Back conectado: ${estado.mensaje}` : "Sin conexión con el back"}
            </span>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Inicio;

import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { COLORES, pagina } from "../../helpers/estilos";

const Error404 = () => {
  return (
    <div style={pagina}>
      <Container className="my-5 text-center">
        <div className="fw-bold" style={{ color: COLORES.verde, fontSize: "3rem" }}>
          404
        </div>
        <p style={{ color: COLORES.gris }}>La página que buscás no existe.</p>
        <Link
          to="/"
          className="btn btn-sm rounded-3 px-3"
          style={{ backgroundColor: COLORES.verde, color: "#fff", fontSize: "0.82rem" }}
        >
          <i className="bi bi-house-door-fill me-1"></i>
          Volver al inicio
        </Link>
      </Container>
    </div>
  );
};

export default Error404;

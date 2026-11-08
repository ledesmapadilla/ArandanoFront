import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <Container className="my-5 text-center">
      <h1 className="display-1">404</h1>
      <p>La página que buscás no existe.</p>
      <Button as={Link} to="/" variant="primary">
        Volver al inicio
      </Button>
    </Container>
  );
};

export default Error404;

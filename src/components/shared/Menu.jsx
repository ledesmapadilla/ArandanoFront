import { useNavigate } from "react-router-dom";
import LogoNavbar from "./LogoNavbar";

// Navbar con el mismo formato que los de sección del Tablero
// (NavbarProduccion): verde oscuro, 54px, identidad a la izquierda, logo al
// centro y Volver / Inicio a la derecha.
function Menu() {
  const navigate = useNavigate();

  return (
    <div
      className="d-flex align-items-center justify-content-between px-4 py-2 border-bottom shadow-sm flex-shrink-0"
      style={{
        backgroundColor: "#1b4332",
        color: "#fff",
        height: "54px",
        position: "relative",
        zIndex: 30,
      }}
    >
      <LogoNavbar />

      {/* Lado izquierdo: identidad */}
      <div
        className="d-flex align-items-center gap-2"
        role="button"
        onClick={() => navigate("/")}
        style={{ cursor: "pointer" }}
      >
        <div
          className="rounded-3 d-flex align-items-center justify-content-center"
          style={{
            width: "34px",
            height: "34px",
            backgroundColor: "#10b981",
            color: "#fff",
            fontSize: "1.15rem",
            boxShadow: "0 2px 8px rgba(16, 185, 129, 0.3)",
          }}
        >
          <i className="bi bi-flower1"></i>
        </div>
        <span className="text-white fw-semibold">Arándano</span>
      </div>

      {/* Lado derecho: navegación */}
      <div className="d-flex align-items-center gap-2">
        <button
          onClick={() => navigate(-1)}
          className="btn btn-sm btn-outline-light d-flex align-items-center gap-1 rounded-3 px-3 py-1"
          style={{ fontSize: "0.82rem" }}
        >
          <i className="bi bi-arrow-left"></i>
          <span>Volver</span>
        </button>

        <button
          onClick={() => navigate("/")}
          className="btn btn-sm btn-light text-dark d-flex align-items-center gap-1 rounded-3 px-3 py-1"
          style={{ fontSize: "0.82rem" }}
        >
          <i className="bi bi-house-door-fill"></i>
          <span>Inicio</span>
        </button>
      </div>
    </div>
  );
}

export default Menu;

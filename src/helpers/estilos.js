// Estilos de tabla y paleta, iguales a los del Tablero La Martina.
// Ver docs/formato-tablas.md antes de armar una tabla nueva.

export const COLORES = {
  verde: "#1b4332", // encabezados, títulos, borde de la fila total
  verdeMedio: "#2d6a4f",
  verdeClaro: "#e8f5ee", // chips de período, fila total
  hover: "#dcefe4",
  cebra: "#f1f5f4",
  fondoPagina: "#f8f9fa",
  borde: "#cbd5e1",
  bordeCelda: "#e2e8f0",
  texto: "#1e293b",
  gris: "#64748b",
  vacio: "#cbd5e1", // raya de dato que falta
  rojo: "#dc2626", // filtro activo, borrar
  excel: "#15803d",
  oscuro: "#1e293b", // botones de SweetAlert
};

// Celda de encabezado.
export const th = {
  backgroundColor: COLORES.verde,
  color: "#fff",
  fontSize: "0.66rem",
  fontWeight: 600,
  verticalAlign: "middle",
  padding: "3px 5px",
  whiteSpace: "nowrap",
};

// Celda común.
export const td = { fontSize: "0.7rem", padding: "1px 5px", verticalAlign: "middle" };

// Marco de la tabla: fondo blanco, sombra, scroll adentro del marco.
// Usar con className="shadow-sm rounded-3 bg-white".
export const marco = {
  flex: "1 1 auto",
  minHeight: 0,
  alignSelf: "center",
  maxWidth: "100%",
  overflowY: "auto",
  overflowX: "auto",
  border: `1px solid ${COLORES.borde}`,
};

// Encabezado fijo para la tabla que ocupa el alto de la pantalla.
export const theadFijo = {
  position: "sticky",
  top: 0,
  zIndex: 10,
  backgroundColor: COLORES.verde,
  color: "#fff",
};

// Subtítulo de unidad dentro de un th.
export const subtituloTh = { fontSize: "0.6rem", fontWeight: 400, opacity: 0.75 };

// Contenedor de página: ocupa el alto y el scroll queda en la tabla.
export const pagina = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  backgroundColor: COLORES.fondoPagina,
  height: "100%",
  overflow: "hidden",
};

// Chip del período al lado del título.
export const chipPeriodo = {
  fontSize: "0.76rem",
  backgroundColor: COLORES.verdeClaro,
  color: COLORES.verde,
  fontWeight: 600,
};

// Botón de Excel.
export const botonExcel = {
  backgroundColor: COLORES.excel,
  borderColor: COLORES.excel,
  fontSize: "0.78rem",
  height: "30px",
  fontWeight: 600,
};

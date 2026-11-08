# Formato de las tablas de Arándano

Es el mismo formato del Tablero La Martina (`TableroFront/docs/formato-tablas.md`).
Cuando se arma una tabla nueva se copia de acá, no se inventan estilos.

Diferencia con el Tablero: allá los objetos `th`/`td` y el `FiltroSelect` están
copiados en cada pantalla; acá están una sola vez:

- `src/helpers/estilos.js` → `COLORES`, `th`, `td`, `marco`, `theadFijo`,
  `subtituloTh`, `pagina`, `chipPeriodo`, `botonExcel`.
- `src/components/shared/FiltroSelect.jsx` → filtro con rótulo, rojo activo y cruz.
- `src/components/shared/SelectBuscador.jsx` → desplegables largos (busca con `include`).

## Paleta

| Uso | Color |
| --- | --- |
| Encabezado de tabla, títulos, navbar | `#1b4332` |
| Chip de período, fila total | `#e8f5ee` |
| Hover de fila | `#dcefe4` |
| Cebra | `#f1f5f4` |
| Fondo de página | `#f8f9fa` |
| Borde marco / celda | `#cbd5e1` / `#e2e8f0` |
| Texto | `#1e293b` |
| Filtro activo / borrar | `#dc2626` |
| Botón Excel | `#15803d` |
| Botones de SweetAlert | `#1e293b` (cancelar `#64748b`) |

## 1. La clase `tabla-informe`

```jsx
<Table className="mb-0 tabla-informe" style={{ width: "auto", minWidth: "820px" }}>
```

Trae borde, padding fino, cebra, hover, `fila-total`, `fila-editando` y
`fila-provisoria` (todo en `src/index.css`). La fila de total **tiene que**
llevar `className="fila-total"`.

## 2. Celdas

```jsx
import { th, td } from "../../helpers/estilos";
<th style={{ ...th, textAlign: "center" }}>Kilos</th>
<td style={td}>{nombre}</td>
```

- Texto a la izquierda; números, fechas y códigos centrados.
- Dato que falta: `<span style={{ color: "#cbd5e1" }}>—</span>`, nunca un cero.
- Unidad dentro del `th`: `<div style={subtituloTh}>kg</div>`.

## 3. Fila de total

```jsx
<tr className="fila-total">
  <td style={{ ...td, fontWeight: 700, color: "#1b4332" }}>TOTAL</td>
  <td style={{ ...td, textAlign: "center", fontWeight: 700 }}>{numero(total)}</td>
</tr>
```

## 4. Marco

```jsx
<div className="shadow-sm rounded-3 bg-white" style={marco}>
  <Table className="mb-0 tabla-informe">
    <thead style={theadFijo}>…</thead>
```

## 5. Fila vacía

```jsx
<td colSpan={N} className="text-center text-muted py-4" style={td}>
  {cargando ? "Cargando…" : hayFiltro ? "Nada coincide con los filtros" : "No hay … cargados"}
</td>
```

## 6. Barra de filtros

```jsx
<Card className="mb-3 p-2 shadow-sm border-0 rounded-3">
  <div className="d-flex align-items-center gap-3 flex-wrap">
    <FiltroSelect etiqueta="Lote" ancho="150px" valor={lote} vacio="Todos"
      onChange={setLote} opciones={lotes} />
  </div>
</Card>
```

Las opciones salen de todos los datos del período, no de lo ya filtrado.

## 7. Página y encabezado

```jsx
<div style={pagina}>
  <Container fluid className="px-3 py-2 d-flex flex-column flex-grow-1" style={{ overflow: "hidden" }}>
    <div className="d-flex align-items-center gap-2 mb-2 flex-wrap">
      <span className="fw-bold" style={{ color: "#1b4332", fontSize: "1.05rem" }}>Título</span>
      <span className="px-2 py-1 rounded-3" style={chipPeriodo}>01/11 al 30/11</span>
      <Button size="sm" className="rounded-3 px-3 d-flex align-items-center gap-2 ms-auto" style={botonExcel}>
        <i className="bi bi-file-earmark-excel-fill"></i><span>Excel</span>
      </Button>
    </div>
    …
```

El Volver está en el navbar (`components/shared/Menu.jsx`).

## 8. Excel

Título combinado arriba, línea de período, encabezado con fondo `FF1B4332` y
letra blanca, bordes `FFE2E8F0`, anchos en `ws.columns`, importes con
`numFmt: '"$"#,##0.00'`. (Hace falta `exceljs`: `npm i exceljs`.)

## SweetAlert

Ver `docs/formato-sweetalert.md` (copia del Tablero).

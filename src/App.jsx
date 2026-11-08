import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./components/shared/Menu";
import Footer from "./components/shared/Footer";
import Inicio from "./components/pages/Inicio";
import Error404 from "./components/pages/Error404";

// Mismo layout que el Tablero: navbar arriba, main que ocupa el alto y
// scrollea, footer abajo (clases en index.css).
function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <div className="layout-right">
          <Menu />
          <main>
            <Routes>
              <Route path="/" element={<Inicio />} />
              <Route path="*" element={<Error404 />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

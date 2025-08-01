import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Registro from "./pages/Registro";
import Libros from "./pages/Libros";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/registro" element={<Registro />} />
        <Route path="/libros" element={<Libros />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

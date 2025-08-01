import { useState } from "react";

import FormularioLibro from "../components/FormularioLibro";
import ListaLibros from "../components/ListaLibros";

export default function Registro() {
  const [LibroEditar, setLibroEditar] = useState(null);
  return (
    <div>
      <h2>Registrar libro</h2>
      <FormularioLibro
        LibroEditar={LibroEditar}
        limpiarEdicion={() => setLibroEditar(null)}
      />
      <h3>Libros ingresados</h3>
      <ListaLibros onEditar={setLibroEditar} />
    </div>
  );
}

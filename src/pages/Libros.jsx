import { useContext, useEffect } from "react";
import { LibrosContext } from "../context/LibrosContext";

export default function Libros() {
  const { libros, setLibros } = useContext(LibrosContext);

  async function cargarDesdeAPI() {
    const resp = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await resp.json();
    const librosFalsos = data.map((user) => ({
      id: user.id + "-api",
      titulo: `Libro de ${user.name}`,
      autor: user.username,
    }));

    const nuevosLibros = librosFalsos.filter(
      (nuevo) =>
        !libros.some((libroExistente) => libroExistente.id === nuevo.id)
    );

    setLibros((prevLibros) => {
      const nuevosFiltrados = librosFalsos.filter(
        (nuevo) =>
          !prevLibros.some((libroExistente) => libroExistente.id === nuevo.id)
      );
      return [...prevLibros, ...nuevosFiltrados];
    });
  }

  useEffect(() => {
    cargarDesdeAPI();
  }, []);

  function eliminarTodos() {
    setLibros([]);
  }

  return (
    <div>
      <h2>Lista de Libros</h2>
      <button onClick={eliminarTodos}>Eliminar todos</button>
      <ul>
        {libros.map((libro) => (
          <li key={libro.id}>
            {libro.titulo} - {libro.autor}
          </li>
        ))}
      </ul>
    </div>
  );
}

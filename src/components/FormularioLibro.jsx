import styles from "./FormularioLibro.module.css";
import { useState, useContext, useEffect } from "react";
import { LibrosContext } from "../context/LibrosContext";

export default function FormularioLibro({ libroEditar, limpiarEdicion }) {
  const { libros, setLibros } = useContext(LibrosContext);
  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");

  useEffect(() => {
    if (libroEditar) {
      setTitulo(libroEditar.titulo);
      setAutor(libroEditar.autor);
    } else {
      setTitulo("");
      setAutor("");
    }
  }, [libroEditar]);

  function handleSubmit(e) {
    e.preventDefault();
    if (!titulo.trim() || !autor.trim()) return;

    if (libroEditar) {
      setLibros(
        libros.map((l) =>
          l.id === libroEditar.id ? { ...l, titulo, autor } : l
        )
      );
      limpiarEdicion();
    } else {
      setLibros([...libros, { id: Date.now(), titulo, autor }]);
    }
    setTitulo("");
    setAutor("");
  }

  function limpiar() {
    setTitulo("");
    setAutor("");
    if (libroEditar) limpiarEdicion();
  }

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit}>
      <input
        placeholder="Título"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
        className={styles.input}
      />
      <input
        placeholder="Autor"
        value={autor}
        onChange={(e) => setAutor(e.target.value)}
        className={styles.input}
      />
      <div className={styles.buttonGroup}>
        <button type="submit">
          {libroEditar ? "Editar" : "Guardar"} libro
        </button>
        <button type="button" onClick={limpiar}>
          Limpiar
        </button>
      </div>
    </form>
  );
}

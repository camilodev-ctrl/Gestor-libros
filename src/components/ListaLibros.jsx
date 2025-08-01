// ListaLibros.jsx
import styles from "./ListaLibros.module.css";
import { useContext } from "react";
import { LibrosContext } from "../context/LibrosContext";

export default function ListaLibros({ onEditar }) {
  const { libros } = useContext(LibrosContext);

  if (libros.length === 0)
    return <p className={styles.vacio}>No hay libros registrados.</p>;

  return (
    <div className={styles.librosList}>
      {libros.map((libro) => (
        <div
          key={libro.id}
          className={styles.libroItem}
          onClick={() => onEditar && onEditar(libro)}
          role="button"
          tabIndex={0}
          onKeyPress={(e) => {
            if (e.key === "Enter") onEditar(libro);
          }}>
          <span className={styles.libroTitulo}>{libro.titulo}</span>
          <span className={styles.libroAutor}>{libro.autor}</span>
        </div>
      ))}
    </div>
  );
}

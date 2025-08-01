import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link className={styles.link} to="/registro">
        Registrar Libro
      </Link>
      <Link className={styles.link} to="/libros">
        Lista de Libros
      </Link>
    </nav>
  );
}

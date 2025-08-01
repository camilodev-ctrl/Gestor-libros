import { createContext, useState } from "react";
export const LibrosContext = createContext();

export function LibrosProvider({ children }) {
  const [libros, setLibros] = useState([]);
  return (
    <LibrosContext.Provider value={{ libros, setLibros }}>
      {children}
    </LibrosContext.Provider>
  );
}

import { createContext } from "react";

const contexto = createContext();
const Provider = contexto.Provider;

const CustomProvider = ({ children }) => {
  const valorDelContexto = {
    carrito: [],
    totalProductos: 0,
  };

  return <Provider value={valorDelContexto}>{children}</Provider>;
};

export default CustomProvider;

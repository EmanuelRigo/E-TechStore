import { createContext, useContext, useState } from "react";

export const contexto = createContext();
const Provider = contexto.Provider;

export const useCart = () => {
  const valorDelContexto = useContext(contexto);
  return valorDelContexto;
};

const CustomProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);
  const [totalProductos, setTotalProductos] = useState(10);
  const [navBarCategory, setNavbarCategory] = useState([]);

  const navbarCategoryFunction = (item) => {
    setNavbarCategory(item);
  };

  const sumaredad = () => {
    setTotalProductos(totalProductos + 1);
  };

  const restaredad = () => {
    setTotalProductos(totalProductos - 1);
  };

  const valorDelContexto = {
    carrito: carrito,
    totalProductos: totalProductos,
    sumaredad: sumaredad,
    restaredad: restaredad,
    navbarCategoryFunction: navbarCategoryFunction,
    navBarCategory: navBarCategory,
  };

  console.log(navBarCategory);

  return <Provider value={valorDelContexto}>{children}</Provider>;
};

export default CustomProvider;

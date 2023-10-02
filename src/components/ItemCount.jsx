import React, { useState } from "react";
import { useCarrito } from "./CustomProvider";
import { contexto } from "./CustomProvider";
import { useContext } from "react";
import { Link } from "react-router-dom";

function ItemCount({ product }) {
  const [contador, setContador] = useState(0);

  const { agregarProducto, addProduct, calcularTotal, total } =
    useContext(contexto);

  const handleSumar = () => {
    if (contador < 20) {
      setContador(contador + 1);
    }
  };

  const handleRestar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  const handleConfirmar = () => {
    agregarProducto(contador, product);
    addProduct(contador, product);
    calcularTotal();
    console.log(total);
  };

  return (
    <div>
      <h1>Contador: {contador}</h1>
      <button onClick={handleSumar}>+</button>
      <button onClick={handleRestar}>-</button>
      <Link
        to={"/item/" + product.id + "/confirmAddition"}
        onClick={handleConfirmar}
      >
        agregar a carrito{" "}
      </Link>
    </div>
  );
}

export default ItemCount;

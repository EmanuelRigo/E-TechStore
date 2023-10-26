import React, { useEffect, useState } from "react";
import { useCarrito } from "./CustomProvider";
import { contexto } from "./CustomProvider";
import { useContext } from "react";
import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";

function ItemCount({ product }) {
  const [contador, setContador] = useState(1);

  const { agregarProducto, addProduct, calcularTotal, total, carrito } =
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
  };

  return (
    <div>
      <Button onClick={handleSumar} variant="success">
        +
      </Button>
      <h1>Cantidad: {contador}</h1>
      <Button onClick={handleRestar} variant="success">
        -
      </Button>

      <Link
        to={"/item/" + product.id + "/confirmAddition"}
        onClick={handleConfirmar}
      >
        agregar a carrito
      </Link>
    </div>
  );
}

export default ItemCount;

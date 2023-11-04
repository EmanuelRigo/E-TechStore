import React, { useEffect, useState } from "react";
import { useCarrito } from "./CustomProvider";
import { contexto } from "./CustomProvider";
import { useContext } from "react";
import { Link } from "react-router-dom";

import { AiOutlineLine, AiOutlinePlus } from "react-icons/ai";

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
    <>
      <div className="container mt-4 rounded itemCount">
        <div className="row">
          <Link
            to={"/item/" + product.id + "/confirmAddition"}
            onClick={handleConfirmar}
            className="btn"
          >
            agrega {contador} al carrito
          </Link>
        </div>
        <div className="row">
          <button type="button" onClick={handleSumar} class="btn col ">
            <AiOutlinePlus />
          </button>

          <button type="button" onClick={handleRestar} class="btn col ">
            <AiOutlineLine />
          </button>
        </div>
      </div>
    </>
  );
}

export default ItemCount;

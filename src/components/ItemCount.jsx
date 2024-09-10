import React, { useState } from "react";

import { contexto } from "./CustomProvider";
import { useContext } from "react";
import { Link } from "react-router-dom";

import { AiOutlineLine, AiOutlinePlus } from "react-icons/ai";

function ItemCount({ product }) {
  const [contador, setContador] = useState(1);

  const { agregarProducto, addProduct } = useContext(contexto);

  const handleSumar = () => {
    if (contador < product.stock) {
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
    <div className="container mt-4 rounded itemCount">
      <div className="row">
        <Link
          to={"/item/" + product.id + "/confirmAddition"}
          onClick={handleConfirmar}
          className="btn"
        >
          Agrega {contador} al carrito
        </Link>
      </div>
      <div className="row">
        <button type="button" onClick={handleSumar} className="btn col ">
          <AiOutlinePlus />
        </button>

        <button type="button" onClick={handleRestar} className="btn col ">
          <AiOutlineLine />
        </button>
      </div>
    </div>
  );
}

export default ItemCount;

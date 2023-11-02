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
    <>
      <div className="container rounded my-container bg-verde-neon">
        <div className="row">
          <div className="col-lg-10">
            <Link
              to={"/item/" + product.id + "/confirmAddition"}
              onClick={handleConfirmar}
            >
              <button className="btn btn-verde-neon  h-100 w-100 h5">
                agrega {contador} al carrito
              </button>
            </Link>
          </div>
          <div className="col-lg-2">
            <div className="row">
              <button
                type="button"
                onClick={handleSumar}
                class="btn btn-suma-resta btn-verde-neon"
              >
                +
              </button>
            </div>
            <div className="row">
              <button
                type="button"
                onClick={handleRestar}
                class="btn btn-suma-resta btn-verde-neon "
              >
                -
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemCount;

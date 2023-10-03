import React from "react";
import { useContext, useEffect } from "react";
import { contexto } from "./CustomProvider";

function ConfirmAddition() {
  const { productAdded, calcularTotal, carrito } = useContext(contexto);

  return (
    <div>
      <h2>Los productos se agregaron al carrito</h2>
      {productAdded.title} {}
      {productAdded.contador} <button>ir a carrito</button>
    </div>
  );
}

export default ConfirmAddition;

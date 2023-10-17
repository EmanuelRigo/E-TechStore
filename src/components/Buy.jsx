import React from "react";
import { useContext } from "react";
import { contexto } from "./CustomProvider";

function Buy() {
  const { cliente } = useContext(contexto);

  return (
    <>
      <p>{`gracias por la compra ${cliente.datosEnvio.name}`}</p>
      <p>
        {`los ${cliente.compras.length} productos llegaran en RANDOM dias`}{" "}
      </p>
    </>
  );
}

export default Buy;

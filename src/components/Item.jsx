import React from "react";
import { Link, useParams } from "react-router-dom";
import { contexto } from "./CustomProvider";
import { useContext } from "react";

function Item({ producto }) {
  const { sumaredad, restaredad } = useContext(contexto);
  return (
    <div>
      <Link to={"/item/" + producto.id}>{producto.title}</Link>
      <p>{producto.price}</p>
      <h2> {producto.category.name} </h2>
      <button>agregar a carrito</button>
      <button onClick={sumaredad}>sumar</button>
      <button onClick={restaredad}>restar</button>
    </div>
  );
}

export default Item;

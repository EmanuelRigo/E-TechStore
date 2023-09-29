import React from "react";
import { Link, useParams } from "react-router-dom";
import { contexto } from "./CustomProvider";
import { useContext } from "react";

function Item({ producto }) {
  const { sumaredad, restaredad } = useContext(contexto);
  return (
    <div>
      <p>{producto.price}</p>
      <h4> {producto.category.name} </h4>
      <h2>{producto.title} </h2>
      <Link to={"/item/" + producto.id}>ver mas</Link>
    </div>
  );
}

export default Item;

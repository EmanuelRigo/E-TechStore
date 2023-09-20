import React from "react";
import { Link, useParams } from "react-router-dom";

function Item({ producto }) {
  return (
    <div>
      <Link to={"/item/" + producto.id}>{producto.title}</Link>
      <p>{producto.price}</p>
      <button>agregar a carrito</button>
    </div>
  );
}

export default Item;

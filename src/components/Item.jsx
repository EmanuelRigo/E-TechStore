import React from "react";
import { Link } from "react-router-dom";

function Item() {
  return (
    <div>
      <Link to={"/productos/producto.id"}>ITEM BOTON</Link>
    </div>
  );
}

export default Item;

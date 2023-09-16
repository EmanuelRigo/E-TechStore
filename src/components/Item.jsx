import React from "react";
import { Link } from "react-router-dom";

function Item({ producto }) {
  return (
    <div>
      <Link to={"/productos/producto.id"}>{producto.title}</Link>
    </div>
  );
}

export default Item;

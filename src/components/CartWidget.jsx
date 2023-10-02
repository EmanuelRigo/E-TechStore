import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useCart } from "./CustomProvider";
import { useContext } from "react";
import { contexto } from "./CustomProvider";

function CartWidget() {
  const { totalProductos, total } = useCart();
  const valorDelContexto = useContext(contexto);

  return (
    <Link to="/cart">
      <div>{total} </div>
      <AiOutlineShoppingCart className="navbar__cart"></AiOutlineShoppingCart>
    </Link>
  );
}

export default CartWidget;

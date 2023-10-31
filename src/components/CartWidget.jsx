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
    <Link to="/cart" className="cart">
      <div className="circleCart">
        <p>{total}</p>
      </div>
      <AiOutlineShoppingCart className="navbar__cart mx-2"></AiOutlineShoppingCart>
    </Link>
  );
}

export default CartWidget;

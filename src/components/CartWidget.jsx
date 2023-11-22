import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useCart } from "./CustomProvider";

import Badge from "react-bootstrap/Badge";

function CartWidget() {
  const { total } = useCart();

  return (
    <Link to="/cart" className="cart">
      <Badge
        pill
        bg="danger"
        className="position-absolute top-0 start-100 translate-middle"
      >
        {total}
      </Badge>
      <AiOutlineShoppingCart className="navbar__cart mx-2"></AiOutlineShoppingCart>
    </Link>
  );
}

export default CartWidget;

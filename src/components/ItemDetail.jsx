import React from "react";

function ItemDetail({ product }) {
  console.log(product);
  return (
    <div>
      <h2>item details</h2>
      <h3>{product.title} </h3>
      <h2>{product.price} </h2>
    </div>
  );
}

export default ItemDetail;

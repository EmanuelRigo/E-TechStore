import React from "react";

function ItemDetail({ product }) {
  console.log(product);
  return (
    <div>
      <h1>hola</h1>
      <h2>itemdetsails</h2>
      <h3>{product.id} </h3>
    </div>
  );
}

export default ItemDetail;

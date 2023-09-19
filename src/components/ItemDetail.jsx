import React from "react";

function ItemDetail(product) {
  console.log(product);
  return (
    <div>
      <h1>{product.title} </h1>
      <h2>itemdetail</h2>
    </div>
  );
}

export default ItemDetail;

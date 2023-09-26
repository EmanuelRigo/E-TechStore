import React from "react";
import ItemCount from "./ItemCount";

function ItemDetail({ product }) {
  const onAdd = (parametro) => {
    console.log(parametro);
  };

  return (
    <div>
      <h2>item details </h2>
      <h3>{product.title} </h3>
      <h2>{product.price} </h2>
      <ItemCount onAdd={onAdd}></ItemCount>
    </div>
  );
}

export default ItemDetail;

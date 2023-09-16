import React from "react";
import { Link } from "react-router-dom";
import Item from "./Item";

function ItemList({ book }) {
  console.log(book);
  return (
    <div>
      {book.map((item) => {
        return <Item producto={item} key={item.id}></Item>;
      })}
    </div>
  );
}

export default ItemList;

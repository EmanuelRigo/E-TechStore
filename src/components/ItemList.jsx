import React from "react";
import { Link, useParams } from "react-router-dom";
import Item from "./Item";

function ItemList({ book }) {
  const props = useParams();

  return (
    <div>
      {book.map((item) => {
        return <Item producto={item} key={item.id}></Item>;
      })}
    </div>
  );
}

export default ItemList;

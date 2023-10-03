import React from "react";
import { Link, useParams } from "react-router-dom";
import Item from "./Item";
import { contexto } from "./CustomProvider"; //
import { useContext } from "react"; //

function ItemList({ book }) {
  const { bookdata } = useContext(contexto);

  return (
    <div>
      {bookdata.map((item) => {
        return <Item producto={item} key={item.id}></Item>;
      })}
    </div>
  );
}

export default ItemList;

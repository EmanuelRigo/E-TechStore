import React from "react";
import { Link, useParams } from "react-router-dom";
import Item from "./Item";
import { contexto } from "./CustomProvider"; //
import { useContext } from "react"; //

function ItemList() {
  const { bookdata, paramsFunction, setCategory } = useContext(contexto);

  const parametro = useParams();
  paramsFunction(parametro);

  return (
    <div>
      {bookdata.map((item) => {
        return <Item producto={item} key={item.id}></Item>;
      })}
    </div>
  );
}

export default ItemList;

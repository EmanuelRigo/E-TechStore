import React, { useState } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import Item from "./Item";
import { contexto } from "./CustomProvider"; //
import { useContext } from "react"; //

function ItemList() {
  const { bookdata, paramsFunction, setCategory, setValorBusqueda } =
    useContext(contexto);

  //////

  const { categoria } = useParams();
  const { search } = useLocation();
  const params = new URLSearchParams(search);

  const busqueda = params.get("busqueda");
  setValorBusqueda(busqueda);

  //////

  const parametro = useParams();

  paramsFunction(parametro);

  return (
    <div>
      <div>
        <h1>Categoría: {categoria}</h1>
        {busqueda ? (
          <p>Búsqueda: {busqueda}</p>
        ) : (
          <p>No hay término de búsqueda.</p>
        )}
        {/* Resto de tu componente */}
      </div>
      {bookdata.map((item) => {
        return <Item producto={item} key={item.id}></Item>;
      })}
    </div>
  );
}

export default ItemList;

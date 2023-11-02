import React, { useState, useEffect } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import Item from "./Item";
import Heroes from "./Heroes";
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

  //////HEROES//////////////

  const ordenRandom = Math.floor(Math.random() * bookdata.length);

  const itemFound = bookdata[ordenRandom];

  const primerosDoceElementos = bookdata.slice(0, 12);
  //////////////////////////////////////

  return (
    <>
      {categoria ? null : <Heroes itemFound={itemFound}></Heroes>}
      <div>
        {categoria ? <h2>{categoria} </h2> : null}

        {busqueda ? <p>resultados con: {busqueda}</p> : null}
      </div>
      <div className="">
        <div className="container-lg px-0">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3">
            {primerosDoceElementos.map((item) => {
              return (
                <div className="col">
                  <Item producto={item} key={item.id}></Item>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/*  <div className="container">
        <div>
          {categoria ? <h2>{categoria} </h2> : null}

          {busqueda ? <p>resultados con: {busqueda}</p> : null}
        </div>
        <div className="grid-container">
          {bookdata.map((item) => {
            return <Item producto={item} key={item.id}></Item>;
          })}
        </div>
      </div> */}
    </>
  );
}

export default ItemList;

import React from "react";
import { contexto } from "./CustomProvider";
import { useContext } from "react";

import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import ItemList from "./ItemList";

function ItemListContainer() {
  const { navbarCategoryFunction } = useContext(contexto);
  const [bookdata, setBookdata] = useState([]);

  const { categoria } = useParams();

  const category = useParams();

  useEffect(() => {
    axios
      .get("https://api.escuelajs.co/api/v1/products")
      .then((res) => {
        if (categoria) {
          const filtrado = res.data.filter(
            (product) => product.category.name === categoria
          );

          setBookdata(filtrado);
          navbarCategoryFunction(res.data);
        } else {
          setBookdata(res.data);
          navbarCategoryFunction(res.data);
        }
      })

      .catch((err) => console.log(err));
  }, [category]);

  return (
    <div>
      <ItemList book={bookdata}></ItemList>
    </div>
  );
}

export default ItemListContainer;

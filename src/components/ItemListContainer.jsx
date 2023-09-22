import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import ItemList from "./ItemList";
import Navbarbookshop from "./Navbarbookshop";

function ItemListContainer() {
  const [bookdata, setBookdata] = useState([]);
  const [navBarCategory, setNavbarCategory] = useState([]);
  const [filteredBookdata, setFilteredBookdata] = useState([]);
  const [categoriaFromParams, setCategoriaFromParams] = useState(null);

  const { categoria } = useParams();
  const category = useParams();

  useEffect(() => {
    setCategoriaFromParams(categoria);
    axios
      .get("https://api.escuelajs.co/api/v1/products")
      .then((res) => {
        if (categoria) {
          console.log(categoria);
          const filtrado = res.data.filter(
            (product) => product.category.name === categoria
          );
          console.log(filtrado);
          setBookdata(filtrado);
          console.log(bookdata);
          setNavbarCategory(res.data);
        } else {
          setBookdata(res.data);

          console.log(bookdata);
        }
      })

      .catch((err) => console.log(err));
  }, [category]);

  return (
    <div>
      <Navbarbookshop products={navBarCategory}></Navbarbookshop>
      <ItemList book={bookdata}></ItemList>
    </div>
  );
}

export default ItemListContainer;

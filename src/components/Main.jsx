import React, { useEffect, useState } from "react";
import axios from "axios";

import ItemListContainer from "./ItemListContainer";
import Item from "./Item";
import Cart from "./Cart";

import { Routes, Route } from "react-router-dom";

function Main() {
  const [search, setSearch] = useState(""); //usamos esto para la brra de busqueda
  const [bookdata, setBookdata] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setBookdata(res.data))
      .then(console.log(bookdata))
      .catch((err) => console.log(err));
  }, []);

  return (
    <main>
      <Routes>
        <Route path="/cart" element={<Cart></Cart>}></Route>
        <Route
          path="/"
          element={<ItemListContainer book={bookdata}></ItemListContainer>}
        ></Route>
      </Routes>
    </main>
  );
}

export default Main;

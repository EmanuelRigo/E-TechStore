import React, { useEffect, useState } from "react";
import axios from "axios";

import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer";
import Item from "./Item";
import Cart from "./Cart";
import ItemDetail from "./ItemDetail";

import { Routes, Route, useParams } from "react-router-dom";

function Main() {
  const [search, setSearch] = useState(""); //usamos esto para la brra de busqueda

  return (
    <main>
      <Routes>
        <Route path="/cart" element={<Cart></Cart>}></Route>
        <Route
          path="/"
          element={<ItemListContainer></ItemListContainer>}
        ></Route>
        <Route
          path="/categoria/:categoria"
          element={<ItemListContainer></ItemListContainer>}
        ></Route>
        <Route
          path="/item/:id"
          element={<ItemDetailContainer></ItemDetailContainer>}
        ></Route>
      </Routes>
    </main>
  );
}

export default Main;

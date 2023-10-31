import React, { useEffect, useState } from "react";
import axios from "axios";

import ItemListContainer from "./ItemListContainer";
import ItemList from "./ItemList";
import ItemDetailContainer from "./ItemDetailContainer";
import Item from "./Item";
import Cart from "./Cart";
import ItemDetail from "./ItemDetail";
import ConfirmAddition from "./ConfirmAddition";

import { Routes, Route, useParams } from "react-router-dom";
import ConfirmAddress from "./ConfirmAddress";
import ConfirmPay from "./ConfirmPay";
import ShowDetails from "./ShowDetails";
import Buy from "./Buy";

function Main() {
  const [search, setSearch] = useState(""); //usamos esto para la brra de busqueda

  return (
    <main className="bg-violeta-personalizado">
      <Routes>
        <Route path="/cart" element={<Cart></Cart>}></Route>
        <Route
          path="/confirmAddress"
          element={<ConfirmAddress></ConfirmAddress>}
        ></Route>
        <Route path="/confirmPay" element={<ConfirmPay></ConfirmPay>}></Route>
        <Route
          path="/showDetails"
          element={<ShowDetails></ShowDetails>}
        ></Route>
        <Route path="/buy" element={<Buy></Buy>}></Route>
        <Route path="/" element={<ItemList></ItemList>}></Route>
        <Route
          path="/categoria/:categoria"
          element={<ItemList></ItemList>}
        ></Route>

        <Route
          path="/item/:id"
          element={<ItemDetailContainer></ItemDetailContainer>}
        ></Route>
        <Route
          path="/item/:id/confirmAddition"
          element={<ConfirmAddition></ConfirmAddition>}
        ></Route>
      </Routes>
    </main>
  );
}

export default Main;

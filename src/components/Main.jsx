import ItemList from "./ItemList";
import ItemDetailContainer from "./ItemDetailContainer";

import Cart from "./Cart";

import ConfirmAddition from "./ConfirmAddition";

import { Routes, Route } from "react-router-dom";
import ConfirmAddress from "./ConfirmAddress";
import ConfirmPay from "./ConfirmPay";
import ShowDetails from "./ShowDetails";
import Buy from "./Buy";
import SalesList from "./SalesList";
import Favorites from "./Favorites";

function Main() {
  return (
    <main className="bg-violeta-personalizado">
      <Routes>
        <Route path="/cart" element={<Cart></Cart>}></Route>
        <Route path="/compras" element={<SalesList></SalesList>}></Route>
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
        <Route path="/favoritos" element={<Favorites></Favorites>}></Route>
      </Routes>
    </main>
  );
}

export default Main;

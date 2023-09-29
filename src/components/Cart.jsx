import React from "react";
import { contexto } from "./CustomProvider";
import { useContext } from "react";

function Cart() {
  const { carrito, eliminarProducto, vaciarCarrito, totalCarrito } =
    useContext(contexto);

  const handleClick = (id) => () => eliminarProducto(id);
  console.log(carrito);
  return (
    <>
      {carrito.map((item) => {
        return (
          <div key={item.id}>
            <div className="card">
              <div className="card-image">
                <h3>imagen</h3>
              </div>
              <div className="card-text">
                <h2> {item.title} </h2>
              </div>
              <div className="detalles">
                <p> {item.precio} </p>
                <p>{item.cantidad} </p>
                <button onClick={handleClick(item.id)}>eliminar</button>
              </div>
            </div>
          </div>
        );
      })}
      <button onClick={vaciarCarrito}>vaciar carrito</button>
    </>
  );
}

export default Cart;

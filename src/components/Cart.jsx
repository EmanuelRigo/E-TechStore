import React, { useEffect } from "react";
import { contexto } from "./CustomProvider";
import { useContext } from "react";

function Cart() {
  const {
    carrito,
    eliminarProducto,
    vaciarCarrito,
    totalCarrito,
    incrementarCantidad,
    calcularTotal,
    total,
  } = useContext(contexto);

  console.log(total);

  useEffect(() => {
    calcularTotal();
    console.log(calcularTotal());
  }, [carrito]);

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
                <p> {item.price} </p>
                <p>{item.updatedAt} </p>
                <button onClick={() => incrementarCantidad(item.id)}>
                  Sumar
                </button>
                {/*                 <button onClick={() => decrementarCantidad(item.id)}>
                  Restar
                </button> */}
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

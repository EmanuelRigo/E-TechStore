import React from "react";

function Cart() {
  const handleClick = (e) => {
    console.log(e.target);
  };

  const handleChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <div>
      <h3>CART</h3>
      <input type="text" onChange={handleChange} />
      <button onClick={handleClick}>Terminar compra</button>
    </div>
  );
}

export default Cart;

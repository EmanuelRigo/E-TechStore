import React, { useState } from "react";

function ItemCount({ onAdd }) {
  const [contador, setContador] = useState(0);

  const handleSumar = () => {
    setContador(contador + 1);
  };

  const handleRestar = () => {
    setContador(contador - 1);
  };

  const handleConfirmar = () => {
    onAdd(contador);
  };

  return (
    <div>
      <h1>Contador: {contador}</h1>
      <button onClick={handleSumar}>+</button>
      <button onClick={handleRestar}>-</button>
      <button onClick={handleConfirmar}>confirmar</button>
    </div>
  );
}

export default ItemCount;

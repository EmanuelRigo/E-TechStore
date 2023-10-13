import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { contexto } from "./CustomProvider";

function ConfirmPay() {
  const { cliente, setPayInfo } = useContext(contexto);
  console.log(cliente);

  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumer] = useState("");
  const [cardCode, setCardCode] = useState("");

  const [linkHabilitado, setLinkHabilitado] = useState(false);

  class PayClient {
    constructor(cardName, cardNumber, cardCode) {
      this.cardName = cardName;
      this.cardNumber = cardNumber;
      this.cardCode = cardCode;
    }
  }

  console.log(linkHabilitado);

  const payData = new PayClient(cardName, cardNumber, cardCode);

  const handleContinue = () => {
    if (cardName && cardNumber && cardCode) {
      setPayInfo(payData);
      setLinkHabilitado(true);
    } else {
      alert("Por favor, complete todos los campos obligatorios.");
    }
  };

  return (
    <div>
      <h3>Confirm Pay</h3>
      <div>
        <p>nombre de tarjeta</p>
        <input
          type="text"
          placeholder="nombre"
          value={cardName}
          onChange={(e) => setCardName(e.target.value)}
        />
        <p>numero de tarjetra</p>
        <input
          type="text"
          placeholder="numero de tarjeta"
          value={cardNumber}
          onChange={(e) => setCardNumer(e.target.value)}
        />
        <p>codigo</p>
        <input
          type="text"
          placeholder="codigo de tarjeta"
          value={cardCode}
          onChange={(e) => setCardCode(e.target.value)}
        />
        <button onClick={handleContinue}>confirmar</button>
      </div>
      <Link to={linkHabilitado ? "/showDetails" : "#"}>continuar</Link>
    </div>
  );
}

export default ConfirmPay;

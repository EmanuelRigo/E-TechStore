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
    console.log(cliente);
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
      <div class="container mt-4 d-flex justify-content-center main">
        <div class="card">
          <div class="d-flex justify-content-between px-3 pt-4">
            <span class="pay">Pay amount</span>
            <div class="amount">
              <div class="inner">
                <span class="dollar">$</span>
                <span class="total">999</span>
              </div>
            </div>
          </div>
          <div class="px-3 pt-3">
            <label for="card number" class="d-flex justify-content-between">
              <span class="labeltxt">CARD NUMBER</span>
              <img src="download (4).png" width="25" class="image" />
            </label>
            <input
              type="number"
              name="number"
              class="form-control inputtxt"
              placeholder="8881 2545 2545 2245"
            />
          </div>
          <div class="d-flex justify-content-between px-3 pt-4">
            <div>
              <label for="date" class="exptxt">
                Expiry
              </label>
              <input
                type="number"
                name="number"
                class="form-control expiry"
                placeholder="MM / YY"
              />
            </div>
            <div>
              <label for="cvv" class="cvvtxt">
                CVV /CVC
              </label>
              <input
                type="number"
                name="number"
                class="form-control cvv"
                placeholder="123"
              />
            </div>
          </div>
          <div class="d-flex align-items-center justify-content-between px-3 py-4">
            <div>
              <button type="button" class="btn cancel">
                Cancel
              </button>
            </div>
            <div>
              <button type="button" class="btn payment">
                Make Payment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConfirmPay;

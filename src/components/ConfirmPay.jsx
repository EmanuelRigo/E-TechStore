import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { contexto } from "./CustomProvider";
import { Button } from "react-bootstrap";

function ConfirmPay() {
  const { cliente, setPayInfo, totalVentas } = useContext(contexto);
  console.log(cliente);

  const [cardExpiry, setCardExpiry] = useState("");
  const [cardNumber, setCardNumer] = useState("");
  const [cardCode, setCardCode] = useState("");

  const [linkHabilitado, setLinkHabilitado] = useState(false);

  console.log(linkHabilitado);

  const payData = {
    cardExpiry: cardExpiry,
    cardNumber: cardNumber,
    cardCode: cardCode,
  };

  const navigate = useNavigate();

  const handleContinue = (e) => {
    if (cardExpiry && cardNumber && cardCode) {
      setPayInfo(payData);
      setLinkHabilitado(true);
      navigate("/showDetails");
    } else {
      alert("Por favor, complete todos los campos obligatorios.");
    }
    console.log(cliente);
  };

  return (
    <div>
      <h3>Confirm Pay</h3>
      <div class="container mt-4 d-flex justify-content-center main">
        <div class="card">
          <div class="d-flex justify-content-between px-3 pt-4">
            <span class="pay">Total a pagar</span>
            <div class="amount">
              <div class="inner">
                <span class="dollar">$</span>
                <span class="total">{totalVentas} </span>
              </div>
            </div>
          </div>
          <div class="px-3 pt-3">
            <label for="card number" class="d-flex justify-content-between">
              <span class="labeltxt">CARD NUMBER</span>
              <img
                src="../images/download (4).png"
                alt="card"
                width="25"
                class="image"
              />
            </label>
            <input
              type="number"
              name="number"
              class="form-control inputtxt"
              placeholder="8881 2545 2545 2245"
              value={cardNumber}
              onChange={(e) => setCardNumer(e.target.value)}
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
                value={cardExpiry}
                onChange={(e) => setCardExpiry(e.target.value)}
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
                value={cardCode}
                onChange={(e) => setCardCode(e.target.value)}
              />
            </div>
          </div>
          <div class="d-flex align-items-center justify-content-between px-3 py-4">
            <div>
              <Button onClick={handleContinue}>continuar</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConfirmPay;

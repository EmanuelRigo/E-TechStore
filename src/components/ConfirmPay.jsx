import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { contexto } from "./CustomProvider";
import {
  Button,
  Container,
  Card,
  Row,
  Col,
  FloatingLabel,
  Form,
} from "react-bootstrap";

function ConfirmPay() {
  const { cliente, setPayInfo, totalVentas } = useContext(contexto);

  const [cardExpiryMonth, setCardExpiryMonth] = useState("");
  const [cardExpiryYear, setCardExpiryYear] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardCode, setCardCode] = useState("");

  const [linkHabilitado, setLinkHabilitado] = useState(false);

  /////

  const handleCardNumberChange = (e) => {
    let inputWithoutSpaces = e.target.value.replace(/\D/g, "").slice(0, 16);

    let formattedInput = inputWithoutSpaces.replace(/(.{4})/g, "$1 ");

    if (
      (e.nativeEvent.inputType === "deleteContentBackward" &&
        formattedInput.charAt(formattedInput.length - 1) === " ") ||
      (e.nativeEvent.inputType === "insertText" &&
        formattedInput.length > 0 &&
        formattedInput.charAt(formattedInput.length - 1) === " ")
    ) {
      formattedInput = formattedInput.slice(0, -1);
    }

    setCardNumber(formattedInput);
  };
  /////


  ////

  const handleCardCodeChange = (e) => {
    const inputValue = e.target.value;

    if (inputValue.length <= 3) {
      setCardCode(inputValue);
    } else {
      setCardCode(inputValue.substring(0, 3));
    }
  };

  ////

  const payData = {
    cardExpiryMonth: cardExpiryMonth,
    cardExpiryYear: cardExpiryYear,
    cardNumber: cardNumber,
    cardCode: cardCode,
  };

  const navigate = useNavigate();

  const handleContinue = (e) => {
    if (cardExpiryYear && cardNumber && cardCode && cardExpiryMonth) {
      setPayInfo(payData);
      setLinkHabilitado(true);
      navigate("/showDetails");
    } else {
      alert("Por favor, complete todos los campos obligatorios.");
    }
    console.log(cliente);
  };

  return (
    <>
      {/*   <div class="container mt-4 d-flex justify-content-center">
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
            <label
              for="card number"
              class="d-flex justify-content-between mb-2"
            >
              <span class="labeltxt">CARD NUMBER</span>
              <img
                style={{ width: "3rem" }}
                src="../images/download (4).png"
                alt="card"
                class="image"
              />
            </label>
            <input
              type="text"
              name="number"
              className="form-control inputtxt"
              placeholder="8881 2545 2545 2245"
              value={cardNumber}
              onChange={handleCardNumberChange}
            />
          </div>
          <div class="d-flex justify-content-between px-3 pt-4">
            <div>
              <label for="date" class="exptxt">
                Expiry
              </label>

              <select class="form-control expiry" name="" id="">
                <option value="" disabled selected>
                  Selecciona un mes
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
              </select>
              <input
                type="number"
                name="number"
                class="form-control expiry"
                placeholder="Mes / Año"
                //    value={cardExpiry}
                //  onChange={(e) => setCardExpiry(e.target.value)}
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
              <Button variant="verde-neon" onClick={handleContinue}>
                continuar
              </Button>
            </div>
          </div>
        </div>
      </div> */}

      <Container>
        <Row>
          <Col className="bg-light rounded mx-auto" sm={9} md={9} lg={6}>
            <Row>
              <Col className="d-flex justify-content-between py-4">
                <span className="h4">Total a pagar</span>
                <span className="h4">${totalVentas}</span>
              </Col>
            </Row>
            <Row>
              <Col sm={8} className="d-flex justify-content-between">
                <FloatingLabel
                  controlId="floatingInputGrid"
                  label="Numero de tarjeta"
                  style={{ width: "100%" }}
                >
                  <Form.Control
                    type="text"
                    name="number"
                    className="form-control inputtxt"
                    placeholder="8881 2545 2545 2245"
                    value={cardNumber}
                    onChange={handleCardNumberChange}
                  />
                </FloatingLabel>
              </Col>
              <Col sm={4}>
                <FloatingLabel controlId="floatingInputGrid" label="CVV">
                  <Form.Control
                    type="number"
                    name="number"
                    class="form-control"
                    placeholder="123"
                    value={cardCode}
                    onChange={handleCardCodeChange}
                  />
                </FloatingLabel>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col sm={6}>
                <Form.Select
                  size="lg"
                  onChange={(e) => setCardExpiryMonth(e.target.value)}
                >
                  <option value="" disabled selected>
                    Mes de vencimiento
                  </option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                </Form.Select>
              </Col>
              <Col sm={6}>
                <Form.Select
                  size="lg"
                  onChange={(e) => setCardExpiryYear(e.target.value)}
                >
                  <option value="" disabled selected>
                    año de vencimiento
                  </option>
                  <option value="2023">2023</option>
                  <option value="2024">2024</option>
                  <option value="2025">2025</option>
                  <option value="2026">2026</option>
                  <option value="2027">2027</option>
                  <option value="2028">2028</option>
                  <option value="2029">2029</option>
                  <option value="2030">2030</option>
                </Form.Select>
              </Col>
            </Row>
            <Row className="my-3">
              <Col>
                <Button variant="verde-neon" onClick={handleContinue}>
                  continuar
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ConfirmPay;

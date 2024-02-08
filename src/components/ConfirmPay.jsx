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
import { Notify } from "notiflix";

function ConfirmPay() {
  const { setPayInfo, totalVentas } = useContext(contexto);

  const [cardExpiryMonth, setCardExpiryMonth] = useState("");
  const [cardExpiryYear, setCardExpiryYear] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardCode, setCardCode] = useState("");

  /*   const [linkHabilitado, setLinkHabilitado] = useState(false); */ //8-12-24

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
      /*   setLinkHabilitado(true); */ //8-2-24
      navigate("/showDetails");
    } else {
      Notify.failure("por favor llene todos los campos");
    }
  };

  return (
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
                  className="form-control"
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
                <option>Mes de vencimiento</option>
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
                <option>año de vencimiento</option>
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
  );
}

export default ConfirmPay;

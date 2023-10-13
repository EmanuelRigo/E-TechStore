import { useState, useContext } from "react";
import React from "react";
import { contexto } from "./CustomProvider";
import { Link } from "react-router-dom";

function ConfirmAddress() {
  const { setAddressInfo } = useContext(contexto);

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [dni, setDni] = useState("");
  const [direccion, setDireccion] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [provincia, setProvincia] = useState("");
  const [codigoPostal, setCodigoPostal] = useState("");
  const [telefono, setTelefono] = useState("");

  const [linkHabilitado, setLinkHabilitado] = useState(false);
  class AdressClient {
    constructor(name, surname, dni, address, city, country, postalCode, phone) {
      this.name = name;
      this.surname = surname;
      this.dni = dni;
      this.address = address;
      this.city = city;
      this.coutry = country;
      this.postalCode = postalCode;
      this.phone = phone;
    }
  }

  const addressData = new AdressClient(
    nombre,
    apellido,
    dni,
    direccion,
    ciudad,
    provincia,
    codigoPostal,
    telefono
  );

  const handleContinue = () => {
    if (
      nombre &&
      apellido &&
      dni &&
      direccion &&
      ciudad &&
      provincia &&
      codigoPostal &&
      telefono
    ) {
      setAddressInfo(addressData);
      setLinkHabilitado(true);
    } else {
      alert("Por favor, complete todos los campos obligatorios.");
      console.log("object");
    }
  };

  return (
    <div>
      <h3>ConfirmAddress</h3>
      <div>
        <p>quien recibe</p>
        <input
          type="text"
          placeholder="nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <input
          type="text"
          placeholder="apellido"
          value={apellido}
          onChange={(e) => setApellido(e.target.value)}
        />
        <input
          type="text"
          placeholder="dni"
          value={dni}
          onChange={(e) => setDni(e.target.value)}
        />
      </div>
      <div>
        <p>donde lo recibis?</p>
        <input
          type="text"
          placeholder="direccion"
          value={direccion}
          onChange={(e) => setDireccion(e.target.value)}
        />
        <input
          type="text"
          placeholder="ciudad"
          value={ciudad}
          onChange={(e) => setCiudad(e.target.value)}
        />
        <input
          type="text"
          placeholder="provincia"
          value={provincia}
          onChange={(e) => setProvincia(e.target.value)}
        />
        <input
          type="text"
          placeholder="codigo postal"
          value={codigoPostal}
          onChange={(e) => setCodigoPostal(e.target.value)}
        />
      </div>
      <div>
        <p>telefono</p>
        <input
          type="text"
          placeholder="telefono"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
        />
      </div>
      <Link to={linkHabilitado ? "/confirmPay" : "#"}>Continuar</Link>
      <button onClick={handleContinue}>confirmar</button>
    </div>
  );
}

export default ConfirmAddress;

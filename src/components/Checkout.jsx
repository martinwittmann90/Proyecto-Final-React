import { Button, TextField, Typography } from "@mui/material";
import Swal from "sweetalert2";
import { Box } from "@mui/system";
import { addDoc, collection } from "firebase/firestore";
import React, { useContext, useState } from "react";
import "../assets/css/index.css";
import { generalContext } from "../components/CartContext";
import { db } from "../index";
import { Link } from "react-router-dom";

const Checkout = () => {
  const { cart, pay, validateEmail, clear } =
    useContext(generalContext);
    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [dni, setDni] = useState("");
    const [city, setCity] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const [credit, setCredit] = useState("");
    const [order, setOrder] = useState("");

  const handleClickBuyButton = () => {
    const order = {
      buyer: { name, lastname, phone, email, dni, address, city ,postalCode, credit },
      item: cart,
      payment: pay,
    };

    if (name === "" || lastname === "" || phone === "" || email === "" || credit === "") {
      Swal.fire({
        icon: "error",
        title: "Datos invalidos",
        text: "Verificar la información antes de continuar",
      });
      return;
    }
    if (cart === "") {
      Swal.fire({
        icon: "error",
        title: "El carrito esta vacio",
        text: "Agregar productos para continuar",
      });
    }
    if (validateEmail(email) === false) {
      return;
    }
    const orders = collection(db, "orders");
    addDoc(orders, order).then((finishOrder) => {
      setOrder(finishOrder.id);
    });
    Swal.fire({
      position: "center",
      icon: "success",
      title:
        "Gracias por tu compra " + name,
      showConfirmButton: false,
      timer: 1000,
    });
    setTimeout(() => {
      clear();
    }, "2000");
  };
  return (
    <>
      {order === "" ? (
        <Box
          sx={{ backgroundColor: "#f9f9f9" }}
        >
          <Typography
            sx={{
              backgroundColor: "#f9f9f9",
              color: "#000",
              marginTop: 3,
              marginLeft: 3,
            }}
            variant="h5"
          >
            CARRITO DE COMPRA
            {cart.map((item) => (
              <p>
                {item.name + " " + item.price + "$ Cantidad:" + item.quantity}{" "}
              </p>
            ))}
          </Typography>
          <Typography
            sx={{
              backgroundColor: "#f9f9f9",
              color: "#000",
              marginTop: 1,
              marginLeft: 3,
            }}
          >
            Precio total: {"USD "+ pay}
          </Typography>
          <Typography sx={{ color: "#000", margin: 2 }}
          >1. IDENTIFICACIÓN DEL COMPRADOR</Typography>
      <TextField
        sx={{ color: "#000", margin: 3 }}
        required={true}
        placeholder="Nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        sx={{ color: "#000", margin: 3 }}
        required
        placeholder="Apellido"
        value={lastname}
        onChange={(e) => setLastname(e.target.value)}
      />
      <TextField
        sx={{ color: "#000", margin: 3 }}
        required
        placeholder="Telefono"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <TextField
        sx={{ color: "#000", margin: 3 }}
        required={true}
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        sx={{ color: "#000", margin: 3 }}
        required
        placeholder="DNI"
        value={Number}
        onChange={(e) => setDni(e.target.value)}
      />
      <Typography sx={{ color: "#000", margin: 2 }}
      >2. DATOS DE ENVIO</Typography>
      <TextField
        sx={{ color: "#000", margin: 3 }}
        required
        placeholder="Dirección"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <TextField
        sx={{ color: "#000", margin: 3 }}
        required
        placeholder="Ciudad"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <TextField
        sx={{ color: "#000", margin: 3 }}
        required
        placeholder="Codigo Postal"
        value={postalCode}
        onChange={(e) => setPostalCode(e.target.value)}
      />
      <Typography sx={{ color: "#000", margin: 2 }}
      >3. DATOS DE PAGO</Typography>
      <TextField
        sx={{ color: "#000", margin: 3 }}
        required
        placeholder="Tarjeta de Credito"
        value={credit}
        onChange={(e) => setCredit(e.target.value)}
      />
      <br />
          <Button
            sx={{
              backgroundColor: "#1a42c7",
              borderRadius: 2,
              margin: 3,
              "&:hover": {
                backgroundColor: "#inherit",
                color: "inherit",
              },
            }}
            variant="contained"
            onClick={handleClickBuyButton}
          >
            {" "}
            <Typography
              sx={{
                color: "#f2f4f7",
                borderRadius: 2,
                "&:hover": {
                  backgroundColor: "#inherit",
                  color: "inherit",
                },
              }}
              variant="contained"
            >
              {" "}
              COMPRAR
            </Typography>{" "}
          </Button>
        </Box>
      ) : (
        <Box>
          <Box
            sx={{ backgroundColor: "#000" }}
            className="recipe-container"
          >
            <Typography sx={{ color: "#000" }}>
              Thank you {name} for your purchase.
              <br />
              El numero de tu orden es: {order}
              <br />
              Recibiras el recibo en tu correo electrónico: {email}
              <br />
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Link to="/">
                <Button
                  sx={{
                    backgroundColor: "#000",
                    borderRadius: 2,
                    "&:hover": {
                      backgroundColor: "#000",
                      color: "inherit",
                    },
                  }}
                >
                  Volver al Inicio
                </Button>
              </Link>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};

export default Checkout;
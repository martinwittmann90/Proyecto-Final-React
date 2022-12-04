
import { Box, Button, Typography } from "@mui/material";
import React, { useContext } from "react";
import "../assets/css/index.css";
import { generalContext } from "../components/CartContext";
import ItemCart from "./ItemCart";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, clear } = useContext(generalContext);
  if (cart.length === 0) {
    return (
      <Box>
        <Typography
        sx={{
          color: "#3771b3",
          margin: 3,}}
        >No hay elementos en el carrito.</Typography>
        <Link to="/">
          <Button
            sx={{
              backgroundColor: "#3771b3",
              borderRadius: 2,
              marginLeft: 3,
              "&:hover": {
                backgroundColor: "#000",
                color: "#f9f9f9",
              },
            }}
            variant="contained"
          >
            SEGUIR COMPRANDO
          </Button>
        </Link>
      </Box>
    );
  }
  return (
    <Box>
      {cart.map((product) => (
        <ItemCart key={product.id} product={product} />
      ))}
      <br />
      <br />
      <Link to="/checkout"
        sx={{ backgroundColor: "#f9f9f9" }}
      >
        <Button
          sx={{
            backgroundColor: "#000",
            borderRadius: 2,
            "&:hover": {
              backgroundColor: "#inherit",
              color: "inherit",
            },
          }}
          variant="contained"
        >
          <Typography
            sx={{
              color: "#f9f9f9",
              "&:hover": {
                backgroundColor: "#inherit",
                color: "inherit",
              },
            }}
          >
            TERMINAR COMPRA
          </Typography>
        </Button>
      </Link>
      <br />
      <br />
      <Box className="cartStyle">
        <Box sx={{ backgroundColor: "#f9f9f9" }}>
          <Button
            sx={{
              backgroundColor: "#000",
              borderRadius: 2,
              "&:hover": {
                backgroundColor: "#inherit",
                color: "inherit",
              },
            }}
            variant="contained"
            onClick={() => {
              clear();
            }}
          >
            <Typography
              sx={{
                color: "#f9f9f9",
                "&:hover": {
                  backgroundColor: "#inherit",
                  color: "inherit",
                },
              }}
            >
              VACIAR CARRITO
            </Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Cart;
import { Button } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/ItemCount.css";
import { generalContext } from "../components/CartContext";

const ItemCount = ({ stock, initial, onAddToCart }) => {
  const { whiteMode } = useContext(generalContext);

  const [count, setCount] = useState(parseInt(initial));
  const add = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };
  const substract = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  useEffect(() => {
    setCount(parseInt(initial));
  }, [initial]);

  return (
    <div>
      <Button disabled={count <= 0} sx={{ background: "#ddd",margin: 2, cursor: "pointer" }} onClick={substract}>
        -
      </Button>
      <span>{count}</span>
      <Button
        disabled={count >= stock}
        sx={{ background: "#ddd", margin: 2 }}
        onClick={add}
      >
        +
      </Button>
      <Link sx={{ color: whiteMode ? "#0b5394" : "#f9f9f9" }}>
        <Button
          sx={{
            backgroundColor: whiteMode ? "#0b5394" : "#f9f9f9",
            borderRadius: 2,
            color: whiteMode ? "#f9f9f9" : "#0b5394",
            "&:hover": {
              backgroundColor: "inherit",
              color: "inherit",
            },
          }}
          variant="contained"
          onClick={() => {
            onAddToCart(count);
          }}
        >
          AGREGAR AL CARRITO
        </Button>
      </Link>
      <br />
      <Link to="/" sx={{ color: whiteMode ? "#0b5394" : "#f9f9f9" }}>
        <Button
          sx={{
            backgroundColor: whiteMode ? "#0b5394" : "#f9f9f9",
            borderRadius: 2,
            color: whiteMode ? "#f9f9f9" : "#0b5394",
            "&:hover": {
              backgroundColor: "inherit",
              color: "inherit",
            },
          }}
          variant="contained"
        >
          SEGUIR COMPRANDO
        </Button>
      </Link>
      <Link to="/checkout" sx={{ color: whiteMode ? "#0b5394" : "#f9f9f9" }}>
        <Button
          sx={{
            margin: 3,
            backgroundColor: whiteMode ? "#0b5394" : "#f9f9f9",
            borderRadius: 2,
            color: whiteMode ? "#f9f9f9" : "#0b5394",
            "&:hover": {
              backgroundColor: "inherit",
              color: "inherit",
            },
          }}
          variant="contained"
        >
          TERMINAR COMPRA
        </Button>
      </Link>
    </div>
  );
};

export default ItemCount;
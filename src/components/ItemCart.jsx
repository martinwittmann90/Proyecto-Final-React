import { Box, Button, Typography } from "@mui/material";
import React, { useContext } from "react";
import { generalContext } from "../components/CartContext";

const ItemCart = ({ product }) => {
  const { removeItem } = useContext(generalContext);

  const handleRemoveItem = (id) => {
    removeItem(id);
  };
  return (
    <Box
      sx={{ backgroundColor: "#f9f9f9" }}
    >
      {product.id ? (
        <Box
          sx={{ backgroundColor: "#f9f9f9" }}
          key={product.id}
        >
          <img style={{height: "200px"}} src={product.img} alt="product.name"></img>
          <Typography
            sx={{ color: "#0b5394" }}
            variant="h5"
          >
            {product.name}
          </Typography>
          <Typography sx={{ color: "#0b5394" }}>
            Talle: {JSON.stringify(product.size)}
          </Typography>
          <Typography sx={{ color: "#0b5394" }}>
            Stock: {product.stock}
          </Typography>
          <Typography sx={{ color: "#0b5394" }}>
            Precio: {"USD " + product.price}
          </Typography>
          <br />
          <Box sx={{ backgroundColor: "#f9f9f9" }}>
            <Button
              sx={{
                backgroundColor: "#0b5394",
                borderRadius: 2,
                "&:hover": {
                  backgroundColor: "#inherit",
                  color: "inherit",
                },
              }}
              variant="contained"
              onClick={() => {
                handleRemoveItem(product.id);
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
                🛒
              </Typography>
            </Button>
          </Box>
        </Box>
      ) : (
        <Box>"Cargando..."</Box>
      )}
    </Box>
  );
};

export default ItemCart;
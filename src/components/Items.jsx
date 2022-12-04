import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/index.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Item = ({ product }) => {
  return (
    <Box
      sx={{ backgroundColor: "#f9f9f9"}}
      className="contItem"
    >
      <img style={{height: "400px"}} src={product.img} alt="product.name"></img>
      <Typography sx={{ color: "#0b5394" }} variant="h5">
        {product.name}
      </Typography>
      <Typography sx={{ color: "#0b5394" }}>
        Talles: {JSON.stringify(product.size)}
      </Typography>
      <Typography sx={{ color: "#0b5394" }}>
        Stock: {product.stock}
      </Typography>
      <Typography sx={{ color: "#0b5394" }}>
        Precio: {"USD " + product.price}
      </Typography>
      <Box className="bottomDetail">
        <Link to={`/item/${product.id}`}>
          <Button
            sx={{
              backgroundColor: "#0b5394",
              borderRadius: 2,
              "&:hover": {
                backgroundColor: "#0b5394",
                color: "inherit",
              },
            }}
            variant="contained"
            id={product.id}
          >
            <Typography
              sx={{
                color: "#f9f9f9",
                "&:hover": {
                  backgroundColor: "inherit",
                  color: "inherit",
                },
              }}
            >
              {" "}
              DETALLES
            </Typography>
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default Item;
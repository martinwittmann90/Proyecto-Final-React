import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/index.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Items = ({ product }) => {
  return (
    <Box
      sx={{ backgroundColor: "#f9f9f9" }}
      className="contItem"
    >
      <img className="images" src={product.img} alt="product" />
      <Typography sx={{ color: "#0b5394" }} variant="h5">
        {product.name}
      </Typography>
      <Typography sx={{ color: "#0b5394" }}>
        {"USD " + product.price}
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
              🛒 COMPRAR
            </Typography>
          </Button>
        </Link>
      </Box>
      <Typography sx={{ color: "#0b5394", marginTop: 5 }}>
        ENVIO GRATIS
      </Typography>
    </Box>
  );
};

export default Items;
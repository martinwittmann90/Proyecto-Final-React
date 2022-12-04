import { Box, Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import React, { useContext } from "react";
import "../assets/css/index.css";
import "../assets/css/ItemCount.css";
import { generalContext } from "../components/CartContext";
import ItemCount from "./ItemCount";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';


const ItemDetail = ({ products }) => {
  const { addItem } = useContext(generalContext);

  const onAddToCart = (quantity) => {
    addItem(products, quantity);
  };

  return (
    <Box
      sx={{ backgroundColor: "#f9f9f9" }}
      className="detailContainer"
    >
      {products.id ? (
        <Box
          sx={{ backgroundColor: "#f9f9f9",}}
          className="detailCont"
          key={products.id}
        >
          <img style={{height: "400px", marginTop: 10}} src={products.img} alt="product.name"></img>
          <Typography sx={{ color: "#0b5394" }} variant="h5">
            {products.name}
          </Typography>
          <Typography sx={{ color: "#0b5394" }}>
            Talle: {JSON.stringify(products.size)}
          </Typography>
          <ButtonGroup variant="contained" aria-label="outlined primary button group">
            <Button>S</Button>
            <Button>M</Button>
            <Button>L</Button>
          </ButtonGroup>
          <Typography sx={{ color: "#0b5394" }}>
            Stock: {products.stock}
          </Typography>
          <Typography sx={{ color: "#0b5394" }}>
            Precio: {"USD " + products.price}
          </Typography>
          <Box className="box">
            <Box className="box2">
              <ItemCount initial={0} stock={10} onAddToCart={onAddToCart} />
            </Box>
          </Box>
        </Box>
      ) : (
        <CircularProgress />
      )}
    </Box>
  );
};

export default ItemDetail;
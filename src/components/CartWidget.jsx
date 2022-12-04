import React, { useContext } from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Button } from "@mui/material";
import { generalContext } from "../components/CartContext";
import { Link } from "react-router-dom";

const CartWidget = ({ quantity }) => {
  return (
    <div>
      <Link to="/cart">
        <Button
          variant="outlinedSizeSmall"
          sx={{ color: "#000" }}
          /* fullWidth={false} */
          startIcon={<ShoppingCartOutlinedIcon />}
        >
          {quantity}{" "}
        </Button>
      </Link>
    </div>
  );
};

export default CartWidget;
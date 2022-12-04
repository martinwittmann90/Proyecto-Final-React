import React, { createContext, useState, useEffect } from "react";
import Swal from "sweetalert2";

export const generalContext = createContext();

const CartContext = ({ children }) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );
  const [pay, setPay] = useState(0);

  const isInCart = (id) => {
    const pos = cart.findIndex((product) => product.id === id);
    return pos;
  };

  const addItem = (item, quantity) => {
    const pos = isInCart(item.id);
    if (pos === -1) {
      setCart([...cart, { ...item, quantity }]);
    } else {
      const cartAux = [...cart];
      cartAux[pos] = {
        ...cartAux[pos],
        quantity: cartAux[pos].quantity + quantity,
      };
      setCart(cartAux);
    }
  };

  const validateEmail = (email) => {
    const emailReg =
      /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
    if (emailReg.test(email) === false) {
      Swal.fire({
        icon: "error",
        title: "Email",
        text: "Verifica tu email",
      });
      return false;
    }
    return true;
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  });

  const clear = () => setCart([]);

  const removeItem = (id) =>
    setCart(cart.filter((product) => product.id !== id));

  useEffect(() => {
    const totalPay = cart.reduce(
      (acc, item) => acc + item.quantity * item.price,
      0
    );
    setPay(totalPay);
  }, [cart]);

  return (
    <generalContext.Provider
      value={{
        cart,
        pay,
        addItem,
        removeItem,
        clear,
        validateEmail,
      }}
    >
      {children}
    </generalContext.Provider>
  );
};

export default CartContext;
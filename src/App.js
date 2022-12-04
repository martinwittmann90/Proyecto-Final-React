import React from "react";
import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from './components/Navbar';
import Checkout from './components/Checkout';
import ItemListContainer from "./components/ItemListContainer";
import Cart from './components/Cart';
import ItemDetailContainer from "./components/ItemDetailContainer";
import CartContextComponent  from "./CartContextComponent";
import Footer from "../src/components/Footer";
import CartContext from "./components/CartContext";
import Contact from "./components/Contact";

export default function App() {
    return (
      <>
        <CartContext>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/contact" element={<Contact />} />
              <Route
                path="/category/:idCategory"
                element={<ItemListContainer />}
              />
              <Route path="/item/:iditem" element={<ItemDetailContainer />} />
              <Route path="/cart" element={<Cart />}>
                {" "}
              </Route>
            </Routes>
            <Footer />
          </BrowserRouter>
        </CartContext>
      </>
    );
  };


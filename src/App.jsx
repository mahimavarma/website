import { useState } from "react";
import "./index.css";
import ShoppingCart from "./Components/ShoppingCart"
import AssemblePC from "./Components/AssemblePC";
import Header from "./Components/Header";
import { BrowserRouter } from "react-router-dom";
import Products from "./Components/Products";
import Checkout from './Components/Checkout'

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Header />
        <Products /> */}
        {/* <ShoppingCart /> */}
        <Checkout />
        {/* <AssemblePC /> */}
      </BrowserRouter>
    </>
  );
}

export default App;

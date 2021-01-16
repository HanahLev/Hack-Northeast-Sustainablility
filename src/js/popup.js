import "../css/popup.css";
import React from "react";
import CartItem from "./popup/CartItem/CartItem.jsx";
import { render } from "react-dom";

render(
  <CartItem/>,
  window.document.getElementById("app-container")
);

import "../css/popup.css";
import React from "react";
import CartItem from "./popup/CartItem/CartItem.jsx";
import SuggestionPopup from "./popup/SuggestionPopup/SuggestionPopup.jsx";
import { render } from "react-dom";

render(
  <SuggestionPopup/>,
  window.document.getElementById("app-container")
);
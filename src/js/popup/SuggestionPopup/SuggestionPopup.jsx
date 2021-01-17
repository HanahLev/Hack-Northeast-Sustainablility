import React from "react";
import { hot } from "react-hot-loader";
import CartItem from "../CartItem/CartItem.jsx";
import SuggestionBox from "../SuggestionBox/SuggestionBox.jsx";

import "./SuggestionPopup.css"

class SuggestionPopup extends React.Component {
    render() {
        return(
            <div className="suggestion-container">
                <CartItem/>
                <div className="message">We've found some more sustainable options for you!</div>
                <SuggestionBox/>
                <a href="https://hanahlev.github.io/Hack-Northeast-Sustainablility/">Learn more</a>
            </div>
        )
    }
}

export default hot(module)(SuggestionPopup)

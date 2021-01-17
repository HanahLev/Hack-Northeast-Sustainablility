import React from "react";
import { hot } from "react-hot-loader";
import CartItem from "../CartItem/CartItem.jsx";
import "./SuggestionPopup.css"

class SuggestionPopup extends React.Component {
    render() {
        return(
            <div class="suggestion-container">
                <CartItem/>
                <div class="message">We've found some more sustainable options for you!</div>
                {/*Insert Bonnie's suggestion object here*/}
                <div class="popupmessage">Farm-Raised Atlantic Salmon Filets (32 oz)</div>
                <a href="https://hanahlev.github.io/Hack-Northeast-Sustainablility/">Learn more</a>
            </div>
        )
    }
}

export default hot(module)(SuggestionPopup)

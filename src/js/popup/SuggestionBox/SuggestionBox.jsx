import React from "react";
import { hot } from "react-hot-loader";

import "./SuggestionBox.css"

class SuggestionBox extends React.Component {

    constructor() {
        super();
        this.itemTitle = "Farm-Raised Atlantic Salmon Fillets (32 oz)";
        this.ratingDifference = "x";
        this.itemImg = require("../../../img/salmon2.jpg");
    }

    render() {
        return (
            <div className="suggestion-box-container">
                <div className="left">
                    <div className="itemTitle">{this.itemTitle}</div>
                    <div id="rating-diff">This product is {this.ratingDifference}% better</div>
                </div>
                <img src={this.itemImg} alt={`This is a picture of ${this.itemTitle}.`}></img>
            </div>
        )
    }
}

export default hot(module)(SuggestionBox)

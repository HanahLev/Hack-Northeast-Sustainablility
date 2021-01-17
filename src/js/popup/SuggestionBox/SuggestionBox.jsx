import React from "react";
import { hot } from "react-hot-loader";

class SuggestionBox extends React.Component {

    constructor() {
        super();
        this.itemTitle = "Farm-Raised Atlantic Salmon Fillets";
        this.ratingDifference = "x";
        this.itemImg = require("../../../img/salmon2.jpg");
    }

    render() {
        return (
            <div class="suggeestion-box-container">
                <div class="left">
                    <div class="item-title">{this.itemTitle}</div>
                    <div>This product is {this.ratingDifference}% better</div>
                </div>
            <img src={this.itemImg} alt={`This is a picture of ${this.itemTitle}.`}></img>
            </div>
        );
    }
}

export default hot(module)(CartItem)

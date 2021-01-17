import React from "react";
import { hot } from "react-hot-loader";

import "./CartItem.css";

class CartItem extends React.Component {

    constructor(){
        super();
        // TODO: this field will be filled by scraping the user's cart
        this.itemTitle = "Wild-Caught Sockeye Salmon Filets (32 oz)";

        // TODO: this field will be filled by accessing our database
        this.itemImg = require("../../../img/salmon1.jpeg");

        // TODO: this field will be filled by accessing our database
        // using the title of the contents of the cart
        this.rating = 13;
    }

    

    render() {
        return (
            <div className="container">
                <div className="left">
                    <div>In your cart:</div>
                    <div className="itemTitle">{this.itemTitle}</div>
                    <div>GREEN RATING: {this.rating}/20</div>
                </div>
                <img src={this.itemImg} alt={`This is a picture of ${this.itemTitle}.`}></img>
            </div>
        )
    }    
}

export default hot(module)(CartItem)

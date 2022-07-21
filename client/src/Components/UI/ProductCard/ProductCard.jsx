import React from "react";
import { Card } from "../index";
import classes from "./ProductCard.module.css";
import rs_icon from "../../../Assets/rs_icon.png";

const ProductCard = ({ image }) => {
  return (
    <div className={classes.product_card}>
      <Card width="300px" height="390px" styles>
        <div className={classes.content_container}>
          <Card width="230px" height="250px">
            <img className={classes.image} src={image} alt="product_image" />
          </Card>
          <h4 className={classes.name}>
            Demon Slayer's Hoddie Slayer's Hoddie
          </h4>
          <div className={classes.price_container}>
            <img className={classes.price_symbol} src={rs_icon} alt="rsicon" />
            <span className={classes.price}>2000</span>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ProductCard;

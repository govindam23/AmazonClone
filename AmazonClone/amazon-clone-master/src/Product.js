import React from "react";
import "./Product.css";
import StarIcon from "@mui/icons-material/Star";

export default function Product({ title, price, image, rating }) {
  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon></StarIcon>
            ))}
          <StarIcon></StarIcon>
        </div>
      </div>
      <img className="product-image" src={image}></img>
      <button>Add to Basket</button>
    </div>
  );
}

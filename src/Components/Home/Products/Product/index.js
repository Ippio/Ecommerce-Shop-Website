import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { ProductWrapper } from "./../style";

const Product = ({ product }) => {
  return (
    <ProductWrapper>
      <div className="image">
        <img src={product.image} alt="" />
      </div>
      <div className="content">
        <span className="title">{product.title}</span>
        <div className="cost">
          <span className="">{product.cost}</span>
        </div>
        <span className="info">{product.info}</span>
        <span className="info">{product.memory}</span>
      </div>
      <div className="list-btn">
        <button className="buy-now">{product.buy}</button>
        <button className="cart">
          <FontAwesomeIcon className="icon" icon={faCartPlus} />
          {product.addcart}
        </button>
      </div>
    </ProductWrapper>
  );
};

export default Product;

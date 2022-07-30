import React from "react";
import { PhoneProductWrapper } from "../style";
import Product from "./../Product";

const PhoneProduct = ({ listProduct }) => {
  return (
    <PhoneProductWrapper>
        <div className="title">
            <h3 className="">Điện thoại nổi bật</h3>
            <span className=""><a href="#">Xem tất cả</a></span>
        </div>
        <div className="list-product">
            {listProduct.slice(0,8).map((item) => {
            return <Product product={item} />
            })}
        </div>
    </PhoneProductWrapper>
  );
};

export default PhoneProduct;

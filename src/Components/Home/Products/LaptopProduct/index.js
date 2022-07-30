import React from "react";
import { LaptopProductWrapper } from "../style";
import Product from "./../Product";

const LaptopProduct = ({ listProduct }) => {
  return (
    <LaptopProductWrapper>
        <div className="title">
            <h3 className="">Laptop bán chạy</h3>
            <span className=""><a href="#">Xem tất cả</a></span>
        </div>
        <div className="list-product">
            {listProduct.slice(8,16).map((item) => {
            return <Product product={item} />
            })}
        </div>
    </LaptopProductWrapper>
  );
};

export default LaptopProduct;
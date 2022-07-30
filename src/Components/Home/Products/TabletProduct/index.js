import React from "react";
import { TabletProductWrapper } from "../style";
import Product from "./../Product";

const TabletProduct = ({ listProduct }) => {
  return (
    <TabletProductWrapper>
        <div className="title">
            <h3 className="">Tablet bán chạy</h3>
            <span className=""><a href="#">Xem tất cả</a></span>
        </div>
        <div className="list-product">
            {listProduct.slice(16,20).map((item) => {
            return <Product product={item} />
            })}
        </div>
    </TabletProductWrapper>
  );
};

export default TabletProduct;
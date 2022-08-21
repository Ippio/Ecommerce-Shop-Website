import React from "react";
import { TabletProductWrapper } from "../style";
import Product from "./../Product";
import { Link } from "react-router-dom";

const TabletProduct = ({ listProduct }) => {
  return (
    <TabletProductWrapper>
      <div className="title">
        <h3 className="">Tablet bán chạy</h3>
        <span className="">
          <Link to="/product">Xem tất cả</Link>
        </span>
      </div>
      <div className="list-product">
        {listProduct?.ipad?.map((item) => {
          return <Product key={item._id} product={item}/>;
        })}
      </div>
    </TabletProductWrapper>
  );
};

export default TabletProduct;

import React from "react";
import { ProductWrapper } from "./../style";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const image =
    "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/";
  return (
    <ProductWrapper>
      <div>
        <Link className="link" to={`/product/${product._id}`}>
          <div className="image">
            <img src={image.concat(product.urlPicture)} alt="" />
          </div>
        </Link>
        <div className="content">
          <Link className="link" to={`/product/${product._id}`}>
            <span className="title">{product.nameExt}</span>
          </Link>
        </div>
        <div className="">
          {/* <Memory
        product={product}
        currentIndexActive={currentIndexActive}
        onChangeTab={handleChangeTab}
      >
        {renderTabContent()}
      </Memory> */}
        </div>
        <div className="list-btn">
          <Link to="/cart">
            {/* <button onClick={() => onAdd(product)} className="buy-now">
              Mua ngay
            </button> */}
          </Link>
          {/* <button className="cart" onClick={() => onAdd(product)}>
            <FontAwesomeIcon className="icon" icon={faCartPlus} />
            Giỏ hàng
          </button> */}
        </div>
      </div>
    </ProductWrapper>
  );
};

export default Product;

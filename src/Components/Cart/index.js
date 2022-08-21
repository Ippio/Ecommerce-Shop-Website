import React, { useState, useEffect } from "react";
import { CartWrapper } from "./style";
import Header from "./../Home/Header";
import Navigation from "./../Home/Navigation";
import Footer from "./../Home/Footer";
import Copyright from "./../Home/Copyright";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import Input from "./../Common/Input";
import Form from './Form'

const Cart = ({ cartItems, onAdd, onRemove, onRemoveAll }) => {
  // console.log("cartItemCart", cartItems);
  //format
  function format(n, currency) {
    return n.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,") + currency;
  }
  useEffect(() => {
    const form = document.querySelector(".form");
    if (cartItems.length === 0) {
      form.style.display = "none";
    } else {
      form.style.display = "block";
    }
  }, [cartItems.length]);
  //form input
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    textnote: ""
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  //logic
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const priceCart = format(itemsPrice, " VND");
  const taxPrice = itemsPrice * 0.14;
  const thuePrice = format(taxPrice, " VND");
  const shippingPrice = priceCart > 10000000 ? 50000 : 20000;
  const ship = format(shippingPrice, " VND");
  const totalPrice = itemsPrice + taxPrice + shippingPrice;
  const total = format(totalPrice, " VND");

  const handlePay = () => {
    alert("Cảm ơn quý khách đã mua đồ của Shoppp <3");
  };
  const image =
    "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/";
  return (
    <CartWrapper>
      <Header />
      <Navigation />
      <div className="product-cart">
        {cartItems.length === 0 && (
          <div className="no-product">
            <img src="/assets/images/cart-no.png" alt="" />
            <p className="">Không có sản phẩm nào</p>
            <Link to="/product">
              <button className="">Tiếp tục mua hàng</button>
            </Link>
          </div>
        )}
        <div className="content-cart">
          <div className="list-cart">
            {cartItems.map((item) => (
              <div key={item._id} className="list-product-cart">
                <div className="content-product-cart">
                  <div className="image-product-cart">
                    <img src={image.concat(item.urlPicture)} alt="" />
                  </div>
                  <div className="content-text">
                    <div className="title-product-cart">{item.nameExt}</div>
                    <div className="content-de-in">
                      <div className="de-in">
                        <button
                          onClick={() => onRemove(item)}
                          className="btn-decrement remove"
                        >
                          <FontAwesomeIcon icon={faMinus} />
                        </button>{" "}
                        <span className="number">{item.qty}</span>
                        <button
                          onClick={() => onAdd(item)}
                          className="btn-increment add"
                        >
                          <FontAwesomeIcon icon={faPlus} />
                        </button>
                      </div>
                      <div className="cost-cart text-right">
                        {item.qty} x {format(item.price, " VND")}
                      </div>
                    </div>
                  </div>
                  <div onClick={() => onRemoveAll(item)} className="icon-exist">
                    <FontAwesomeIcon icon={faXmark} />
                  </div>
                </div>
              </div>
            ))}
            {cartItems.length !== 0 && (
              <div className="list-price">
                <div className="box">
                  <div className="title-price">Tổng giá các sản phẩm :</div>
                  <div className="price-product">{priceCart}</div>
                </div>
                <div className="box">
                  <div className="title-price">Thuế sản phẩm :</div>
                  <div className="price-product">{thuePrice}</div>
                </div>
                <div className="box">
                  <div className="title-price">Tiền phí giao hàng :</div>
                  <div className="price-product">{ship}</div>
                </div>
                <div className="box">
                  <div className="title-price">
                    <strong>Tổng tiền tất cả sản phẩm :</strong>
                  </div>
                  <div className="price-product">
                    <strong>{total}</strong>
                  </div>
                </div>
                <hr />
              </div>
            )}
          </div>
          <div className="form">
            <div className="form-title">
              <span className="">Thông tin thanh toán</span>
            </div>
            <div className="content-form">
              <div className="text-form">
                <p>
                  Để tiếp tục đặt hàng, quý khách xin vui lòng nhập thông tin
                  bên dưới.
                </p>
                <p>
                  Bằng cách đặt hàng, bạn đồng ý với{" "}
                  <strong>Điều khoản giao dịch</strong> của Tiến Bịp
                </p>
              </div>
              <div className="input-form">
                <Form />
                {/* <label htmlFor="">Ghi chú :</label>
                <textarea
                  className="textarea"
                  label=""
                  autoFocus={true}
                  name="textnote"
                  value={formData.textnote}
                  onChange={handleChange}
                  rows="7"
                  placeholder="Yêu cầu lắp đặt hoặc ghi chú thêm.."
                ></textarea>
                <div className="">
                  Bạn đã nhập <strong>{formData.textnote.length}</strong> kí tự
                  .Bạn còn <strong>{500 - formData.textnote.length}</strong> kí
                  tự nữa.
                </div> */}
              </div>
            </div>
            {/* <button className="btn-submit">
              <span onClick={handlePay}>Đặt hàng ngay</span>
              <p>Tư vấn viên sẽ gọi điện thoại xác nhận</p>
            </button> */}

          </div>
        </div>
      </div>
      <Footer />
      <Copyright />
    </CartWrapper>
  );
};
export default Cart;
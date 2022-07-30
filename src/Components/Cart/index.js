import React, { useState,useEffect } from "react";
import { CartWrapper } from "./style";
import Header from "./../Home/Header";
import Navigation from "./../Home/Navigation";
import Footer from "./../Home/Footer";
import Copyright from "./../Home/Copyright";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import Input from "./../Common/Input";

const Cart = ({ cartItems, onAdd, onRemove }) => {
  //format moeny
  function format(n, currency) {
    return n.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,") + currency;
  }
  ///
  // const formThanhToan = () => {
  //     if(cartItems.length === 0) {
  //       form.style.opacity = "0";
  //     }else {
  //       form.style.display = "block";
  //     }
  // }
  useEffect(() => {
    const form = document.querySelector(".form")
    if(cartItems.length === 0) {
            form.style.display= "none";
          }else {
            form.style.display = "block";
          }
  },[cartItems.length])
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

  const priceCart = format(itemsPrice, " vnđ");
  const taxPrice = itemsPrice * 0.14;
  const thuePrice = format(taxPrice, " vnđ");
  const shippingPrice = priceCart > 10000000 ? 50000 : 20000;
  const ship = format(shippingPrice,' vnđ');
  const totalPrice = itemsPrice + taxPrice + shippingPrice;
  const total = format(totalPrice, ' vnđ')
  // const hiddenForm = () => {
  //   const hidden = document.querySelector(".form");
  //   if (cartItems.length === 0) {
  //     hidden.classList.add("hidden");
  //   }
  // };
  // hiddenForm();

  //onKeyDown

  const handlePay = () => {
    alert("Cảm ơn quý khách đã mua đồ của Shoppp <3")
  }
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
              <button>Tiếp tục mua hàng</button>
            </Link>
          </div>
        )}
        <div className="content-cart">
          <div className="list-cart">
            {cartItems.map((item) => (
              <div key={item.id} className="list-product-cart">
                <div className="content-product-cart">
                  <div className="image-product-cart">
                    <img src={item.image} alt="" />
                  </div>
                  <div className="content-text">
                    <div className="title-product-cart">{item.title}</div>
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
                        {item.qty} x ${item.price}
                      </div>
                    </div>
                  </div>
                  <div onClick={() => onRemove(item)} className="icon-exist">
                    <FontAwesomeIcon icon={faXmark} />
                  </div>
                </div>
              </div>
            ))}
            {cartItems.length !== 0 && (
              <div className="list-price">
                <div className="box">
                  <div className="title-price">Giá sản phẩm :</div>
                  <div className="price-product">${priceCart}</div>
                </div>
                <div className="box">
                  <div className="title-price">Thuế sản phẩm :</div>
                  <div className="price-product">${thuePrice}</div>
                </div>
                <div className="box">
                  <div className="title-price">Tiền phí giao hàng :</div>
                  <div className="price-product">${ship}</div>
                </div>
                <div className="box">
                  <div className="title-price">
                    <strong>Tổng tiền giá sản phẩm :</strong>
                  </div>
                  <div className="price-product">
                    <strong>${total}</strong>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <button onClick={() => alert("Implement Checkout!")}>
                    Checkout
                  </button>
                </div>
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
                <label>Họ và tên : *</label>
                <Input
                  className="input"
                  label=""
                  placeholder="Họ tên người nhận hàng"
                  autoFocus={true}
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
                <label>Số điện thoại : *</label>
                <Input
                  className="input"
                  label=""
                  placeholder="Dùng để liên lạc khi nhận hàng"
                  autoFocus={true}
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
                <label>Email : ( Vui lòng nhập chính xác )</label>
                <Input
                  className="input"
                  label=""
                  placeholder="Để nhận thông báo đơn hàng"
                  autoFocus={true}
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <label>Địa chỉ giao nhận hàng :</label>
                <Input
                  className="input"
                  label=""
                  placeholder="Tìm kiếm sản phẩm"
                  autoFocus={true}
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                />
                <label>Ghi chú :</label>
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
                </div>
                <label for="pay">Chọn phương thức thanh toán:</label>

                <select id="pay">
                  <option value="money" selected>Thanh toán khi nhận hàng</option>
                  <option value="atm">Thanh toán bằng thẻ ngân hàng</option>
                  <option value="momo">Thanh toán qua ví Momo</option>
                </select>
              </div>
              <label>
              <Input
                  className="input-submit"
                  label=""
                  autoFocus={true}
                  type="checkbox"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                /><span className="text-submit">Xác nhận in hoá đơn</span>
              </label>
            </div>
            <button className="btn-submit">
              <span onClick={handlePay}>Đặt hàng ngay</span>
              <p>Tư vấn viên sẽ gọi điện thoại xác nhận</p>
            </button>
          </div>
        </div>
      </div>
      <Footer />
      <Copyright />
    </CartWrapper>
  );
};
export default Cart;

import React, { useState } from "react";
import { HeaderWrapper } from "./style";
import Input from "./../../Common/Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReceipt,
  faFileInvoice,
  faCartShopping,
  faMagnifyingGlass
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const Header = ({cartItems}) => {
  const [formData, setFormData] = useState({
    nameproduct: '',
  }
  );
  const [key,setKey] = useState("");
  const handleChange = (event) => {
    const { name, value } = event.target;
    setKey(value);
    setFormData({
      ...formData,
      [name]: value
    });
  };
  return (
    <HeaderWrapper>
      <div className="header-left">
        <Link to="/">
          <img className="logo" src="/assets/images/logolaptop.png" alt="" />
        </Link>
        <Input
          className="input-search"
          label=""
          placeholder="Tìm kiếm sản phẩm"
          autoFocus={true}
          type="text"
          name="nameproduct"
          value={formData.nameproduct}
          onChange={handleChange}
        />
        <Link to={`/search/${key}`}><button class="btn-search"><FontAwesomeIcon icon={faMagnifyingGlass}/></button></Link>
      </div>
      <div className="header-right">
        <ul className="">
          <li>
            <FontAwesomeIcon icon={faReceipt} />
            Thông tin
          </li>
          <li>
            <FontAwesomeIcon icon={faFileInvoice} />
            Thanh toán & tiện ích
          </li>
          <Link className="cart-icon"to="/cart">
            <li>
              <FontAwesomeIcon icon={faCartShopping} />
              Giỏ hàng
            </li>
            
          </Link>
        </ul>
      </div>
    </HeaderWrapper>
  );
};
export default Header;

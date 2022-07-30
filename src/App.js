import "./App.css";
import Home from "./Components/Home";
import Category from "./Components/Category";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./Components/Cart";
import React, { useState } from "react";
import Detail from './Components/Detail'
import Search from "./Components/Search"


function App() {
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((item) => item.id === product.id);
    if (exist) {
      alert("Thêm sản phẩm vào giỏ hàng thành công <3");
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home cartItems = {cartItems} />} />
          <Route path="/product" element={<Category onAdd={onAdd} />} />
          <Route
            path="/cart"
            element={
              <Cart cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />
            }
          />
          <Route path="/product/:productId" element={<Detail/>}/>
          <Route path="/search/:key" element={<Search onAdd={onAdd}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

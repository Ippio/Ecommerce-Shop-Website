import "./App.css";
import Home from "./Components/Home";
import Category from "./Components/Category";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./Components/Cart";
import React, { useState } from "react";
import Detail from "./Components/Detail";
import Search from "./Components/Search";
import Pay from './Components/Pay';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const onAdd = (product) => {
    const exist = cartItems?.find((item) => item._id === product._id);
    if (exist) {
      // alert("Thêm sản phẩm vào giỏ hàng thành công <3");
      setCartItems(
        cartItems.map((x) => {
          return x._id === product._id ? { ...exist, amount: exist.amount + 1 } : x;
        })
      );
    } else {
      setCartItems([
        ...cartItems,
        { ...product, price: product.price, amount: 1 }
      ]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x._id === product._id);
    if (exist.amount === 1) {
      setCartItems(cartItems.filter((x) => x._id !== product._id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x._id === product._id ? { ...exist, amount: exist.amount - 1 } : x
        )
      );
    }
  };
  const onRemoveAll = (product) => {
    const exist = cartItems.find((x) => x._id === product._id);
    if (exist.amount >= 1) {
      setCartItems(cartItems.filter((x) => x._id !== product._id));
    } else {
      setCartItems(
        cartItems.map((x) => (x._id === product._id ? { ...exist } : x))
      );
    }
  };
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/:productType"
            element={<Category onAdd={onAdd} onRemove={onRemove} />}
          />
          <Route
            path="/cart"
            element={
              <Cart
                cartItems={cartItems}
                onAdd={onAdd}
                onRemove={onRemove}
                onRemoveAll={onRemoveAll}
              />
            }
          />
          <Route path="/product/:productId" element={<Detail onAdd={onAdd}/>} />
          <Route path="/search/:key" element={<Search onAdd={onAdd} />} />
          <Route path="/pay" element={<Pay />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

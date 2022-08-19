import React from "react";
import { CategoryWrapper } from "./style";
import Header from "./../Home/Header";
import Navigation from "./../Home/Navigation";
import Footer from "./../Home/Footer";
import Copyright from "./../Home/Copyright";
import SliderCategory from "./SliderCategory";
import FilterProduct from "./FilterProduct";

const Category = ({ onAdd, cartItems }) => {
  return (
    <CategoryWrapper>
      <Header />
      <Navigation />
      <SliderCategory />
      <FilterProduct cartItems={cartItems} onAdd={onAdd} />
      <Footer />
      <Copyright />
    </CategoryWrapper>
  );
};

export default Category;

import React from "react";
import ListFilter from "./ListFilter";
import { FilterWrapper } from "./style";
import { v4 as uuidv4 } from "uuid";

const Filter = () => {
  const listFilter = [
    {
      id: uuidv4(),
      image: "assets/images/icon-mobile.png",
      title: "Điện thoại"
    },
    {
      id: uuidv4(),
      image: "assets/images/icon-laptop.png",
      title: "Laptop"
    },
    {
      id: uuidv4(),
      image: "assets/images/icon-pc.png",
      title: "PC - Lắp ráp"
    },
    {
      id: uuidv4(),
      image: "assets/images/icon-tablet.png",
      title: "Máy tính bảng"
    },
    {
      id: uuidv4(),
      image: "assets/images/icon-smart.png",
      title: "Thiết bị thông minh"
    },
    {
      id: uuidv4(),
      image: "assets/images/icon-houseware.png",
      title: "Gia dụng"
    },
    {
      id: uuidv4(),
      image: "assets/images/icon-apple.png",
      title: "Apple"
    },
    {
      id: uuidv4(),
      image: "assets/images/icon-samsung.png",
      title: "Samsung"
    },
    {
      id: uuidv4(),
      image: "assets/images/icon-smartwatch.png",
      title: "Đồng hồ thông minh"
    },
    {
      id: uuidv4(),
      image: "assets/images/icon-accessories.png",
      title: "Phụ kiện"
    },
    {
      id: uuidv4(),
      image: "assets/images/icon-screen.png",
      title: "Màn hình"
    },
    {
      id: uuidv4(),
      image: "assets/images/icon-tcdm.png",
      title: "Máy cũ"
    }
  ];
  return (
    <FilterWrapper>
      <ListFilter listFilter={listFilter} />
    </FilterWrapper>
  );
};

export default Filter;

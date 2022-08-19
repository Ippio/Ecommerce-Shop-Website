import React from "react";
import { SliderProductWrapper } from "./style";
import Item from "./Item";
import Carousel from "react-elastic-carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

const SliderProduct1 = ({ listData }) => {
  const image =
    "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/";
  //orr
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 }
  ];
  return (
    <SliderProductWrapper>
      <Carousel className="haha" breakPoints={breakPoints}>
        {listData.map((item) => {
          return (
            <Item key={item.id}>
              <div className="image">
                <img src={image.concat(item.urlPicture)} alt="" />
              </div>
              <div className="content">
                <span className="title">{item.nameExt}</span>
              </div>
            </Item>
          );
        })}
      </Carousel>
    </SliderProductWrapper>
  );
};
export default SliderProduct1;

import React from "react";
import { SliderProductWrapper } from "./style";
import Item from "./Item";
import Carousel from "react-elastic-carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

const SliderProduct2 = ({ listData }) => {
  const image =
    "http://localhost:5001/";
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
        {listData?.phone?.map((item) => {
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
export default SliderProduct2;

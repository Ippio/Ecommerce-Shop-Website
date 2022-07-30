import React from "react";
import { SliderProductWrapper } from "./style";
import Item from "./Item";
import Carousel from "react-elastic-carousel";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus} from '@fortawesome/free-solid-svg-icons'

const SliderProduct3 = ({ listData3 }) => {
  //orr
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];
  return (
    <SliderProductWrapper>
      <Carousel className="haha" breakPoints={breakPoints}>
        {listData3.map((item) => {
          return (
            <Item key={item.id}>
              <div className="image">
                <img src={item.image} alt="" />
              </div>
              <div className="content">
                <span className="title">{item.title}</span>
                <div className="cost">
                  <span className="">{item.cost}</span>
                </div>
                <span className="btn">{item.btn}</span>
              </div>
              <div className="list-btn">
                <button className="buy-now">Mua ngay</button>
                <button className="cart"><FontAwesomeIcon className="icon" icon={faCartPlus}/>Giỏ hàng</button>
              </div>
            </Item>
          );
        })}
      </Carousel>
    </SliderProductWrapper>
  );
};
export default SliderProduct3;

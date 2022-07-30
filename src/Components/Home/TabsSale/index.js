import React, { useState } from "react";
import { TabsSaleWrapper } from "./style";
import TabItem from "./TabItem";
import SliderProduct from "./../TabsSale/SliderProduct";
import SliderProduct1 from './../TabsSale/SliderProduct1';
import SliderProduct2 from './../TabsSale/SliderProduct2';
import SliderProduct3 from './../TabsSale/SliderProduct3';
import { v4 as uuidv4 } from "uuid";

const TabsSale = () => {
  const listTab = [
    {
      id: 1,
      title: "27/6",
      content: "Đã kết thúc",
    },
    {
      id: 2,
      title: "28/6",
      content: "Đã kết thúc",
    },
    {
      id: 3,
      title: "29/6",
      content: "Sắp diễn ra",
    },
    {
      id: 4,
      title: "30/6",
      content: "Sắp diễn ra",
    },
  ];
  const listData = [
    {
      id: uuidv4(),
      image: "/assets/images/pro1.jpg",
      title: "Ipad pro 11 M1 Wifi 128GB",
      cost: "22.990.000dd",
      btn: "Đã kết thúc",
    },
    {
      id: uuidv4(),
      image: "/assets/images/pro2.jpg",
      title: "HP envy 13 ba1536TU core i5 1135g7",
      cost: "23.990.000đ",
      btn: "Đã kết thúc",
    },
    {
      id: uuidv4(),
      image: "/assets/images/pro2.jpg",
      title: "HP envy 13 ba1536TU core i5 1135g7",
      cost: "23.990.000đ",
      btn: "Đã kết thúc",
    },
    {
      id: uuidv4(),
      image: "/assets/images/pro2.jpg",
      title: "HP envy 13 ba1536TU core i5 1135g7",
      cost: "23.990.000đ",
      btn: "Đã kết thúc",
    },
    {
      id: uuidv4(),
      image: "/assets/images/pro2.jpg",
      title: "HP envy 13 ba1536TU core i5 1135g7",
      cost: "23.990.000đ",
      btn: "Đã kết thúc",
    },
    {
      id: uuidv4(),
      image: "/assets/images/pro2.jpg",
      title: "HP envy 13 ba1536TU core i5 1135g7",
      cost: "23.990.000đ",
      btn: "Đã kết thúc",
    },
    {
      id: uuidv4(),
      image: "/assets/images/pro2.jpg",
      title: "HP envy 13 ba1536TU core i5 1135g7",
      cost: "23.990.000đ",
      btn: "Đã kết thúc",
    },
    {
      id: uuidv4(),
      image: "/assets/images/pro2.jpg",
      title: "HP envy 13 ba1536TU core i5 1135g7",
      cost: "23.990.000đ",
      btn: "Đã kết thúc",
    },
  ];
  const listData1 = [
    {
      id: uuidv4(),
      image: "/assets/images/pro3.jpg",
      title: "ehehhehe",
      cost: "hehehhe",
      btn: "heheheheh",
    },
    {
      id: uuidv4(),
      image: "/assets/images/pro4.jpg",
      title: "hheheheh",
      cost: "hdhdhdhdhhd",
      btn: "kakakakakak",
    },
    {
      id: uuidv4(),
      image: "/assets/images/pro5.jpg",
      title: "hheheheh",
      cost: "hdhdhdhdhhd",
      btn: "kakakakakak",
    },
    {
      id: uuidv4(),
      image: "/assets/images/pro6.jpg",
      title: "hheheheh",
      cost: "hdhdhdhdhhd",
      btn: "kakakakakak",
    },
    {
      id: uuidv4(),
      image: "/assets/images/pro7.jpg",
      title: "hheheheh",
      cost: "hdhdhdhdhhd",
      btn: "kakakakakak",
    },
    {
        id: uuidv4(),
        image: "/assets/images/pro8.jpg",
        title: "hheheheh",
        cost: "hdhdhdhdhhd",
        btn: "kakakakakak",
      },
      {
        id: uuidv4(),
        image: "/assets/images/pro8.jpg",
        title: "hheheheh",
        cost: "hdhdhdhdhhd",
        btn: "kakakakakak",
      },
      {
        id: uuidv4(),
        image: "/assets/images/pro8.jpg",
        title: "hheheheh",
        cost: "hdhdhdhdhhd",
        btn: "kakakakakak",
      }
  ];
  const listData2 = [
    {
      id: uuidv4(),
      image: "/assets/images/pro1.jpg",
      title: "Ipad pro 11 M1 Wifi 128GB",
      cost: "22.990.000dd",
      btn: "Đã kết thúc",
    },
    {
      id: uuidv4(),
      image: "/assets/images/pro2.jpg",
      title: "HP envy 13 ba1536TU core i5 1135g7",
      cost: "23.990.000đ",
      btn: "Đã kết thúc",
    },
    {
      id: uuidv4(),
      image: "/assets/images/pro2.jpg",
      title: "HP envy 13 ba1536TU core i5 1135g7",
      cost: "23.990.000đ",
      btn: "Đã kết thúc",
    },
    {
      id: uuidv4(),
      image: "/assets/images/pro2.jpg",
      title: "HP envy 13 ba1536TU core i5 1135g7",
      cost: "23.990.000đ",
      btn: "Đã kết thúc",
    },
    {
      id: uuidv4(),
      image: "/assets/images/pro2.jpg",
      title: "HP envy 13 ba1536TU core i5 1135g7",
      cost: "23.990.000đ",
      btn: "Đã kết thúc",
    },
    {
      id: uuidv4(),
      image: "/assets/images/pro2.jpg",
      title: "HP envy 13 ba1536TU core i5 1135g7",
      cost: "23.990.000đ",
      btn: "Đã kết thúc",
    },
    {
      id: uuidv4(),
      image: "/assets/images/pro2.jpg",
      title: "HP envy 13 ba1536TU core i5 1135g7",
      cost: "23.990.000đ",
      btn: "Đã kết thúc",
    },
    {
      id: uuidv4(),
      image: "/assets/images/pro2.jpg",
      title: "HP envy 13 ba1536TU core i5 1135g7",
      cost: "23.990.000đ",
      btn: "Đã kết thúc",
    },
  ];
  const listData3 = [
    {
      id: uuidv4(),
      image: "/assets/images/pro1.jpg",
      title: "Ipad pro 11 M1 Wifi 128GB",
      cost: "22.990.000dd",
      btn: "Đã kết thúc",
    },
    {
      id: uuidv4(),
      image: "/assets/images/pro2.jpg",
      title: "HP envy 13 ba1536TU core i5 1135g7",
      cost: "23.990.000đ",
      btn: "Đã kết thúc",
    },
    {
      id: uuidv4(),
      image: "/assets/images/pro2.jpg",
      title: "HP envy 13 ba1536TU core i5 1135g7",
      cost: "23.990.000đ",
      btn: "Đã kết thúc",
    },
    {
      id: uuidv4(),
      image: "/assets/images/pro2.jpg",
      title: "HP envy 13 ba1536TU core i5 1135g7",
      cost: "23.990.000đ",
      btn: "Đã kết thúc",
    },
    {
      id: uuidv4(),
      image: "/assets/images/pro2.jpg",
      title: "HP envy 13 ba1536TU core i5 1135g7",
      cost: "23.990.000đ",
      btn: "Đã kết thúc",
    },
    {
      id: uuidv4(),
      image: "/assets/images/pro2.jpg",
      title: "HP envy 13 ba1536TU core i5 1135g7",
      cost: "23.990.000đ",
      btn: "Đã kết thúc",
    },
    {
      id: uuidv4(),
      image: "/assets/images/pro2.jpg",
      title: "HP envy 13 ba1536TU core i5 1135g7",
      cost: "23.990.000đ",
      btn: "Đã kết thúc",
    },
    {
      id: uuidv4(),
      image: "/assets/images/pro2.jpg",
      title: "HP envy 13 ba1536TU core i5 1135g7",
      cost: "23.990.000đ",
      btn: "Đã kết thúc",
    },
  ];
  const [currentIndexActive, setCurrentIndexActive] = useState(0);

  const handleChangeTab = (currentIndex) => {
    setCurrentIndexActive(currentIndex);
  };

  const renderTabContent = () => {
    switch (currentIndexActive) {
      case 0:
        return (
          <SliderProduct
            listData={listData}
            isInfinity={true}
          />
        );
      case 1:
        return (<SliderProduct1
          listData1={listData1}
          isInfinity={true}
        />);
      case 2:
        return (<SliderProduct2
          listData2={listData2}
          isInfinity={true}
        />);
      case 3:
        return (<SliderProduct3
          listData3={listData3}
          isInfinity={true}
        />);
      default:
        return "";
    }
  };
  return (
    <TabsSaleWrapper>
      <TabItem
        listTab={listTab}
        currentIndexActive={currentIndexActive}
        onChangeTab={handleChangeTab}
      >
        {renderTabContent()}
      </TabItem>
    </TabsSaleWrapper>
  );
};

export default TabsSale;

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { DetailWrapper } from "./style";
import { getListProduct } from "./../../services";
import Header from "./../Home/Header";
import Navigation from "./../Home/Navigation";
import Footer from "./../Home/Footer";
import Copyright from "./../Home/Copyright";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Loading from "./../Common/Loading";

const Detail = ({ onAdd }) => {
  const lorem ='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In ornare quam viverra orci sagittis eu volutpat odio facilisis. Ac turpis egestas maecenas pharetra. Sit amet risus nullam eget felis eget nunc lobortis mattis. Pulvinar sapien et ligula ullamcorper malesuada proin. Eget dolor morbi non arcu'
  const [listData, setListData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [tabIndex, setTabIndex] = useState(0);
  const { productId } = useParams();
  // console.log("idpro",productId);
  function format(n, currency) {
    return n.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,") + currency;
  }
  const image =
    "http://localhost:5001/";
  useEffect(() => {
    const initData = async () => {
      try {
        setIsLoading(true);
        const response = await getListProduct(`http://localhost:5001/product/${productId}`);
        const { data, status } = response;
        // console.log("res", response);
        if (status === 200) {
          setIsLoading(false);
          setListData(data.product);
        } else {
          setIsLoading(false);
        }
      } catch (error) {
        setIsLoading(false);
      }
    };
    initData();
  }, []);
  if (isLoading) return <Loading />;
  // console.log("listData", listData);
  // const productDetail = listData?.find((item) => {
  //   // console.log("porductId",typeof productId);
  //   // console.log("itemid",typeof item._id);
  //   if (item._id === productId) return true;
  // });
  // console.log("productDetail", productDetail);
  //memory
  console.log(listData)
  return (
    <DetailWrapper>
      <Header />
      <Navigation />
      <div className="detail-wrapper">
        <div className="title-detail-product-length">
          <h1 className="title-detail">{listData?.name}</h1>
          <span className="length-product">
            Số sản phẩm đã bán : {listData?.totalOrder}
          </span>
        </div>
        <div className="content-detail-product">
          <div className="image-detail-product">
            <div className="image-acc">
              <img src={image.concat(listData?.urlPicture)} style={{width:'200px'}} alt="" />
            </div>
          </div>
          <div className="information-product-detail">
            {/* <Tabs
              selectedIndex={tabIndex}
              onSelect={(tabIndex) => setTabIndex(tabIndex)}
            >
              {productDetail?.listProductGroupDetail.map((item) => {
                return <TabPanel>{format(item?.price, " đ")}</TabPanel>;
              })}
              <TabList>
                {productDetail?.listProductGroupDetail.map((item, index) => {
                  return (
                    <Tab
                      className={`tab-item ${
                        tabIndex === index ? "active-tab" : ""
                      }`}
                    >
                      <div className="tab-a">
                        <span className="text-storage">
                          <p
                            className={`button ${
                              tabIndex === index ? "active" : ""
                            }`}
                          ></p>
                        </span>
                        {item?.storage}
                      </div>
                      <div className="">{format(item?.price, "")}</div>
                    </Tab>
                  );
                })}
              </TabList>
            </Tabs> */}
            <span className="description">{listData?.description || lorem}</span>
            <div className="list-btn-detail">
                <button onClick={() => onAdd(listData)} className="submit-btn-detail-first">
                  <p className="title-btn-detail">MUA NGAY</p>
                  <p className="content-btn-detail">
                    Giao hàng miễn phí hoặc nhận tại Shop
                  </p>
                </button>
              <div className="list-btn-bottom">
                <button className="">
                  <p className="title-btn-detail">Trả góp 0%</p>
                  <p className="content-btn-detail">Duyệt nhanh qua điện thoại</p>
                </button>
                <button className="">
                  <p className="title-btn-detail">Trả góp qua thẻ</p>
                  <p className="content-btn-detail">Visa ,card ,MasterCard ,...</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="vote-detail-product">
        <h4>Đánh giá sản phẩm</h4>
        <hr></hr>
        <div className="list-comment">
          <div className="comment-item">
            <img src="/assets/images/ip13promax.jpg" alt=""/>
            <div className="content-comment">
              <h5>Nameeeee</h5>
              <p>san pham rat tot hehehehehee</p>
              <span>4 gio truoc</span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <Copyright />
    </DetailWrapper>
  );
};
export default Detail;
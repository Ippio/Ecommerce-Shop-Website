import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { DetailWrapper } from "./style";
import { getListProduct } from "./../../services";
import Header from "./../Home/Header";
import Navigation from "./../Home/Navigation";
import Footer from "./../Home/Footer";
import Copyright from "./../Home/Copyright";
import Loading from "./../Common/Loading";
import { Link } from "react-router-dom";
import './font-awesome.css'

const Detail = ({ onAdd }) => {
  const lorem = "Thông tin đang được cập nhật";
  const [listData, setListData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { productId } = useParams();
  // console.log("idpro",productId);
  function format(n, currency) {
    return n.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,") + currency;
  }
  const image = "http://localhost:5001/";
  useEffect(() => {
    const initData = async () => {
      try {
        setIsLoading(true);
        const response = await getListProduct(
          `http://localhost:5001/product/${productId}`
        );
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
  console.log("lítDtaa", listData);
  const priceMory = parseInt(listData?.price);
  const priceHehe = format(priceMory, " VND");
  console.log(priceHehe);
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
              <img
                src={image.concat(listData?.urlPicture)}
                style={{ width: "200px" }}
                alt=""
              />
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
            <div className="price-detail">{priceHehe}</div>
            <div className="">
              <div className="title------"></div>
              {listData?.listAttrDetailShort?.map((item) => {
                return (
                  <div key={item._id} className="info-detail">
                    <span className="title-info">{item?.attributeName} :</span>
                    <span className="content-info">{item?.value}</span>
                  </div>
                );
              })}
            </div>
            <span className="description">
              {listData?.description || lorem}
            </span>
            <div className="list-btn-detail">
              <button
                onClick={() => onAdd(listData)}
                className="submit-btn-detail-first"
              >
                <p className="title-btn-detail">
                  <Link to="/cart">MUA NGAY</Link>
                </p>
                <p className="content-btn-detail">
                  Giao hàng miễn phí hoặc nhận tại Shop
                </p>
              </button>
              <div className="list-btn-bottom">
                <button className="">
                  <p className="title-btn-detail">Trả góp 0%</p>
                  <p className="content-btn-detail">
                    Duyệt nhanh qua điện thoại
                  </p>
                </button>
                <button className="">
                  <p className="title-btn-detail">Trả góp qua thẻ</p>
                  <p className="content-btn-detail">
                    Visa ,card ,MasterCard ,...
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="vote-detail-product">
        <h4>Đánh giá sản phẩm : {listData?.name}</h4>
        <hr></hr>
        <div className="form-upload">
          <textarea
            placeholder="Bạn có khuyên người khác mua sản phẩm không ? Tại sao ?"
            id="write-comment"
          ></textarea>
          <button>Gửi đánh giá</button>
          <div class="stars">
            <form action="">
              <input class="star star-5" id="star-5" type="radio" name="star" />
              <label class="star star-5" for="star-5"></label>
              <input class="star star-4" id="star-4" type="radio" name="star" />
              <label class="star star-4" for="star-4"></label>
              <input class="star star-3" id="star-3" type="radio" name="star" />
              <label class="star star-3" for="star-3"></label>
              <input class="star star-2" id="star-2" type="radio" name="star" />
              <label class="star star-2" for="star-2"></label>
              <input class="star star-1" id="star-1" type="radio" name="star" />
              <label class="star star-1" for="star-1"></label>
            </form>
          </div>
        </div>
        <div className="list-comment">
          <div className="comment-item">
            <img src="/assets/images/ip13promax.jpg" alt="" />
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

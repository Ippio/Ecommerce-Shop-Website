import React,{useState,useEffect} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartPlus,
  faMicrochip,
  faMobileButton,
  faMemory
} from "@fortawesome/free-solid-svg-icons";
import axios from 'axios'
import { ProductItemWrapper } from "./../style";
import { Link } from "react-router-dom";
import Memory from './Momery'
import {useFetch} from './api'

const ProductItem = ({ product, onAdd }) => {
  const [currentIndexActive, setCurrentIndexActive] = useState(0);
  const [listTabMemory,setListTabMemory] = useState([]);
  // useEffect(() => {
  //   const api = async () => {
  //    const listApiProduct = await axios.get("http://localhost:5001/product/type/dien-thoai")
  //    return listApiProduct
  //   }
  //   api().then((res) => {
  //       // setListSearch(res.data.data.listProduct)
  //       return res.data.data.listProduct
  //   })
  //   .then(res => {
  //     res.map(item => {
  //       console.log("callapi",item.listProductGroupDetail);
  //       return item.listProductGroupDetail
  //     })
  //   })
  //   .then(res => {console.log(res)})
  //   return () => {}
  // },[])
  //listApiProduct
  const {data,loading,error} = useFetch("http://localhost:5001/product/type/dien-thoai")
  console.log("data",data);
  console.log("listTabParent",listTabMemory);
  function format(n, currency) {
    return n.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,") + currency;
  }

//memory

  const handleChangeTab = (currentIndex) => {
    setCurrentIndexActive(currentIndex);
  };

  const renderTabContent = () => {
    switch (currentIndexActive) {
      case 0:
        return (
          // <SliderProduct
          //   listData={listData}
          //   isInfinity={true}
          // />
          <div>hehe </div>
        );
      case 1:
        return (
          <div>haha </div>
        )
      case 2:
        return (
          <div>hihi </div>
        );
      case 3:
        return (
          <div>hoho </div>
        )
      default:
        return "";
    }
  };
  return (
    <ProductItemWrapper>
      <div>
        <Link className="link" to={`/product/${product._id}`}>
          <div className="image">
            <img src={product.urlPicture} alt="" />
          </div>
        </Link>
        <div className="content">
          <Link className="link" to={`/product/${product._id}`}>
            <span className="title">{product.nameExt}</span>
          </Link>
        </div>
        <div className="">
        <Memory
        listTabMemory={listTabMemory}
        currentIndexActive={currentIndexActive}
        onChangeTab={handleChangeTab}
      >
        {renderTabContent()}
      </Memory>
        </div>
        <div className="list-btn">
          <Link to="/cart">
            <button onClick={() => onAdd(product)} className="buy-now">
              Mua ngay
            </button>
          </Link>
          <button className="cart" onClick={() => onAdd(product)}>
            <FontAwesomeIcon className="icon" icon={faCartPlus} />
            Giỏ hàng
          </button>
        </div>
      </div>
    </ProductItemWrapper>
  );
};

export default ProductItem;

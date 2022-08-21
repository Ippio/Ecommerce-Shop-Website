import React, { useState, useEffect } from "react";
import { FilterProductWrapper } from "./style";
import { v4 as uuidv4 } from "uuid";
import ProductItem from "./ProductItem";
import { getListProduct } from "./../../../services";
import Loading from './../../Common/Loading'
import { useParams } from "react-router";

const FilterProduct = ({ onAdd }) => {
  const listBrand = [
    {
      id: uuidv4(),
      title: "Tất cả"
    },
    {
      id: uuidv4(),
      title: "iPhone"
    },
    {
      id: uuidv4(),
      title: "Samsung"
    }
    // {
    //   id: uuidv4(),
    //   title: "Vivo"
    // },
    // {
    //   id: uuidv4(),
    //   title: "Xiaomi"
    // },
    // {
    //   id: uuidv4(),
    //   title: "Masstel"
    // },
    // {
    //   id: uuidv4(),
    //   title: "Tecno"
    // },
    // {
    //   id: uuidv4(),
    //   title: "Asus"
    // },
    // {
    //   id: uuidv4(),
    //   title: "Realme"
    // },
    // {
    //   id: uuidv4(),
    //   title: "OPPO"
    // },
    // {
    //   id: uuidv4(),
    //   title: "Nokia"
    // }
  ];
  const [listData, setListData] = useState([]);
  const [checked, setChecked] = useState("Tất cả");
  const [isLoading, setIsLoading] = useState(false);
  const {productType} = useParams()
  useEffect(() => {
    const initData = async () => {
      try {
        setIsLoading(true);
        const response = await getListProduct(`http://localhost:5001/product/type/${productType}`);
        const { data, status } = response;
        console.log(data)
        if (status === 200) {
          setIsLoading(false);
          setListData(data.data.listProduct);
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
  // const dataFilter = () => {
  //   let data = [];
  //   if (checked === "Tất cả") {
  //     data = listData.filter((item) => item?.nameExt.includes(" "));
  //     return data;
  //   } else {
  //     return (data = listData.filter((item) =>
  //       item?.nameExt.includes(checked)
  //     ));
  //   }
  // };
  // const filterData = dataFilter();

  return (
    <FilterProductWrapper>
      <div className="list-filter">
      <div className="brand">Hãng sản xuất </div>
        <div className="filter">
          {listBrand.map((item, index) => {
            return (
              <div className="filter-item" key={index}>
                <label htmlFor="checkbox">
                  <input
                    value={item.title}
                    autoFocus={true}
                    type="checkbox"
                    id="checkbox"
                    checked={item.title === checked}
                    onChange={(e) => {
                      setChecked(e.target.value);
                      // handleChange()
                    }}
                  />
                </label>
                <span>{item.title}</span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="category">
        <div className="check-category">{`Lọc sản phẩm theo: ${checked}`}</div>
        <div className="list-product">
          {listData?.map((item) => {
            return <ProductItem listData={item} key={item._id} onAdd={onAdd} />;
          })}
        </div>
      </div>
    </FilterProductWrapper>
  );
};

export default FilterProduct;

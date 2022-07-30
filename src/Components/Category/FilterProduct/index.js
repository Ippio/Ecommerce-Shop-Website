import React, { useState ,useEffect} from "react";
import { FilterProductWrapper } from "./style";
import { v4 as uuidv4 } from "uuid";
import ProductItem from './ProductItem'
import axios from 'axios';


const FilterProduct = ({onAdd}) => {
  const listBrand = [
    {
      id: uuidv4(),
      title: "Apple"
    },
    {
      id: uuidv4(),
      title: "Samsung"
    },
    {
      id: uuidv4(),
      title: "Vivo"
    },
    {
      id: uuidv4(),
      title: "Xiaomi"
    },
    {
      id: uuidv4(),
      title: "Masstel"
    },
    {
      id: uuidv4(),
      title: "Tecno"
    },
    {
      id: uuidv4(),
      title: "Asus"
    },
    {
      id: uuidv4(),
      title: "Realme"
    },
    {
      id: uuidv4(),
      title: "OPPO"
    },
    {
      id: uuidv4(),
      title: "Nokia"
    }
  ];
  const [listData, setListData] = useState([]);
  const [checked, setChecked] = useState([]);

  // const handleClick = (event) => {
  //   const btnElemt = event.target;
  //   const nameSize = btnElemt.innerText;
  //   const newList = listProduct.filter((item) => {
  //     const {name} = item
  //     if(name.toUpperCase().includes(nameSize.toUpperCase())) return true
  //   })
  //   setListData(newList)
  // }
// api
  useEffect(() => {
    const api = async () => {
     const listApi = await axios.get("http://localhost:5001/product/type/dien-thoai")
     return listApi
    }
    api().then((res) => {setListData(res.data.data.listProduct)})
    // fetch("http://localhost:5001/product/type/dien-thoai")
    // .then ()
  },[])
  const handleCheck = (event) => {
    const valueInput = event.target.value;
    var updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
    const newList = listData.filter((item) => {
      const { nameExt } = item;
      if (nameExt.toUpperCase().includes(valueInput.toUpperCase())) return true;
    });
    setListData(newList);
  };
  const checkedItems = checked.length
    ? checked.reduce((total, item) => {
        return total + ", " + item;
      })
    : "";

  var isChecked = (item) =>
    checked.includes(item) ? "checked-item" : "not-checked-item";
  return (
    <FilterProductWrapper>
        <div className="list-filter">
          <div className="filter">
            {listBrand.map((item, index) => {
              return (
                <div className="filter-item" key={index}>
                  <label for="checkbox">
                    <input
                      value={item.title}
                      autoFocus={true}
                      type="checkbox"
                      id="checkbox"
                      onChange={handleCheck}
                    />
                  </label>
                  <span className={isChecked(item.title)}>{item.title}</span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="category">
          <div className="">Lọc theo sản phẩm : lap ...</div>
          <div className="check-category">{`Lọc sản phẩm theo: ${checkedItems}`}</div>
          <div className="list-product">
              {listData.map((item) => {
                return (
                  <ProductItem key={item._id} onAdd={onAdd} product={item}/>
                );
              })}
          </div>
        </div>
    </FilterProductWrapper>
  );
};

export default FilterProduct;

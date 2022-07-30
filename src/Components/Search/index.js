import React,{useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import ProductItem from '../Category/FilterProduct/ProductItem'
import { SearchWrapper } from './style';
import Header from "./../Home/Header";
import Navigation from "./../Home/Navigation";
import Footer from "./../Home/Footer";
import Copyright from "./../Home/Copyright";
import axios from 'axios';

const Search = ({onAdd}) => {
  const [listSearch,setListSearch] = useState([])
    const [dataList,setDataList] = useState([])
    const {key} = useParams()
    useEffect(() => {
      const api = async () => {
       const listApi = await axios.get("http://localhost:5001/product/type/dien-thoai")
       return listApi
      }
      api().then((res) => {
          // setListSearch(res.data.data.listProduct)
          return res.data.data.listProduct
      })
      .then(res => {
        if(key) {
                const newList = res.filter(item => {
                  if(item.nameExt.toLowerCase().includes(key.toLowerCase())) {
                      return true
                  }
              })
              setDataList(newList)
            }
      })

      // fetch("http://localhost:5001/product/type/dien-thoai")
      // .then ()
      return () => {}
    },[])
    // useEffect(() => {
    //     if(key) {
    //       const newList = listSearch.filter(item => {
    //         if(item.nameExt.toLowerCase().includes(key.toLowerCase())) {
    //             return true
    //         }
    //     })
    //     setTimeout(() => {
    //       setDataList(newList)
    //     },4000)
    //     }
    // },[key])
  return (
    <SearchWrapper>
            <Header/>
            <Navigation/>
            <div className="list-search">
            {dataList?dataList.map(item=> {
                    return (
                      <ProductItem key={item._id} onAdd={onAdd} product={item} />
                    )
            }):"hehe"}
            </div>
            <Footer/>
            <Copyright/>
    </SearchWrapper>
  )
}

export default Search
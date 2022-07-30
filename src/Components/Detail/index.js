import React,{useState} from 'react'
import {useParams} from 'react-router-dom'
import {listProduct} from './../data'
import {DetailWrapper} from './style'
import { v4 as uuidv4 } from "uuid";

const Detail = () => {
  const {productId} = useParams();
  const productItem = listProduct.find(item => item.id === productId)
  return (
    <DetailWrapper>
      <h1>{productItem.title}</h1>
    </DetailWrapper>
  )
}
export default Detail
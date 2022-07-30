import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import LaptopProduct from './LaptopProduct';
import PhoneProduct from './PhoneProduct'
import {ProductsWrapper} from './style'
import TabletProduct from './TabletProduct'

const Products = () => {
    const listProduct = [
        {
            id: uuidv4(),
            image: '/assets/images/pro2.jpg',
            title: 'Iphone 13 ProMax 512GB',
            cost: '11.990.000đ',
            info: 'Apple A15 Bionic 6.1inch',
            memory: '64GB 128GB',
            buy: 'Mua ngay',
            addcart: 'Giỏ hàng'
        },
        {
            id: uuidv4(),
            image: '/assets/images/pro2.jpg',
            title: 'Iphone 13 ProMax 512GB',
            cost: '11.990.000đ',
            info: 'Apple A15 Bionic 6.1inch',
            memory: '64GB 128GB',
            buy: 'Mua ngay',
            addcart: 'Giỏ hàng'
        },
        {
            id: uuidv4(),
            image: '/assets/images/pro2.jpg',
            title: 'Iphone 13 ProMax 512GB',
            cost: '11.990.000đ',
            info: 'Apple A15 Bionic 6.1inch',
            memory: '64GB 128GB',
            buy: 'Mua ngay',
            addcart: 'Giỏ hàng'
        },
        {
            id: uuidv4(),
            image: '/assets/images/pro2.jpg',
            title: 'Iphone 13 ProMax 512GB',
            cost: '11.990.000đ',
            info: 'Apple A15 Bionic 6.1inch',
            memory: '64GB 128GB',
            buy: 'Mua ngay',
            addcart: 'Giỏ hàng'
        },
        {
            id: uuidv4(),
            image: '/assets/images/pro2.jpg',
            title: 'Iphone 13 ProMax 512GB',
            cost: '11.990.000đ',
            info: 'Apple A15 Bionic 6.1inch',
            memory: '64GB 128GB',
            buy: 'Mua ngay',
            addcart: 'Giỏ hàng'
        },
        {
            id: uuidv4(),
            image: '/assets/images/pro2.jpg',
            title: 'Iphone 13 ProMax 512GB',
            cost: '11.990.000đ',
            info: 'Apple A15 Bionic 6.1inch',
            memory: '64GB 128GB',
            buy: 'Mua ngay',
            addcart: 'Giỏ hàng'
        },
        {
            id: uuidv4(),
            image: '/assets/images/pro2.jpg',
            title: 'Iphone 13 ProMax 512GB',
            cost: '11.990.000đ',
            info: 'Apple A15 Bionic 6.1inch',
            memory: '64GB 128GB',
            buy: 'Mua ngay',
            addcart: 'Giỏ hàng'
        },
        {
            id: uuidv4(),
            image: '/assets/images/pro2.jpg',
            title: 'Iphone 13 ProMax 512GB',
            cost: '11.990.000đ',
            info: 'Apple A15 Bionic 6.1inch',
            memory: '64GB 128GB',
            buy: 'Mua ngay',
            addcart: 'Giỏ hàng'
        },
        {
            id: uuidv4(),
            image: '/assets/images/pro3.jpg',
            title: 'Iphone 13 ProMax 512GB',
            cost: '11.990.000đ',
            info: 'Apple A15 Bionic 6.1inch',
            memory: '64GB 128GB',
            buy: 'Mua ngay',
            addcart: 'Giỏ hàng'
        },
        {
            id: uuidv4(),
            image: '/assets/images/pro3.jpg',
            title: 'Iphone 13 ProMax 512GB',
            cost: '11.990.000đ',
            info: 'Apple A15 Bionic 6.1inch',
            memory: '64GB 128GB',
            buy: 'Mua ngay',
            addcart: 'Giỏ hàng'
        },
        {
            id: uuidv4(),
            image: '/assets/images/pro3.jpg',
            title: 'Iphone 13 ProMax 512GB',
            cost: '11.990.000đ',
            info: 'Apple A15 Bionic 6.1inch',
            memory: '64GB 128GB',
            buy: 'Mua ngay',
            addcart: 'Giỏ hàng'
        },
        {
            id: uuidv4(),
            image: '/assets/images/pro3.jpg',
            title: 'Iphone 13 ProMax 512GB',
            cost: '11.990.000đ',
            info: 'Apple A15 Bionic 6.1inch',
            memory: '64GB 128GB',
            buy: 'Mua ngay',
            addcart: 'Giỏ hàng'
        },
        {
            id: uuidv4(),
            image: '/assets/images/pro3.jpg',
            title: 'Iphone 13 ProMax 512GB',
            cost: '11.990.000đ',
            info: 'Apple A15 Bionic 6.1inch',
            memory: '64GB 128GB',
            buy: 'Mua ngay',
            addcart: 'Giỏ hàng'
        },
        {
            id: uuidv4(),
            image: '/assets/images/pro3.jpg',
            title: 'Iphone 13 ProMax 512GB',
            cost: '11.990.000đ',
            info: 'Apple A15 Bionic 6.1inch',
            memory: '64GB 128GB',
            buy: 'Mua ngay',
            addcart: 'Giỏ hàng'
        },
        {
            id: uuidv4(),
            image: '/assets/images/pro3.jpg',
            title: 'Iphone 13 ProMax 512GB',
            cost: '11.990.000đ',
            info: 'Apple A15 Bionic 6.1inch',
            memory: '64GB 128GB',
            buy: 'Mua ngay',
            addcart: 'Giỏ hàng'
        },
        {
            id: uuidv4(),
            image: '/assets/images/pro2.jpg',
            title: 'Iphone 13 ProMax 512GB',
            cost: '11.990.000đ',
            info: 'Apple A15 Bionic 6.1inch',
            memory: '64GB 128GB',
            buy: 'Mua ngay',
            addcart: 'Giỏ hàng'
        },
        {
            id: uuidv4(),
            image: '/assets/images/pro2.jpg',
            title: 'Iphone 13 ProMax 512GB',
            cost: '11.990.000đ',
            info: 'Apple A15 Bionic 6.1inch',
            memory: '64GB 128GB',
            buy: 'Mua ngay',
            addcart: 'Giỏ hàng'
        },
        {
            id: uuidv4(),
            image: '/assets/images/pro2.jpg',
            title: 'Iphone 13 ProMax 512GB',
            cost: '11.990.000đ',
            info: 'Apple A15 Bionic 6.1inch',
            memory: '64GB 128GB',
            buy: 'Mua ngay',
            addcart: 'Giỏ hàng'
        },
        {
            id: uuidv4(),
            image: '/assets/images/pro2.jpg',
            title: 'Iphone 13 ProMax 512GB',
            cost: '11.990.000đ',
            info: 'Apple A15 Bionic 6.1inch',
            memory: '64GB 128GB',
            buy: 'Mua ngay',
            addcart: 'Giỏ hàng'
        },
        {
            id: uuidv4(),
            image: '/assets/images/pro2.jpg',
            title: 'Iphone 13 ProMax 512GB',
            cost: '11.990.000đ',
            info: 'Apple A15 Bionic 6.1inch',
            memory: '64GB 128GB',
            buy: 'Mua ngay',
            addcart: 'Giỏ hàng'
        },
    ]
    return (
        <ProductsWrapper>
            <PhoneProduct listProduct={listProduct}></PhoneProduct>
            <LaptopProduct listProduct={listProduct}></LaptopProduct>
            <TabletProduct listProduct={listProduct}></TabletProduct>
        </ProductsWrapper>
    ) 
}

export default Products
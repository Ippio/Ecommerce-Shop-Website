import React from 'react';
import Header from './Header';
import Navigation from './Navigation';
import {HomeWrapper} from './style';
import Banner from './Banner';
import SliderContent from './SliderContent';
import Filter from './Filter';
import FilterAccessory from './FilterAccessory';
import TabsSale from './TabsSale';
import LaptopGaming from './LaptopGaming';
import Products from './Products';
import Footer from './Footer';
import Copyright from './Copyright';

const Home = ({cartItems}) => {
    return (
        <HomeWrapper>
            <Header cartItems={cartItems}/>
            <Navigation/>
            <Banner/>
            <SliderContent/>
            <Filter/>
            <TabsSale/>
            <LaptopGaming/>
            <Products />
            <FilterAccessory/>
            <Footer/>
            <Copyright/>
        </HomeWrapper>
    )
}

export default Home
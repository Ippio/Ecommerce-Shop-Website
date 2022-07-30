import React from "react";
import { BannerWrapper } from "./style";

const Banner = () => {
  return (
    <BannerWrapper>
      <div className="container">
        <div className="wave">
          <img src="images/desk-header.png" alt="" />
        </div>
        <div className="wave wave2"></div>
        <div className="wave wave3"></div>
      </div>
    </BannerWrapper> 
  );
};

export default Banner;

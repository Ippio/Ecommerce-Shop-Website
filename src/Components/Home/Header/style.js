import styled from "styled-components";
import { device } from "./../../../contants";

export const HeaderWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #cd1817;
  padding: 0px 100px;
  @media ${device.laptop} {
    padding: 0 50px;
    }
    @media ${device.tablet} {
      padding: 0 50px;
    }
    @media ${device.mobile} {
      padding: 0 30px;
    }
    @media ${device.mobileL} {
      padding: 0 20px;
    }
    @media ${device.mobileM} {
      padding: 0 20px;
    }
    @media ${device.mobileS} {
      padding: 0 20px;
    }
  .header-left {
    display: flex;
    color: #fff;
    align-items: center;
  }
  .header-left img {
    width: 100px;
    margin: 0px 30px 0px 0px;
  }
  .header-left label input {
    min-width: 500px;
    height: 40px;
    border-radius: 5px 0 0 5px;
    padding-left: 10px;
    outline: none;
    border: none;
  }
  .header-right ul {
    display: flex;
  }
  .header-right ul li {
    list-style-type: none;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10px;
    cursor: pointer;
  }
  .header-right ul li:first-child , .header-right ul li:nth-child(2)  {
    @media ${device.laptop} {
      display: none;
    }
    @media ${device.tablet} {
      display: none;
    }
    @media ${device.mobile} {
      display: none;
    }
    @media ${device.mobileL} {
      display: none;
    }
    @media ${device.mobileM} {
      display: none;
    }
    @media ${device.mobileS} {
      display: none;
    }
  }
  .input-header {
    @media ${device.laptop} {
      display: none;
    }
    @media ${device.tablet} {
      display: none;
    }
    @media ${device.mobile} {
      display: none;
    }
    @media ${device.mobileL} {
      display: none;
    }
    @media ${device.mobileM} {
      display: none;
    }
    @media ${device.mobileS} {
      display: none;
    }
  }
  .header-right ul li a{
    list-style-type: none;
    text-decoration: none;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10px;
    cursor: pointer;
  }
  .cart-icon {
    text-decoration: none;
  }
  .btn-search {
    font-size: 20px;
    padding: 8px 20px;
    border: none;
    border-radius: 0 5px 5px 0;
    cursor: pointer;
    @media ${device.laptop} {
      display: none;
    }
    @media ${device.tablet} {
      display: none;
    }
    @media ${device.mobile} {
      display: none;
    }
    @media ${device.mobileL} {
      display: none;
    }
    @media ${device.mobileM} {
      display: none;
    }
    @media ${device.mobileS} {
      display: none;
    }
  }
`;

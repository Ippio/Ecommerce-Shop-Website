import styled from "styled-components";
import { device } from "./../../../contants";
export const NavWrapper = styled.div`
  width: 100vw;
  background-color: #000;
  color: #fff;
  .list-nav {
    margin: 0 100px;
    display: flex;
    position: relative;
    justify-content: space-between;
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
  .menu-icon {
    display: none;
    @media ${device.laptop} {
      display: block;
    }
    @media ${device.tablet} {
      display: block;
    }
    @media ${device.mobile} {
      display: block;
    }
    @media ${device.mobileL} {
      display: block;
    }
    @media ${device.mobileM} {
      display: block;
    }
    @media ${device.mobileS} {
      display: block;
    }
  }
  /* .menu-content-mobile {
    width: 50%;
    height: 500px;
    z-index: 1000000eh;
    border: 1px solid red;
    background-color: #fff;
  } */
  .hidden {
    transform: translateX(-100%) !important;
  }
  .show {
    transform: translateX(0%) !important;
  }
  .ccc:nth-child(2) .submenu .product {
    display: none;
  }
  .ccc:nth-child(4) .submenu .cost {
    display: none;
  }
  .ccc:nth-child(5) .submenu {
    width: 200px;
    position: absolute;
    top: 35px;
    left: 415px;
  }
  .ccc:nth-child(5) .submenu .submenu-content .left {
    width: 100%;
  }
  .ccc:nth-child(5) .submenu .submenu-content .left .list-top {
    display: flex;
    flex-direction: column;
  }
  .ccc:nth-child(5) .submenu .cost {
    display: none;
  }
  .ccc:nth-child(5) .submenu .product {
    display: none;
  }
  .ccc:nth-child(5) .submenu .image {
    display: none;
  }
  .ccc:nth-child(6) .submenu .cost {
    display: none;
  }
  .ccc:nth-child(7) .submenu .submenu-content {
    display: none;
  }
  .ccc:nth-child(8) .submenu .submenu-content {
    display: none;
  }
  .ccc:nth-child(9) .submenu .submenu-content {
    display: none;
  }
  .ccc:last-child .submenu .cost {
    display: none;
  }
  .ccc:last-child .submenu .product {
    display: none;
  }
  .ccc:last-child .submenu .image {
    display: none;
  }
  .ccc:last-child .submenu {
    width: 200px;
    position: absolute;
    top: 35px;
    right: 50px;
    left: 90%;
  }
  .ccc:last-child .submenu .submenu-content .left .list-top {
    display: flex;
    flex-direction: column;
  }
  //menu item position:
  /* .container .menu a {
    text-decoration: none;
    color: #000;

    opacity: 1;
    font-family: "work sans", sans serif;
    font-size: 1.5em;
    font-weight: 400;
    transition: 200ms;
  }
  a:hover {
    opacity: 0.5;
  }
  ul {
    padding: 0;
    list-style-type: none;
    border: 1px solid red;
  }

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .content {
    border-radius: 20px;
    width: 100%;
    height: auto;
    background-color: #f5f6fa;
    z-index: 100000000;
  }
  nav {
    background-color: #1e1e23;
    height: 65px;
  }

  #menuToggle {
    display: flex;
    flex-direction: column;
    position: relative;
    top: 25px;
    left: 25px;
    z-index: 1;
    -webkit-user-select: none;
    user-select: none;
  }

  #menuToggle input {
    display: flex;
    width: 40px;
    height: 32px;
    position: absolute;
    cursor: pointer;
    opacity: 0;
    z-index: 2;
  }

  #menuToggle span {
    display: flex;
    width: 29px;
    height: 30px;
    margin-bottom: 5px;
    position: relative;
    background: #ffffff;
    border-radius: 3px;
    z-index: 1;
    transform-origin: 5px 0px;
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
      background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
  }

  #menuToggle span:first-child {
    transform-origin: 0% 0%;
  }

  #menuToggle span:nth-last-child(2) {
    transform-origin: 0% 100%;
  }

  #menuToggle input:checked ~ span {
    opacity: 1;
    transform: rotate(45deg) translate(-3px, -1px);
    background: #36383f;
  }
  #menuToggle input:checked ~ span:nth-last-child(3) {
    opacity: 0;
    transform: rotate(0deg) scale(0.2, 0.2);
  }

  #menuToggle input:checked ~ span:nth-last-child(2) {
    transform: rotate(-45deg) translate(0, -1px);
  }

  #menu {
    position: absolute;
    width: 500px;
    height: 800px;
    box-shadow: 0 0 10px #85888c;
    margin: -25px 0 0 -50px;
    padding: 0px 0px 0px 30px;
    padding-top: 50px;
    background-color: #f5f6fa;
    -webkit-font-smoothing: antialiased;
    transform-origin: 0% 0%;
    transform: translate(-100%, 0);
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
  }

  #menu li {
    padding: 10px 0;
    transition-delay: 2s;
    color: #000;
  }

  #menuToggle input:checked ~ ul {
    transform: none;
  } */
`;
export const NavItemWrapper = styled.div`
  color: #000;
  padding: 0.5rem;
  list-style-type: none;
  white-space: nowrap;
  overflow: hidden;
  li a {
    text-decoration: none;
    color: #fff;
    padding-bottom: 10px;
    font-size: 0.85rem;
  }
  .svg-inline--fa {
    margin-right: 6px;
  }
  li a:hover {
    color: red;
  }
  .submenu {
    position: absolute;
    top: 35px;
    left: 0;
    right: 0;
    bottom: 0;
    display: none;
    width: 100%;
    height: auto;
    z-index: 10000000;
    background-color: #ffff;
  }
  .submenu-content {
    background-color: #fff;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  li:hover .submenu {
    display: block;
  }
  .left {
    padding: 10px;
  }
  .top {
    margin-bottom: 20px;
  }
  .list-top {
    -webkit-column-count: 3;
    -moz-column-count: 3;
    column-count: 3;
    list-style-type: none;
  }
  .list-top li {
    padding: 10px 20px 0 5px;
    font-size: 0.8rem;
  }
  .list-bottom {
    -webkit-column-count: 3;
    -moz-column-count: 3;
    column-count: 3;
    list-style-type: none;
  }
  .list-bottom li {
    padding: 10px 20px 0 5px;
    font-size: 0.8rem;
  }
  .top .title {
    font-size: 0.8rem;
  }
  .bottom:first-child {
    display: none;
  }
  .bottom .title {
    font-size: 0.8rem;
  }
  .bottom {
    margin-top: 20px;
  }
  .list-center {
    -webkit-column-count: 3;
    -moz-column-count: 3;
    column-count: 3;
    list-style-type: none;
  }
  .center .title {
    font-size: 0.8rem;
  }
  .list-center li {
    padding: 10px 20px 0 5px;
    font-size: 0.8rem;
  }
  .cost {
    border-left: 1px solid #ccc;
    padding: 10px 90px 0px 5px;
  }
  .list-cost {
    list-style-type: none;
  }
  .cost .title {
    font-size: 0.8rem;
  }
  .list-cost li {
    padding-top: 10px;
    font-size: 0.8rem;
  }
  .product {
    display: flex;
    border-left: 1px solid #ccc;
    flex-direction: column;
    padding: 10px 90px 0px 20px;
  }
  .product-item {
    display: flex;
  }
  .product .title-product:nth-child(2) {
    display: none;
  }
  .product-item .product-image {
    width: 80px;
    height: 80px;
    display: block;
  }
  .product-item .product-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .product .content {
    display: flex;
    padding: 0 10px;
    flex-direction: column;
  }
  .product .content .name-product {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 230px;
    display: block;
  }
  .image {
    width: 230px;
    display: block;
    margin: 10px;
  }
  .image img {
    width: 100%;
    object-fit: cover;
  }
`;

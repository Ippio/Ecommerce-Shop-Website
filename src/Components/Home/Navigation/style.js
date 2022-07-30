import styled from "styled-components";
export const NavWrapper = styled.div`
  width: 100%;
  background-color: #000;
  color: #fff;
  .list-nav {
    margin: 0 100px;
    display: flex;
    position: relative;
    justify-content: space-between;
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
    `
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
`

import styled from "styled-components";

export const ProductsWrapper = styled.div`
  width: 100%;
  margin-top: 20px;
  background-color: #fff;
`;

export const PhoneProductWrapper = styled.div`
  margin: 0 100px;
  border-radius: 5px;
  margin-bottom: 40px;
  border: 1px solid #ccc;
  .list-product {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .title {
    margin: 10px 15px 0 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .title h3 {
    font-size: 26px;
    font-weight: bold;
    margin-left: 15px;
  }
  /* a {
  background-image: linear-gradient(
    to right,
    #54b3d6,
    #54b3d6 50%,
    #000 50%
  );
  background-size: 200% 100%;
  background-position: -100%;
  display: inline-block;
  position: relative;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all 0.3s ease-in-out;
}

a:before{
  content: '';
  background: #54b3d6;
  display: block;
  position: absolute;
  bottom: -3px;
  left: 0;
  width: 0;
  height: 2px;
  transition: all 0.3s ;
}

a:hover {
 background-position: 0;
}

a:hover::before{
  width: 100%;
} */
  a {
    color: #0168fa;
    text-decoration: none;
    background-color: transparent;
    position: relative;
    cursor: pointer;
  }
  a:before {
    content: " ";
    position: absolute;
    left: 0;
    bottom: -4px;
    width: 100%;
    height: 2px;
    background-color: #000;
    transform: scale(0);
    transition: transform 0.5s ease;
  }
  a:hover {
    text-decoration: none;
    outline: none;
    color: #000;
  }
  a:hover:before {
    transform: scale(1);
  }
`;
export const LaptopProductWrapper = styled.div`
  margin: 0 100px 40px;
  border-radius: 5px;
  border: 1px solid #ccc;
  .list-product {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .title {
    margin: 10px 15px 0 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .title h3 {
    font-size: 26px;
    font-weight: bold;
    margin-left: 15px;
  }
  a {
    color: #0168fa;
    text-decoration: none;
    background-color: transparent;
    position: relative;
    cursor: pointer;
  }
  a:before {
    content: " ";
    position: absolute;
    left: 0;
    bottom: -4px;
    width: 100%;
    height: 2px;
    background-color: #000;
    transform: scale(0);
    transition: transform 0.5s ease;
  }
  a:hover {
    text-decoration: none;
    outline: none;
    color: #000;
  }
  a:hover:before {
    transform: scale(1);
  }
`;
export const TabletProductWrapper = styled.div`
  margin: 0 100px;
  border-radius: 5px;
  border: 1px solid #ccc;
  .list-product {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .title {
    margin: 10px 15px 0 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .title h3 {
    font-size: 26px;
    font-weight: bold;
    margin-left: 15px;
  }
  a {
    color: #0168fa;
    text-decoration: none;
    background-color: transparent;
    position: relative;
    cursor: pointer;
  }
  a:before {
    content: " ";
    position: absolute;
    left: 0;
    bottom: -4px;
    width: 100%;
    height: 2px;
    background-color: #000;
    transform: scale(0);
    transition: transform 0.5s ease;
  }
  a:hover {
    text-decoration: none;
    outline: none;
    color: #000;
  }
  a:hover:before {
    transform: scale(1);
  }
`;
export const ProductWrapper = styled.div`
  display: flex;
  height: 100%;
  width: calc((100% - 45px) / 4);
  margin-top: 20px;
  justify-content: center;
  flex-direction: column;
  padding: 15px;
  border-radius: 6px;
  background-image: url("/assets/images/khung-product.png");
  background-repeat: no-repeat;
  background-position: center top 15px;
  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }
  &:hover .list-btn {
    display: block;
  }
  .image {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 60px auto;
  }
  img {
    width: 100px;
    height: 100px;
    object-fit: cover;
  }
  .content {
    display: flex;
    flex-direction: column;
    background-color: #f8f9fa;
    border-radius: 10px;
  }
  .content .title {
    font-size: 1.2rem;
    font-weight: bold;
    font-family: "Helvetica Neue", Helvetica;
  }
  .content .cost {
    margin: 20px 0;
    border-radius: 30px;
  }
  .content .cost span {
    background-color: #cb1a21;
    color: #fff;
    padding: 5px 8px;
    border-radius: 30px;
  }
  .content .info {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .content .info {
    background-color: #cb1a21;
    padding: 3px 8px;
    border-radius: 30px;
    margin-bottom: 10px;
    font-size: 0.9rem;
    color: #fff;
  }
  .list-btn {
    display: none;
    margin: 20px 0 0 0;
  }
  .list-btn button {
    padding: 5px 8px;
    font-size: 18px;
    border-radius: 5px;
    border: none;
    color: #fff;
    font-weight: bold;
  }
  .buy-now {
    margin-right: 30px;
    background-color: #cb1a21;
  }
  .cart {
    background-color: #00bfff;
  }
  .cart .icon {
    margin-right: 10px;
  }
`;


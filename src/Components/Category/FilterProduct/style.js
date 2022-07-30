import styled from 'styled-components'

export const FilterProductWrapper = styled.div`
display: flex;
margin: 0 100px;
justify-content: space-between;
.list-filter {
  width: 25%;
  border: 1px solid black;
}
.filter {
  display: flex;
  flex-wrap: wrap;
  font-size: 1rem;
  padding: 10px;
}
.filter-item {
  width: 50%;
  margin: 10px 0;
}
.filter-item span {
  margin-left: 10px;
}
label {
  width: 16px;
    height: 16px;
    cursor: pointer;
}
#checkbox {
  font-size: 20px;
}
.category {
  width: 75%;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
}
.check-category {
  font-size: 20px;
  font-family: "Helvetica Ne";
  font-weight: bold;
  margin: 20px 10px;
}
.list-product {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`
export const ProductItemWrapper = styled.div`
  display: flex;
  width: calc((100% - 30px) / 3);
  margin-top: 20px;
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
    margin: 60px 0;
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
  .link {
    text-decoration: none;
  }
  .content .title {
    font-size: 1.2rem;
    font-weight: bold;
    font-family: "Helvetica Neue", Helvetica;
  }
  .content .cost {
    margin: 10px 0;
    color: red;
  }
  .chip-size {
    display: flex;
    font-size: .8rem;
    color: #696969;
  }
  .chip {
    margin-right: 10px;
  }
  .icon-product {
    margin-right: 5px;
  }
  .memory {
    font-size: 1.1rem;
    margin: 15px 0;
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
    cursor: pointer;
    font-weight: bold;
  }
  .buy-now {
    margin-right: 30px;
    background-color: #cb1a21;
  }
  .buy-now:active {
    opacity: 0.8;
  }
  .cart {
    background-color: #00bfff;
  }
  .cart:active {
    opacity: 0.8;
  }
  .cart .icon {
    margin-right: 10px;
  }
`;
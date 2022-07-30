import styled from "styled-components";

export const HeaderWrapper = styled.div`
  width: 100%;
  height: auto;
  border: 1px solid #000;
  padding: 10px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #cd1817;
  padding: 0 100px;
  .header-left {
    display: flex;
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
  .cart-icon {
    text-decoration: none;
  }
  .btn-search {
    font-size: 20px;
    padding: 8px 20px;
    border: none;
    border-radius: 0 5px 5px 0;
    cursor: pointer;
  }
`;

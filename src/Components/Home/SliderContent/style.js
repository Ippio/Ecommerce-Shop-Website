import styled from "styled-components";

export const SliderContentWrapper = styled.div`
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  margin: -150px 100px 100px 100px;
  padding: 5px;
  border-radius: 5px;
  position: relative;
  background-color: #fff;
  z-index: 10000;
  .wrapper {
    display: flex;
  }
  .content-left {
  }
  .content-right {
    padding-left: 15px;
  }
  .content-top {
    padding-bottom: 10px;
  }
  .content-bottom .content-title {
    display: flex;
    justify-content: space-between;
    padding-bottom: 8px;
    margin-right: 25px;
  }
  .content-title .hove a {
    color: #0168fa;
    text-decoration: none;
    background-color: transparent;
    position: relative;
    cursor: pointer;
  }
  .hove a:before {
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
  .content-title .hove a:hover {
    text-decoration: none;
    outline: none;
    color: #000;
  }
  .hove:hover a:before {
    transform: scale(1);
  }
  .content-image {
    display: flex;
    margin-bottom: 8px;
  }
  .content-image .title-img {
    padding-left: 5px;
  }
  //content
  .hehe {
    position: relative;
    font-size: 16px;
    color: #666;
    transition: 0.5s;
  }
  .hehe::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;

    transition: 0.5s;
    transform: scale(0.9);
    z-index: -1;
  }

  .hehe:hover::before {
    transform: scale(1.1);
    box-shadow: 0 0 15px #fff;
  }

  .hehe:hover {
    color: red;
    text-shadow: 0 0 5px red;
  }
`;

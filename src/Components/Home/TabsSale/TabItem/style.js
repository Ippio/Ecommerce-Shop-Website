import styled from "styled-components";
import { device } from "./../../../../contants";

export const TabItemWrapper = styled.div`
  width: 100%;

  .list-tab {
    list-style-type: none;
    margin: 0 100px;
    display: flex;
    align-items: center;
    border: 1px solid #cacaca;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    @media ${device.laptop} {
    margin: 0 50px;
    }
    @media ${device.tablet} {
      margin: 0 50px;
    }
    @media ${device.mobile} {
      margin: 0 30px;
    }
    @media ${device.mobileL} {
      margin: 0 15px;
    }
    @media ${device.mobileM} {
      margin: 0 15px;
    }
    @media ${device.mobileS} {
      margin: 0 15px;
    }
  }
  .tab-item {
    width: calc(100% / 4);
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
    font-size: 1.2em;
    font-weight: 500;
    cursor: pointer;
    padding: 20px 10px;
    color: #000;
    @media ${device.laptop} {
      font-size: 1em;
    }
    @media ${device.tablet} {
      font-size: .8em;
    }
    @media ${device.mobile} {
      font-size: .6em;
    }
    @media ${device.mobileL} {
      font-size: .5em;
    }
    @media ${device.mobileM} {
      font-size: .5em;
    }
    @media ${device.mobileS} {
      font-size: .5em;
    }
  }
  .tab-item:hover {
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 2);
  }
  .active {
    color: #fff;
    background-color: #9966ff;
  }
  .title {
    margin-bottom: 10px;
  }
  .list-content {
    list-style-type: none;
    padding: 1.5rem;
  }
  .content-item {
    font-size: 15px;
  }
  .button {
    background-color: #004a7f;

    -webkit-border-radius: 10px;

    border-radius: 10px;

    border: none;

    color: #ffffff;

    display: inline-block;

    font-family: Arial;

    font-size: 20px;

    padding: 5px;

    text-align: center;

    text-decoration: none;
  }
  @-webkit-keyframes glowing {
    0% {
      background-color: #004a7f;
      -webkit-box-shadow: 0 0 3px #004a7f;
    }
    50% {
      background-color: #0094ff;
      -webkit-box-shadow: 0 0 10px #0094ff;
    }
    100% {
      background-color: #004a7f;
      -webkit-box-shadow: 0 0 3px #004a7f;
    }
  }

  @-moz-keyframes glowing {
    0% {
      background-color: #004a7f;
      -moz-box-shadow: 0 0 3px #004a7f;
    }
    50% {
      background-color: #0094ff;
      -moz-box-shadow: 0 0 10px #0094ff;
    }
    100% {
      background-color: #004a7f;
      -moz-box-shadow: 0 0 3px #004a7f;
    }
  }

  @-o-keyframes glowing {
    0% {
      background-color: #004a7f;
      box-shadow: 0 0 3px #004a7f;
    }
    50% {
      background-color: #0094ff;
      box-shadow: 0 0 10px #0094ff;
    }
    100% {
      background-color: #004a7f;
      box-shadow: 0 0 3px #004a7f;
    }
  }

  @keyframes glowing {
    0% {
      background-color: #004a7f;
      box-shadow: 0 0 3px #004a7f;
    }
    50% {
      background-color: #0094ff;
      box-shadow: 0 0 10px #0094ff;
    }
    100% {
      background-color: #004a7f;
      box-shadow: 0 0 3px #004a7f;
    }
  }

  .button {
    -webkit-animation: glowing 1500ms infinite;
    -moz-animation: glowing 1500ms infinite;
    -o-animation: glowing 1500ms infinite;
    animation: glowing 1500ms infinite;
  }
`;

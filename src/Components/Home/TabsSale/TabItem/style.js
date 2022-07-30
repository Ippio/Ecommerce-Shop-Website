import styled from "styled-components";

export const TabItemWrapper = styled.div`
  width: 100%;

  .list-tab {
    list-style-type: none;
    margin: 0 100px;
    display: flex;
    align-items: center;
    border: 1px solid #cacaca;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2)
  }
  .tab-item {
    width: calc(100% / 4);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 1.2em;
    font-weight: 500;
    cursor: pointer;
    padding: 20px 10px;
    color: #000;
  }
  .tab-item:hover {
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 2);
  }
  .active {
    color: #fff;
    background-color: red;
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
  0% { background-color: #004A7F; -webkit-box-shadow: 0 0 3px #004A7F; }
  50% { background-color: #0094FF; -webkit-box-shadow: 0 0 10px #0094FF; }
  100% { background-color: #004A7F; -webkit-box-shadow: 0 0 3px #004A7F; }
}
 
@-moz-keyframes glowing {
  0% { background-color: #004A7F; -moz-box-shadow: 0 0 3px #004A7F; }
  50% { background-color: #0094FF; -moz-box-shadow: 0 0 10px #0094FF; }
  100% { background-color: #004A7F; -moz-box-shadow: 0 0 3px #004A7F; }
}
 
@-o-keyframes glowing {
  0% { background-color: #004A7F; box-shadow: 0 0 3px #004A7F; }
  50% { background-color: #0094FF; box-shadow: 0 0 10px #0094FF; }
  100% { background-color: #004A7F; box-shadow: 0 0 3px #004A7F; }
}
 
@keyframes glowing {
  0% { background-color: #004A7F; box-shadow: 0 0 3px #004A7F; }
  50% { background-color: #0094FF; box-shadow: 0 0 10px #0094FF; }
  100% { background-color: #004A7F; box-shadow: 0 0 3px #004A7F; }
}
 
.button {
  -webkit-animation: glowing 1500ms infinite;
  -moz-animation: glowing 1500ms infinite;
  -o-animation: glowing 1500ms infinite;
  animation: glowing 1500ms infinite;
}
`;

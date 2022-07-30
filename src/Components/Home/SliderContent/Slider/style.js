import styled from 'styled-components'

export const SliderWrapper = styled.div`
width: 800px;

.wrapper {
  width: 800px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.slider-content {
  width: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
}
.list-dot {
  display: flex;
  justify-content: center;
  z-index: 200;
  margin-top: 20px;
}
.btn-prev {
  margin-right: -50px;
  z-index: 100;
  font-size: 2rem;
  padding: 5px 15px;
  border-radius: 50%;
  border: none;
}
.btn-next {
  margin-left: -50px;
  z-index: 100;
  font-size: 2rem;
  padding: 5px 15px;
  border-radius: 50%;
  border: none;
}
.dot {
  border-radius: 50%;
  cursor: pointer;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -ms-border-radius: 50%;
  -o-border-radius: 50%;
  width: 10px;
  height: 10px;
  margin-bottom: 10px;
  border: 1px solid #000;
  margin-right: 6px;
}
.active {
  background-color: #000;
}
`
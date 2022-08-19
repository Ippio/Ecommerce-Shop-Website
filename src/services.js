import axios from "axios";

const getListProduct = async () => {
  try {
    const response = axios.get("http://localhost:5001/product/type/dien-thoai");
    return response;
  } catch (err) {}
};
const getListProductHome = async () => {
  try {
    const response = axios.get("http://localhost:5001/home");
    return response;
  } catch (err) {}
};


export {getListProduct,getListProductHome}
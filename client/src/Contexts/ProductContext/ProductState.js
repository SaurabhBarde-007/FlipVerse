import React, { useReducer } from "react";
import axios from "axios";
// import { API } from "../../config";
import productReducer from "./productReducer";
import productContext from "./productContext";
// import { setAuthSellerToken } from "../../utils/setAuthToken";
import { GET_ALL_PRODUCTS } from "../types";

const ProductState = (props) => {
  const initialState = {
    allProducts: [],
  };

  const [state, dispatch] = useReducer(productReducer, initialState);

  const getAllProducts = async (formData) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.get("/api/products", config);
      console.log(res);
      dispatch({ type: GET_ALL_PRODUCTS, payload: res.data });
    } catch (error) {
      console.log(error);
      //   dispatch({ type: ADD_PRODUCT_FAIL, payload: error.message });
    }
  };

  return (
    <productContext.Provider
      value={{ allProducts: state.allProducts, getAllProducts }}
    >
      {props.children}
    </productContext.Provider>
  );
};

export default ProductState;
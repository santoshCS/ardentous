// store.js

import { createStore } from "redux";

// Initial state
const initialState = {
  products: []
};

// Actions
const SET_PRODUCTS = "SET_PRODUCTS";
const ADD_PRODUCT = "ADD_PRODUCT";
const UPDATE_PRODUCT = "UPDATE_PRODUCT";
const DELETE_PRODUCT = "DELETE_PRODUCT";

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        products: action.payload
      };
    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products.products, action.payload]
      };
    case UPDATE_PRODUCT:
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payload.id ? action.payload : product
        )
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload
        )
      };
    default:
      return state;
  }
};

// Action creators
export const setProducts = (products) => ({
  type: SET_PRODUCTS,
  payload: products
});

export const addProduct = (product) => ({
  type: ADD_PRODUCT,
  payload: product
});

export const updateProduct = (product) => ({
  type: UPDATE_PRODUCT,
  payload: product
});

export const deleteProduct = (productId) => ({
  type: DELETE_PRODUCT,
  payload: productId
});

// Create store
const store = createStore(reducer);

export default store;

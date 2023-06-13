import {
    SET_PRODUCTS,
    ADD_PRODUCT,
    UPDATE_PRODUCT,
    DELETE_PRODUCT
  } from "../action/products";
  
  const initialState = {
    products: []
  };
  
  const productsReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_PRODUCTS:
        return { ...state, products: action.products };
      case ADD_PRODUCT:
        return { ...state, products: [...state.products, action.product] };
      case UPDATE_PRODUCT:
        return {
          ...state,
          products: state.products.map((product) =>
            product.id === action.id ? action.updatedProduct : product
          )
        };
      case DELETE_PRODUCT:
        return {
          ...state,
          products: state.products.filter((product) => product.id !== action.id)
        };
      default:
        return state;
    }
  };
  
  export default productsReducer;
  
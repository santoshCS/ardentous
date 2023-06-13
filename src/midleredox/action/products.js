export const SET_PRODUCTS = "SET_PRODUCTS";
export const ADD_PRODUCT = "ADD_PRODUCT";
export const UPDATE_PRODUCT = "UPDATE_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";

export const setProducts = (products) => ({
  type: SET_PRODUCTS,
  products
});

export const addProduct = (product) => ({
  type: ADD_PRODUCT,
  product
});

export const updateProduct = (id, updatedProduct) => ({
  type: UPDATE_PRODUCT,
  id,
  updatedProduct
});

export const deleteProduct = (id) => ({
  type: DELETE_PRODUCT,
  id
});

import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setProducts } from "./midleredox/action/products";
import ProductList from "./components/ProductList";
import AddProductForm from "./components/AddProductForm";
import UpdateProductForm from "./components/UpdateProductForm";

const App = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products");
        if (Array.isArray(response.data)) {
          dispatch(setProducts(response.data));
        } else {
          console.error("Fetched data is not an array");
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [dispatch]);

  return (
    <div className="App">
      <AddProductForm />
      <UpdateProductForm />
      <ProductList />
    </div>
  );
};

export default App;

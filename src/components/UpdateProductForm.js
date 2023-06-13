import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateProduct } from "../midleredox/action/products";

const UpdateProductForm = () => {
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  const handleSelect = (e) => {
    const selectedProduct = products.find(
      (product) => product.id === parseInt(e.target.value, 10)
    );
    setId(selectedProduct.id);
    setTitle(selectedProduct.title);
    setDescription(selectedProduct.description);
    setPrice(selectedProduct.price);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedProduct = {
      id,
      title,
      description,
      price,
      thumbnail: "https://via.placeholder.com/50"
    };

    dispatch(updateProduct(id, updatedProduct));

    setId("");
    setTitle("");
    setDescription("");
    setPrice("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Update Product</h2>
      <select value={id} onChange={handleSelect}>
        <option value="">Select a product</option>
        {products.map((product) => (
          <option key={product.id} value={product.id}>
            {product.title}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button type="submit">Update Product</button>
    </form>
  );
};

export default UpdateProductForm;

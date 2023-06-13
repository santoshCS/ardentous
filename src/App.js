import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addProduct,
  updateProduct,
  deleteProduct,
  setProducts
} from "./store/Store";

const App = () => {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Fetch listing data from the fake API
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => dispatch(setProducts(data)));
  }, [dispatch]);

  const handleAddProduct = (e) => {
    e.preventDefault();

    const newProduct = {
      id: new Date().getTime(),
      title,
      description,
      price,
      imgUrl
    };
    const finalProduct = { ...products, newProduct };
    console.log(newProduct);
    dispatch(addProduct(finalProduct));

    setTitle("");
    setDescription("");
    setPrice("");
  };

  const handleUpdateProduct = (e, product) => {
    e.preventDefault();

    const updatedProduct = {
      ...product,
      title,
      description,
      price
    };

    dispatch(updateProduct(updatedProduct));

    setTitle("");
    setDescription("");
    setPrice("");
  };

  const handleDeleteProduct = (productId) => {
    dispatch(deleteProduct(productId));
  };

  return (
    <div>
      <h1>Product List</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
            <th>Thumbnail</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products?.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>{product.description}</td>
              <td>{product.price}</td>
              <td>
                <img src={product.thumbnail} alt={product.title} />
              </td>
              <td>
                <button onClick={() => handleDeleteProduct(product.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Add Product</h2>
      <form onSubmit={handleAddProduct}>
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
          type="text"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type="text"
          placeholder="url"
          value={imgUrl}
          onChange={(e) => setImgUrl(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      <h2>Update Product</h2>
      <form onSubmit={(e) => handleUpdateProduct(e, selectedProduct)}>
        <select
          value={selectedProduct ? selectedProduct.id : ""}
          onChange={(e) =>
            setSelectedProduct(
              products.find((product) => product.id === +e.target.value)
            )
          }
        >
          <option value="">Select a product</option>
          {products?.map((product) => (
            <option value={product.id} key={product.id}>
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
          type="text"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button type="submit" disabled={!selectedProduct}>
          Update
        </button>
      </form>
    </div>
  );
};

export default App;

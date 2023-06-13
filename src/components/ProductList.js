import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteProduct } from "../midleredox/action/products";

const ProductList = () => {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
  };

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Description</th>
          <th>Price</th>
          <th>Thumbnail</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {Array.isArray(products) &&
          products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>{product.description}</td>
              <td>{product.price}</td>
              <td>
                <img src={product.thumbnail} alt={product.title} width="50" />
              </td>
              <td>
                <button onClick={() => handleDelete(product.id)}>Delete</button>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default ProductList;
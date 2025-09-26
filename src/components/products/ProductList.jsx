import React from 'react';
import { Table, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const ProductList = () => {
  // Dummy data for demonstration
  const products = [
    { id: 1, name: 'Laptop', price: 1200, category: 'Electronics' },
    { id: 2, name: 'Coffee Mug', price: 15, category: 'Home Goods' },
    { id: 3, name: 'Keyboard', price: 85, category: 'Electronics' },
  ];

  return (
    <div>
      <h3>Product List</h3>
      <div className="d-flex justify-content-end mb-3">
        <LinkContainer to="/admin/products/add">
          <Button variant="primary">Add New Product</Button>
        </LinkContainer>
      </div>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>${product.price}</td>
              <td>{product.category}</td>
              <td>
                <LinkContainer to={`/admin/products/edit/${product.id}`} className="me-2">
                  <Button variant="info" size="sm">Edit</Button>
                </LinkContainer>
                <Button variant="danger" size="sm">Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ProductList;
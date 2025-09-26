import React, { useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
  const [productData, setProductData] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setProductData({ ...productData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Adding product:', productData);
    navigate('/admin/products/list');
  };

  return (
    <Card className="p-4 shadow">
      <h3 className="mb-4">Add New Product</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="productName">
          <Form.Label>Product Name</Form.Label>
          <Form.Control type="text" name="name" placeholder="Enter product name" onChange={handleChange} required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="productDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" rows={3} name="description" onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="productPrice">
          <Form.Label>Price</Form.Label>
          <Form.Control type="number" name="price" placeholder="Enter price" onChange={handleChange} required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="productCategory">
          <Form.Label>Category</Form.Label>
          <Form.Control type="text" name="category" placeholder="Enter category" onChange={handleChange} required />
        </Form.Group>
        <Button variant="primary" type="submit" className="w-100">
          Add Product
        </Button>
      </Form>
    </Card>
  );
};

export default AddProduct;
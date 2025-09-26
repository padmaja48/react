import React from 'react';
import { Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Sidebar = () => {
  return (
    <Nav className="flex-column bg-light p-3 border-end" style={{ minWidth: '200px' }}>
      <Nav.Item>
        <LinkContainer to="/admin/dashboard">
          <Nav.Link>Dashboard</Nav.Link>
        </LinkContainer>
      </Nav.Item>
      <Nav.Item>
        <LinkContainer to="/admin/products/list">
          <Nav.Link>Products</Nav.Link>
        </LinkContainer>
      </Nav.Item>
      <Nav.Item>
        <LinkContainer to="/admin/products/add">
          <Nav.Link>Add Product</Nav.Link>
        </LinkContainer>
      </Nav.Item>
      <Nav.Item>
        <LinkContainer to="/admin/users/list">
          <Nav.Link>Users</Nav.Link>
        </LinkContainer>
      </Nav.Item>
      <Nav.Item>
        <LinkContainer to="/admin/users/add">
          <Nav.Link>Add User</Nav.Link>
        </LinkContainer>
      </Nav.Item>
    </Nav>
  );
};

export default Sidebar;
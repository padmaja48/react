import React from 'react';
import { Card, Form, Button } from 'react-bootstrap';

const UserForm = () => {
  return (
    <Card className="p-4 shadow">
      <h3 className="mb-4">Add New User</h3>
      <Form>
        <Form.Group className="mb-3" controlId="userName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter user's name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="userEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter user's email" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Card>
  );
};

export default UserForm;
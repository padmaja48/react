import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

const Dashboard = () => {
  return (
    <div>
      <h3>Dashboard</h3>
      <Row>
        <Col md={4} className="mb-3">
          <Card bg="primary" text="white" className="shadow">
            <Card.Body>
              <Card.Title>Total Products</Card.Title>
              <Card.Text>150</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-3">
          <Card bg="success" text="white" className="shadow">
            <Card.Body>
              <Card.Title>Total Users</Card.Title>
              <Card.Text>75</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-3">
          <Card bg="info" text="white" className="shadow">
            <Card.Body>
              <Card.Title>Recent Sales</Card.Title>
              <Card.Text>42</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
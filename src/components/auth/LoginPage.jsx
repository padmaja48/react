import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const LoginPage = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Hardcoded credentials for frontend testing
  const HARDCODED_EMAIL = 'test@example.com';
  const HARDCODED_PASSWORD = 'password123';

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);

    // Check if the entered credentials match the hardcoded ones
    if (email === HARDCODED_EMAIL && password === HARDCODED_PASSWORD) {
      onLogin(); // Simulate a successful login
      navigate('/admin/dashboard');
    } else {
      setError('Invalid email or password.');
    }
  };

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="shadow-lg">
            <Card.Header as="h3" className="text-center">Log In</Card.Header>
            <Card.Body>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control 
                    type="email" 
                    placeholder="Enter email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control 
                    type="password" 
                    placeholder="Password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100">
                  Log In
                </Button>
              </Form>
              <hr />
              <div className="text-center">
                <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
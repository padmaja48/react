import React from 'react';
import { Container, Card } from 'react-bootstrap';

const HomePage = () => {
  return (
    <Container className="text-center my-5">
      <Card className="p-5 shadow">
        <h1>Welcome!</h1>
        <p className="lead">Please log in to access the admin dashboard.</p>
      </Card>
    </Container>
  );
};

export default HomePage;
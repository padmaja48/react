import React from 'react';
import { Container, Card } from 'react-bootstrap';

const NotFoundPage = () => {
  return (
    <Container className="text-center my-5">
      <Card className="p-5 shadow">
        <h1>404 - Not Found</h1>
        <p className="lead">The page you are looking for does not exist.</p>
      </Card>
    </Container>
  );
};

export default NotFoundPage;
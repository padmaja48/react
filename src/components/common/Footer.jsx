import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <Navbar bg="dark" variant="dark" className="mt-auto">
      <Container className="text-center text-white-50">
        <Navbar.Text className="mx-auto">
          &copy; 2025 Your Company. All Rights Reserved.
        </Navbar.Text>
      </Container>
    </Navbar>
  );
};

export default Footer;
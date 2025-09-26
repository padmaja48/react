import React from 'react';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from '../common/Header'; // Corrected path
import Sidebar from '../common/Sidebar'; // Corrected path
import Footer from '../common/Footer'; // Corrected path

const AdminLayout = ({ onLogout }) => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header onLogout={onLogout} />
      <div className="flex-grow-1 d-flex">
        <Sidebar />
        <Container fluid className="mt-3">
          {/* This is where the nested routes will render */}
          <Outlet /> 
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default AdminLayout;
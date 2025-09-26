import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { isAuthenticated, logout } from './services/authService';

// Import all your components
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from './components/auth/LoginPage';
import SignupPage from './components/auth/SignupPage';
import AdminLayout from './components/admin/AdminLayout';
import Dashboard from './components/admin/Dashboard';
import ProductList from './components/products/ProductList';
import AddProduct from './components/products/AddProduct';
import UserList from './components/users/UserList';
import UserForm from './components/users/UserForm'; // Import the new component
import NotFoundPage from './pages/NotFoundPage';

const App = () => {
  const [authStatus, setAuthStatus] = useState(isAuthenticated());

  const handleLogin = () => {
    setAuthStatus(true);
  };

  const handleLogout = () => {
    logout();
    setAuthStatus(false);
  };

  const ProtectedRoute = ({ children }) => {
    return authStatus ? children : <Navigate to="/login" replace />;
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
        <Route path="/signup" element={<SignupPage />} />

        <Route path="/admin" element={<ProtectedRoute><AdminLayout onLogout={handleLogout} /></ProtectedRoute>}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="products/list" element={<ProductList />} />
          <Route path="products/add" element={<AddProduct />} />
          <Route path="users/list" element={<UserList />} />
          <Route path="users/add" element={<UserForm />} /> {/* New Route for Add User */}
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default App;
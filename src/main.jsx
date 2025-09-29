import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
//import './index.css'; // You can add your custom styles here
import { AuthContextProvider } from './context/AuthContext';
import { BrowserRouter } from 'react-router-dom';
import {Home} from './home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <AuthContextProvider>
      <App/>
  </AuthContextProvider>
  </BrowserRouter>
);

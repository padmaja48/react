// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import { isAuthenticated, logout } from './services/authService';

// // Import all your components
// import 'bootstrap/dist/css/bootstrap.min.css';
// import LoginPage from './components/auth/LoginPage';
// import SignupPage from './components/auth/SignupPage';
// import AdminLayout from './components/admin/AdminLayout';
// import Dashboard from './components/admin/Dashboard';
// import ProductList from './components/products/ProductList';
// import AddProduct from './components/products/AddProduct';
// import UserList from './components/users/UserList';
// import UserForm from './components/users/UserForm'; // Import the new component
// import NotFoundPage from './pages/NotFoundPage';

// const App = () => {
//   const [authStatus, setAuthStatus] = useState(isAuthenticated());

//   const handleLogin = () => {
//     setAuthStatus(true);
//   };

//   const handleLogout = () => {
//     logout();
//     setAuthStatus(false);
//   };

//   const ProtectedRoute = ({ children }) => {
//     return authStatus ? children : <Navigate to="/login" replace />;
//   };

//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Navigate to="/login" replace />} />
//         <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
//         <Route path="/signup" element={<SignupPage />} />

//         <Route path="/admin" element={<ProtectedRoute><AdminLayout onLogout={handleLogout} /></ProtectedRoute>}>
//           <Route path="dashboard" element={<Dashboard />} />
//           <Route path="products/list" element={<ProductList />} />
//           <Route path="products/add" element={<AddProduct />} />
//           <Route path="users/list" element={<UserList />} />
//           <Route path="users/add" element={<UserForm />} /> {/* New Route for Add User */}
//         </Route>

//         <Route path="*" element={<NotFoundPage />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;


import { useContext } from "react";
import { AuthContext } from "./services/context/AuthContext";
import axios from "axios";
import { useState, useEffect } from "react";

export function Home(){
    const {user, loggedIn, handleLogin, logout } = useContext(AuthContext);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const login = async() => {
        console.log(username, password);
        let response = await axios.post("http://localhost:8000/api/token/", {
            username,
            password
        });
        if(response.status === 200){
            let token = response.data.token;
            handleLogin(username, token);
            alert("Login successful");
        }else{
            alert("Login failed");
        }
    };

    const  handleLogout = () => {
        logout();
        alert("Logged out");
    }
    return <>
        <h1>Home Page</h1>
        <h1>{user}</h1>
        <h1>{loggedIn}</h1>


        <input placeholder="Username" onChange={(e)=>setUsername(e.target.value)}/>
        <input placeholder="Password" type="password" onChange={(e)=>setPassword(e.target.value)}/>


        <button onClick={login}>Login</button>
        <button onClick={handleLogout}>Logout</button>


        { loggedIn && 
            <>
                <h2>Welcome, {user}</h2>
                <Products></Products>
            </>
        }
    </>
}

function Products() {
    const [products, setProducts] = useState([]);
    const { token, user } = useContext(AuthContext);

    const getProducts = async() => {

        console.log("Fetching products with token:", token);
        let response = await axios.get("http://localhost:8000/api/products/", {
            headers: {
                Authorization: `Token ${token}`
            }
        });
        if(response.status === 200){
            setProducts(response.data);
        }
        else{
            alert("Failed to fetch products");
            console.log(response);
        }
    }

    useEffect(() => {
        getProducts();
    }, []);

    
    return <>
            <h2>Products</h2>
            <ul>
                {products.map(product => (
                    <li key={product.id}>{product.name}</li>
                ))}
            </ul>
            </>
}
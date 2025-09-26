import { createContext, useState } from "react";

// Declare the context properly
export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false); // ✅ use camelCase consistently
  const [token, setToken] = useState(null); // ✅ use camelCase consistently

  function handleLogin(token) {
    setUser(user);
    setToken(token);
    setLoggedIn(true);
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
  };
  function handleLogout() {
    setUser(null);
    setToken(null);
    setLoggedIn(false);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };
  const logout = () => {
    setUser(null);
    setLoggedIn(false);
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };
  function getLoggedInUser() {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");
    return{
      token: token,
      user: user ? JSON.parse(user) : null
    };
  }

  return (
    <AuthContext.Provider value={{ user, loggedIn,  handleLogin, token, setToken, logout}}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
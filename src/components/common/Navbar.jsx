import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="navbar navbar-dark bg-dark px-3">
      <Link className="navbar-brand" to="/">MyApp</Link>
      <div>
        {user ? (
          <button className="btn btn-outline-light" onClick={logout}>
            Logout
          </button>
        ) : (
          <>
            <Link className="btn btn-outline-light mx-2" to="/login">Login</Link>
            <Link className="btn btn-outline-light mx-2" to="/signup">Signup</Link>
          </>
        )}
      </div>
    </nav>
  );
}

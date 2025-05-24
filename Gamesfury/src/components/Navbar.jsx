import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Gamesfury
      </Link>

      <div className="navbar-nav">
        <Link className="nav-link" to="/cart">
          Cart
        </Link>
        <Link className="nav-link" to="/profile">
          Profile
        </Link>
        <Link className="nav-link" to="/login">
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

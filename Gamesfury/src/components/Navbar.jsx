import { Link, NavLink, useLocation } from "react-router-dom";
import Avatar from "../assets/neon.jpg";

const Navbar = () => {
  return (
    <nav className="header navbar navbar-expand-lg navbar-dark">
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto gap-3">
          <li className="nav-item">
            <NavLink className="nav-link" to="store/discover">
              Discover
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="store/browse">
              Browse
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="store/news">
              News
            </NavLink>
          </li>
        </ul>

        <ul className="navbar-nav d-flex align-items-center gap-3">
          <li className="nav-item">
            <NavLink className="nav-link" to="store/wishlist">
              Wishlist
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="store/cart">
              Cart
            </NavLink>
          </li>

          <div className="vr my-2 mx-1 bg-light"></div>

          <li className="nav-item">
            <NavLink className="nav-link" to="/profile">
              <img className="profile-icon rounded-circle" src={Avatar} alt="REACT" />
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

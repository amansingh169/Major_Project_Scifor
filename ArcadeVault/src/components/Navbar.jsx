import { NavLink, Link, useNavigate } from "react-router-dom";
import { useContext, useState, useRef, useEffect } from "react";
import { UserContext } from "../contexts/UserContext";
import SearchBar from "./SearchBar";
import NavDropdown from "./NavDropdown";

const Navbar = () => {
  const { user, logout } = useContext(UserContext);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef();

  const handleLogout = () => {
    logout();
    setShowDropdown((prev) => !prev);
  };

  useEffect(() => {
    let handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) setShowDropdown(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="header navbar navbar-expand">
      <ul className="navbar-nav me-auto gap-2 align-items-center">
        <li className="nav-item d-none d-lg-block">
          <NavLink className="back-arrow nav-link fs-6" onClick={() => navigate(-1)}>
            <i className="bi bi-chevron-left p-2"></i>
          </NavLink>
        </li>

        <SearchBar />

        <NavDropdown />

        <div className="d-none d-lg-flex gap-2">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">
              Discover
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/browse">
              Browse
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/news">
              News
            </NavLink>
          </li>
        </div>
      </ul>

      <ul className="navbar-nav d-flex align-items-center gap-2">
        <div className="d-flex gap-2">
          <li className="nav-item">
            <NavLink className="nav-link d-none d-lg-block" to="/wishlist">
              Wishlist
            </NavLink>

            <NavLink className="nav-link d-none d-md-block d-lg-none" to="/wishlist">
              <i className="bi bi-check-circle fs-4 d-lg-none"></i>
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link d-none d-lg-block" to="/cart">
              Cart
            </NavLink>

            <NavLink className="nav-link d-none d-md-block d-lg-none" to="/cart">
              <i className="bi bi-cart fs-4 d-lg-none"></i>
            </NavLink>
          </li>
        </div>

        <div className="vr my-2 mx-1 bg-light d-none d-md-block"></div>

        {user ? (
          <li className="nav-item" ref={dropdownRef}>
            <button
              id="avatar"
              onClick={() => {
                setShowDropdown((prev) => !prev);
              }}
              className="nav-link"
            >
              <img
                className="profile-icon rounded-circle"
                src={`https://api.dicebear.com/7.x/initials/svg?seed=${user.username}`}
                alt="Avatar"
              />
            </button>

            <div
              id="profile-dropdown"
              className={`dropdown-box p-2 rounded-4 ${showDropdown ? "show" : ""}`}
            >
              <ul className="dropdown-content d-flex flex-column p-0">
                <Link
                  onClick={() => {
                    setShowDropdown((prev) => !prev);
                  }}
                  className="dropdown-link rounded-3 text-white"
                  to="/profile"
                >
                  View Profile
                </Link>
                <Link
                  onClick={() => {
                    setShowDropdown((prev) => !prev);
                  }}
                  className="dropdown-link rounded-3 text-white"
                  to="/library"
                >
                  Library
                </Link>
                <Link className="dropdown-link rounded-3 text-white" onClick={handleLogout}>
                  Logout
                </Link>
              </ul>
            </div>
          </li>
        ) : (
          <li className="nav-item">
            <NavLink className="nav-link" to="/login">
              Login
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;

import { NavLink, Link } from "react-router-dom";
import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";

const Navbar = () => {
  const { user, logout } = useContext(UserContext);

  const [showDropdown, setShowDropdown] = useState(false);

  const handleLogout = () => {
    logout();
    setShowDropdown((prev) => !prev);
  };

  return (
    <nav className="header navbar navbar-expand-lg navbar-dark">
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto gap-3">
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
        </ul>

        <ul className="navbar-nav d-flex align-items-center gap-3">
          <li className="nav-item">
            <NavLink className="nav-link" to="/wishlist">
              Wishlist
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/cart">
              Cart
            </NavLink>
          </li>

          <div className="vr my-2 mx-1 bg-light"></div>

          {user ? (
            <li className="nav-item">
              <button
                id="avatar"
                onClick={() => {
                  console.log(showDropdown);
                  setShowDropdown((prev) => !prev);
                }}
                className="nav-link"
              >
                <img
                  className="profile-icon rounded-circle"
                  src={`https://api.dicebear.com/7.x/initials/svg?seed=${user.username}`}
                  alt="REACT"
                />
              </button>

              <div id="profile-dropdown" className={`p-2 rounded-4 ${showDropdown ? "show" : ""}`}>
                {/* <ul className="d-flex flex-column p-0">
                  <li className="dropdown-link rounded-3">
                    <Link to="/profile">View Profile</Link>
                  </li>
                  <li className="dropdown-link rounded-3">
                    <Link to="/library">My Library</Link>
                  </li>
                  <li className="dropdown-link rounded-3">
                    <Link to="/settings">Settings</Link>
                  </li>
                  <li className="dropdown-link rounded-3">
                    <Link>Logout</Link>
                  </li>
                </ul> */}

                <ul className="d-flex flex-column p-0">
                  <Link className="dropdown-link rounded-3" to="/profile">
                    View Profile
                  </Link>
                  <Link className="dropdown-link rounded-3" to="/library">
                    My Library
                  </Link>
                  <Link className="dropdown-link rounded-3" to="/settings">
                    Settings
                  </Link>
                  <Link onClick={handleLogout} className="dropdown-link rounded-3">
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
      </div>

      {/* {showDropdown && (
        )} */}
    </nav>
  );
};

export default Navbar;

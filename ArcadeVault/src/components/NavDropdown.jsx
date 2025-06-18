import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const routes = [
  { name: "Discover", path: "/" },
  { name: "Browse", path: "/browse" },
  { name: "News", path: "/news" },
  { name: "Wishlist", path: "/wishlist" },
  { name: "Cart", path: "/cart" },
];

const NavDropdown = () => {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState("Navigate");

  useEffect(() => {
    const matched = routes.find((route) =>
      route.path === "/" ? location.pathname === "/" : location.pathname.startsWith(route.path)
    );
    setCurrentPage(matched ? matched.name : "Discover");
  }, [location]);

  return (
    <div className="nav-dropdown dropdown d-md-none my-3">
      <button
        className="btn text-primary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {currentPage}
      </button>
      <ul className="dropdown-menu">
        {routes.map((route) => (
          <li key={route.path}>
            <Link to={route.path} className="dropdown-item">
              {route.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavDropdown;

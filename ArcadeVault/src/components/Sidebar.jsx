import { NavLink, useLocation } from "react-router-dom";

const Sidebar = () => {
  const storePages = ["/browse", "/news", "/wishlist", "/cart", "/game"];
  const location = useLocation();
  const isStoreActive = storePages.some((page) => location.pathname.includes(page));

  return (
    <div className="sidebar d-none d-sm-flex flex-column">
      <div className="brand text-center mx-auto">
        <NavLink to="/">
          <img className="w-100" src="/project logo.svg" alt="ArcadeVault" />
        </NavLink>
      </div>

      <div className="d-flex flex-column gap-2">
        <NavLink
          className={isStoreActive ? "side-navlink active" : "side-navlink"} // this logic is needed because this link needs to be active for the sibling paths (/store/discover, /store/news etc.)
          to="/"
        >
          <button className="btn w-100 p-2 p-lg-3 p-xxl-4 d-flex align-items-center justify-content-center justify-content-xxl-start gap-3 lh-1">
            <i className="bi bi-tag-fill fs-4"></i>
            <h5 className="m-0 d-none d-xxl-block">Store</h5>
          </button>
        </NavLink>

        <NavLink className="side-navlink" to="/library">
          <button className="btn w-100 p-2 p-lg-3 p-xxl-4 d-flex align-items-center justify-content-center justify-content-xxl-start gap-3 lh-1">
            <i className="bi bi-grid-fill fs-4"></i>
            <h5 className="m-0 d-none d-xxl-block">Library</h5>
          </button>
        </NavLink>

        <NavLink className="side-navlink" to="/unity">
          <button className="btn w-100 p-2 p-lg-3 p-xxl-4 d-flex align-items-center justify-content-center justify-content-xxl-start gap-3 lh-1">
            <i className="bi bi-unity fs-4"></i>
            <h5 className="m-0 d-none d-xxl-block">Unity</h5>
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;

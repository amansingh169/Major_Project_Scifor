import { NavLink, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const isStoreActive = location.pathname.startsWith("/store");

  return (
    <div className="sidebar d-flex flex-column col-2">
      <div className="brand text-center mt-1">
        <NavLink to="/store/discover">
          <i className="bxl bx-steam"></i>
        </NavLink>
      </div>

      <div className="d-flex flex-column gap-2">
        <NavLink
          className={isStoreActive ? "side-navlink active" : "side-navlink"} // this logic is needed because this link needs to be active for the sibling paths (/store/discover, /store/news etc.)
          to="/store/discover"
        >
          <button className="btn w-100 py-4 px-4 text-start d-flex align-items-center gap-3">
            <i className="bx bxs-price-tag-alt fs-4"></i>
            <h5 className="m-0">Store</h5>
          </button>
        </NavLink>

        <NavLink className="side-navlink" to="/library">
          <button className="btn w-100 py-4 px-4 text-start d-flex align-items-center gap-3">
            <i className="bx bxs-grid fs-4"></i>
            <h5 className="m-0">Library</h5>
          </button>
        </NavLink>

        <NavLink className="side-navlink" to="/unity">
          <button className="btn w-100 py-4 px-4 text-start d-flex align-items-center gap-3">
            <i className="bxl bx-unity fs-4"></i>
            <h5 className="m-0">Unity</h5>
          </button>
        </NavLink>
      </div>

      {/* <button className="btn">
        <h4>Store</h4>
      </button> */}
    </div>
  );
};

export default Sidebar;

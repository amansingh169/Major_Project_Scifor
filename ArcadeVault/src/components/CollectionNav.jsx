import { useState } from "react";

const CollectionNav = () => {
  return (
    <div className="collection-nav mt-5">
      <div className="navbar justify-content-start gap-4">
        {/* <div className="navbar-nav"></div> */}
        <a className="nav-link active">Hello</a>
        <a className="nav-link">There</a>
        <a className="nav-link">Guys</a>
      </div>
    </div>
  );
};

export default CollectionNav;

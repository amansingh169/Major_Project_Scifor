import { useState } from "react";

const SortBy = () => {
  const [sortBy, setSortBy] = useState("On Sale");

  return (
    <div className="sort-by d-flex align-items-center">
      <span>Sort by:</span>

      <div className="dropdown">
        <button
          className="btn text-primary dropdown-toggle"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {sortBy}
        </button>

        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li>
            <div onClick={() => setSortBy("On Sale")} className="dropdown-item" href="#">
              On Sale
            </div>
          </li>
          <li>
            <div onClick={() => setSortBy("Recently Added")} className="dropdown-item" href="#">
              Recently Added
            </div>
          </li>
          <li>
            <div onClick={() => setSortBy("Alphabetical")} className="dropdown-item" href="#">
              Alphabetical
            </div>
          </li>
          <li>
            <div onClick={() => setSortBy("Price: Low to High")} className="dropdown-item" href="#">
              Price: Low to High
            </div>
          </li>
          <li>
            <div onClick={() => setSortBy("Price: High to Low")} className="dropdown-item" href="#">
              Price: High to Low
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SortBy;

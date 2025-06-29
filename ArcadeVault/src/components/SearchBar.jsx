import { useState, useRef } from "react";
import { fetchSearchList } from "../api/games";
import { Link, useNavigate } from "react-router-dom";
import "react-loading-skeleton/dist/skeleton.css";
import SearchResultSkeleton from "./sekeletons/SearchResultSkeleton";
import PriceOverview from "./PriceOverview";

const SearchBar = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [searchResultList, setSearchResultList] = useState([]);
  const [isFocused, setIsFocused] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [expandSearch, setExpandSearch] = useState(false);
  const inputRef = useRef();

  const handleSearch = (e) => {
    e.preventDefault();
    setIsFocused(false);

    if (query.trim()) {
      navigate(`/search?query=${encodeURIComponent(query)}`); // encodeURIComponent is used to safely encode a string so it can be placed inside a URL.
    }
  };

  const handleIconClick = (e) => {
    e.preventDefault();
    setExpandSearch(true);
    document.getElementsByClassName("nav-dropdown")[0].classList.add("d-none");

    setTimeout(() => {
      if (inputRef.current) inputRef.current.focus();
    }, 100);
  };

  const handleSearchChange = async (e) => {
    const value = e.target.value;
    setQuery(value);

    if (e.target.value.trim()) {
      setIsLoading(true);
      const res = await fetchSearchList(e.target.value); // already getting parsed data from proxy.js
      setSearchResultList(res);
      setIsLoading(false);
    } else {
      setSearchResultList([]);
      setIsLoading(false);
    }
  };

  return (
    <div className="search-bar-container">
      <form onSubmit={handleSearch} className="search-bar form-inline d-none d-md-flex">
        <i className="bi bi-search fs-6"></i>

        <input
          onChange={(e) => handleSearchChange(e)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setTimeout(() => setIsFocused(false), 200)}
          className="form-control text-primary fs-6 px-3 py-2"
          type="search"
          value={query}
          placeholder="Search Store"
        />
      </form>

      <div className="d-md-none">
        {!expandSearch ? (
          <button onClick={handleIconClick} className="bg-transparent rounded-circle lh-1">
            <i className="bi bi-search fs-6 text-primary"></i>
          </button>
        ) : (
          <form onSubmit={handleSearch} className="search-bar form-inline">
            <i className="bi bi-search fs-6"></i>

            <input
              onChange={(e) => handleSearchChange(e)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => {
                document.getElementsByClassName("nav-dropdown")[0].classList.remove("d-none");
                setTimeout(() => setIsFocused(false), 200);
                setExpandSearch(false);
              }}
              ref={inputRef}
              className="form-control text-primary fs-6 px-3 py-2 text-primary"
              type="search"
              value={query}
              placeholder="Search Store"
            />
          </form>
        )}
      </div>

      {isFocused && searchResultList.length > 0 && (
        <div className="search-result-list dropdown-box rounded-4 p-2 rounded-4 show">
          <ul className="dropdown-content d-flex flex-column p-0">
            {isLoading ? (
              <>
                <SearchResultSkeleton />
                <SearchResultSkeleton />
                <SearchResultSkeleton />
                <SearchResultSkeleton />
              </>
            ) : (
              searchResultList.slice(0, 4).map((game) => (
                <li key={game.id}>
                  <Link
                    to={`/game/${game.id}`}
                    className="dropdown-link d-flex gap-3 rounded-3 text-white"
                  >
                    <img
                      className="dropdown-link-img rounded-1 object-fit-contain"
                      src={game.tiny_image}
                      alt={game.name}
                    />

                    <div className="dropdown-link-info d-flex flex-column justify-content-between">
                      <p className="fs-5 m-0">{game.name}</p>

                      <div className="d-flex gap-3 align-items-center">
                        {game.type === "app" ? (
                          <span>Base game</span>
                        ) : (
                          <span>Downloadable Content</span>
                        )}

                        <div className="d-none d-sm-block d-lg-none">
                          <PriceOverview price_overview={game.price} />
                        </div>
                      </div>

                      <div className="d-none d-lg-block">
                        <PriceOverview price_overview={game.price} />
                      </div>
                    </div>
                  </Link>
                </li>
              ))
            )}

            <li className="dropdown-link rounded-3 mt-4">
              <Link className="text-white" to={`/search?query=${encodeURIComponent(query)}`}>
                See All Results
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBar;

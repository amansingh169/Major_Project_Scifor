import { useState, useRef } from "react";
import { fetchSearchList } from "../api/games";
import { Link, useNavigate } from "react-router-dom";
import "react-loading-skeleton/dist/skeleton.css";
import SearchResultSkeleton from "./sekeletons/SearchResultSkeleton";

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
          className="form-control text-primary fs-6 px-3 py-2 text-primary"
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
                <Link
                  key={game.id}
                  to={`/game/${game.id}`}
                  className="dropdown-link d-flex gap-3 rounded-3 text-white"
                >
                  <img
                    className="dropdown-link-img rounded-1"
                    src={game.tiny_image}
                    alt={game.name}
                  />
                  <div className="dropdown-link-info d-flex flex-column justify-content-between">
                    <p className="fs-5 m-0">{game.name}</p>

                    {game.type === "app" ? (
                      <p className="m-0">Base game</p>
                    ) : (
                      <p className="m-0">Downloadable Content</p>
                    )}

                    {!game.price ? (
                      <div className="final-price fw-bold fs-6">Free To Play</div>
                    ) : (
                      <div className="price d-flex align-items-center gap-2">
                        {game.price.initial === game.price.final ? (
                          <div className="final-price fw-bold fs-6">{`$ ${
                            game.price.final / 100
                          }`}</div>
                        ) : (
                          <>
                            <div className="discount badge">{`-${Math.floor(
                              100 - (game.price.final / game.price.initial) * 100
                            )}%`}</div>
                            <div className="cut-price text-decoration-line-through">
                              {`$ ${game.price.initial / 100}`}
                            </div>
                            <div className="final-price fw-bold fs-5">{`$ ${
                              game.price.final / 100
                            }`}</div>
                          </>
                        )}
                      </div>
                    )}
                  </div>
                </Link>
              ))
            )}

            <Link
              className="dropdown-link rounded-3 text-white mt-4"
              to={`/search?query=${encodeURIComponent(query)}`}
            >
              See All Results
            </Link>
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBar;

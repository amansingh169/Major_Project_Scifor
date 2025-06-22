const Filters = ({ library = false, browse = false }) => {
  return (
    <div className="accordion" id="filterAccordion">
      {library && (
        <div className="accordion-item">
          <h2 className="accordion-header" id="installedHeading">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#installedCollapse"
              aria-expanded="true"
              aria-controls="installedCollapse"
            >
              Installed
              <i className="bi bi-chevron-down custom-icon ms-auto"></i>
            </button>
          </h2>
          <div
            id="installedCollapse"
            className="accordion-collapse collapse"
            aria-labelledby="installedHeading"
            data-bs-parent="#filterAccordion"
          >
            <div className="accordion-body">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="installed"
                  id="installedYes"
                  value="yes"
                />
                <label className="form-check-label" htmlFor="installedYes">
                  Yes
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="installed"
                  id="installedNo"
                  value="no"
                />
                <label className="form-check-label" htmlFor="installedNo">
                  No
                </label>
              </div>
            </div>
          </div>
        </div>
      )}

      {browse && (
        <>
          <div className="accordion-item">
            <h2 className="accordion-header" id="eventsHeading">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#eventsCollapse"
                aria-expanded="false"
                aria-controls="eventsCollapse"
              >
                Events
                <i className="bi bi-chevron-down custom-icon ms-auto"></i>
              </button>
            </h2>
            <div
              id="eventsCollapse"
              className="accordion-collapse collapse"
              aria-labelledby="eventsHeading"
              data-bs-parent="#filterAccordion"
            >
              <div className="accordion-body">
                {["Deals of the Week", "EA Classic", "MEGA Savings", "First Run"].map((e) => (
                  <div className="form-check" key={e}>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value={e.toLowerCase()}
                      id={`e-${e}`}
                    />
                    <label className="form-check-label" htmlFor={`e-${e}`}>
                      {e}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="priceHeading">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#priceCollapse"
                aria-expanded="false"
                aria-controls="priceCollapse"
              >
                Price
                <i className="bi bi-chevron-down custom-icon ms-auto"></i>
              </button>
            </h2>
            <div
              id="priceCollapse"
              className="accordion-collapse collapse"
              aria-labelledby="priceHeading"
              data-bs-parent="#filterAccordion"
            >
              <div className="accordion-body">
                {["Free", "Under $10", "Under $20", "Under $35", "$25 and above"].map((p) => (
                  <div className="form-check" key={p}>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value={p.toLowerCase()}
                      id={`p-${p}`}
                    />
                    <label className="form-check-label" htmlFor={`p-${p}`}>
                      {p}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}

      {/* Genre Filter */}
      <div className="accordion-item">
        <h2 className="accordion-header" id="genreHeading">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#genreCollapse"
            aria-expanded="false"
            aria-controls="genreCollapse"
          >
            Genre
            <i className="bi bi-chevron-down custom-icon ms-auto"></i>
          </button>
        </h2>
        <div
          id="genreCollapse"
          className="accordion-collapse collapse"
          aria-labelledby="genreHeading"
          data-bs-parent="#filterAccordion"
        >
          <div className="accordion-body">
            {["Action", "Adventure", "RPG", "Simulation", "Sports", "Strategy"].map((genre) => (
              <div className="form-check" key={genre}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  value={genre.toLowerCase()}
                  id={`genre-${genre}`}
                />
                <label className="form-check-label" htmlFor={`genre-${genre}`}>
                  {genre}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Filter */}
      <div className="accordion-item">
        <h2 className="accordion-header" id="featuresHeading">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#featuresCollapse"
            aria-expanded="false"
            aria-controls="featuresCollapse"
          >
            Features
            <i className="bi bi-chevron-down custom-icon ms-auto"></i>
          </button>
        </h2>
        <div
          id="featuresCollapse"
          className="accordion-collapse collapse"
          aria-labelledby="featuresHeading"
          data-bs-parent="#filterAccordion"
        >
          <div className="accordion-body">
            {["Achievements", "Co-op", "Multiplayer", "Controller Support"].map((feat) => (
              <div className="form-check" key={feat}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  value={feat.toLowerCase()}
                  id={`feature-${feat}`}
                />
                <label className="form-check-label" htmlFor={`feature-${feat}`}>
                  {feat}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Platform Filter */}
      <div className="accordion-item">
        <h2 className="accordion-header" id="platformHeading">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#platformCollapse"
            aria-expanded="false"
            aria-controls="platformCollapse"
          >
            Platforms
            <i className="bi bi-chevron-down custom-icon ms-auto"></i>
          </button>
        </h2>
        <div
          id="platformCollapse"
          className="accordion-collapse collapse"
          aria-labelledby="platformHeading"
          data-bs-parent="#filterAccordion"
        >
          <div className="accordion-body">
            {["Windows", "macOS", "Linux"].map((os) => (
              <div className="form-check" key={os}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  value={os.toLowerCase()}
                  id={`platform-${os}`}
                />
                <label className="form-check-label" htmlFor={`platform-${os}`}>
                  {os}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;

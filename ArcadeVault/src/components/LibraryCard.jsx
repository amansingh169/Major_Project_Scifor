import { Link } from "react-router-dom";

const LibraryCard = ({ gameInfo }) => {
  const achievementPercent = Math.floor(
    (gameInfo.achievements.completed / gameInfo.achievements.total) * 100
  );

  const formatPlaytime = (time) => {
    const hrs = Math.floor(time / 60);
    const mins = Math.floor(time % 60);

    return `${hrs}h ${mins}m`;
  };

  return (
    <div className="lib-games-card d-flex flex-column flex-sm-row p-0 gap-3">
      <div className="lib-games-thumbnail px-0 d-sm-none w-100">
        <button className="add-to place-content-center">
          {gameInfo.isfavorite === true ? (
            <i className="bi bi-heart-fill fs-6 p-2"></i>
          ) : (
            <i className="bi bi-heart fs-6 p-2"></i>
          )}
        </button>

        <Link to={`/game/${gameInfo.steam_appid}`}>
          <img
            className="img-thumbnail p-0 w-100"
            src={gameInfo.header_image}
            alt={gameInfo.name}
          />
        </Link>
      </div>

      <div className="lib-games-thumbnail px-0 d-none d-sm-block w-25">
        <button className="add-to place-content-center">
          {gameInfo.isfavorite === true ? (
            <i className="bi bi-heart-fill fs-6 p-2"></i>
          ) : (
            <i className="bi bi-heart fs-6 p-2"></i>
          )}
        </button>

        <Link to={`/game/${gameInfo.steam_appid}`}>
          <img
            className="img-thumbnail p-0 w-100 h-100 object-fit-cover"
            src={gameInfo.header_image}
            alt={gameInfo.name}
          />
        </Link>
      </div>

      <div className="lib-games-info d-flex flex-column justify-content-between w-100">
        <div className="d-flex align-items-start">
          <Link to={`/game/${gameInfo.steam_appid}`}>
            <h4 className="game-name m-0">{gameInfo.name}</h4>
          </Link>

          <div className="dropdown ms-auto">
            <button
              className="lib-games-dots dropdown-toggle btn p-0 fs-6"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="bi bi-three-dots"></i>
            </button>

            <ul className="dropdown-menu">
              <li>
                <Link to={`/game/${gameInfo.steam_appid}`} className="dropdown-item fw-normal">
                  Go To Store Page
                </Link>
              </li>
              <hr className="my-1" />
              <li>
                <button className="dropdown-item fw-normal">Add to Favorites</button>
              </li>
              <li>
                <button className="dropdown-item fw-normal">Add to Collection</button>
              </li>
              <hr className="my-1" />
              <li>
                <button className="dropdown-item fw-normal">Uninstall</button>
              </li>
              <hr className="my-1" />
              <li>
                <div className="dropdown-item fw-normal d-flex justify-content-between gap-3">
                  <span>You've Played:</span>
                  <span className="text-muted">{formatPlaytime(gameInfo.totalplayed)}</span>
                </div>
              </li>
              <li>
                <div className="dropdown-item fw-normal d-flex justify-content-between gap-3">
                  <span>Version:</span>
                  <span className="text-muted">{gameInfo.steam_appid}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="d-flex justify-content-between align-items-end gap-3">
          <div className="total-played text-muted">
            <div className="fw-bold fs-6 d-none d-md-block">Total Played:</div>
            <div className="lh-1 fs-6">{formatPlaytime(gameInfo.totalplayed)}</div>
          </div>

          {gameInfo.achievements.total && (
            <div className="achievement-div">
              <div className="d-flex justify-content-between text-muted fs-5 fw-normal">
                <p className="mb-1">{`${gameInfo.achievements.completed}/${gameInfo.achievements.total}`}</p>
                <p className="mb-1">Achievements</p>
              </div>

              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: `${achievementPercent}%` }}
                  aria-valuenow={achievementPercent}
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LibraryCard;

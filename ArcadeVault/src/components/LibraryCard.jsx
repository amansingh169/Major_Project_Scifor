import React from "react";

const LibraryCard = ({ gameInfo }) => {
  const achievementPercent = Math.floor(
    (gameInfo.achievements.completed / gameInfo.achievements.total) * 100
  );

  return (
    <div className="lib-games-card row p-0 m-auto">
      <div className="thumbnail-div col-3 px-0">
        <button className="add-to place-content-center">
          {gameInfo.isfavorite === true ? (
            <i className="bi bi-heart-fill fs-6 p-2"></i>
          ) : (
            <i className="bi bi-heart fs-6 p-2"></i>
          )}
        </button>

        <img
          className="img-thumbnail rounded-10 p-0"
          src={gameInfo.header_image}
          alt={gameInfo.name}
        />
      </div>

      <div className="info-div col-8 d-flex flex-column py-2 justify-content-between">
        <h3>{gameInfo.name}</h3>

        <div className="d-flex gap-5 align-items-baseline">
          <div className="total-played text-muted">
            <p className="m-0 fw-bold">TOTAL PLAYED:</p>
            <p className="m-0">{`${(gameInfo.totalplayed / 60).toFixed(2)} hours`}</p>
          </div>

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
        </div>
      </div>
    </div>
  );
};

export default LibraryCard;

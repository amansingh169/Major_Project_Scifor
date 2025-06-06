import React from "react";

const LibraryCard = ({ gameInfo }) => {
  console.log(gameInfo.isfavorite);

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

      <div className="info-div col-9">
        <h3>{gameInfo.name}</h3>

        <div className="achievement-div">
          <h6 className="fs-5 fw-normal text-muted">
            {`${gameInfo.achievements.completed}/${gameInfo.achievements.total} Achievements`}
          </h6>
        </div>
      </div>
    </div>
  );
};

export default LibraryCard;

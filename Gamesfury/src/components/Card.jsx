const Card = ({ img, url, gameInfo, discountedGame }) => {
  return (
    <div className={`card-wrapper  ${gameInfo ? "game-card" : ""}`}>
      {gameInfo ? (
        <>
          <img
            className={`thumbnail  ${gameInfo ? "" : "img-thumbnail"}`}
            src={`${gameInfo ? gameInfo.banner : img}`}
            alt="Card"
          />

          {gameInfo && (
            <div>
              <button className="add-to place-content-center">
                <i className="bi bi-plus fs-4"></i>
              </button>

              <div className="card-content">
                <p className="product-type fw-semibold text-muted mt-2 m-0">Base Game</p>
                <h5 className="game-title fw-bold text-primary m-0">{gameInfo.name}</h5>

                {discountedGame ? (
                  <div className="price d-flex align-items-center gap-2 mt-3">
                    <div className="discount badge">-{gameInfo.price.discount_percent}%</div>

                    <div className="cut-price text-decoration-line-through text-muted">
                      {gameInfo.price.initial_formatted}
                    </div>

                    <div className="final-price text-primary fw-bold fs-5">
                      {gameInfo.price.final_formatted}
                    </div>
                  </div>
                ) : (
                  <h6 className="price text-full fw-light m-0 mt-3">
                    {gameInfo.price?.final_formatted || "Free To Play"}
                  </h6>
                )}
              </div>
            </div>
          )}
        </>
      ) : url ? (
        <img
          className={`thumbnail  ${gameInfo ? "" : "img-thumbnail"}`}
          src={`${gameInfo ? gameInfo.background_image : img}`}
          alt="Card"
        />
      ) : (
        <>
          <div className="thumbnail ph"></div>
          <div className="d-flex flex-column">
            <p className="product-type-ph ph mt-2 m-0 rounded"></p>
            <h5 className="game-title-ph ph m-0 rounded"></h5>
            <h6 className="price-ph ph m-0 mt-2 rounded"></h6>
          </div>
        </>
      )}
    </div>
  );
};

export default Card;

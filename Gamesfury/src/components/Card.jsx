import CardSkeleton from "./sekeletons/CardSkeleton";

const Card = ({ gameInfo, discountedGame, isLoading }) => {
  return (
    <div className={`card-wrapper  ${gameInfo ? "game-card" : ""}`}>
      {isLoading ? (
        <>
          <CardSkeleton />
          <CardSkeleton />
        </>
      ) : (
        <>
          <img className="thumbnail" src={gameInfo.banner || gameInfo.header_image} alt="Card" />

          {gameInfo && (
            <div>
              <button className="add-to place-content-center">
                <i className="bi bi-plus fs-4"></i>
              </button>

              <div className="card-content">
                <p className="product-type fw-semibold text-muted mt-2 m-0">
                  {gameInfo.type === "game" ? "Base Game" : "DLC"}
                </p>
                <h5 className="game-title fw-bold text-primary m-0">{gameInfo.name}</h5>

                {/* fix this logic here */}
                {discountedGame || gameInfo.price?.initial > gameInfo.price?.final ? (
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
      )}
    </div>
  );
};

export default Card;

import { getGameType } from "../utils/formatGameContent";
import PriceOverview from "./PriceOverview";
import CardSkeleton from "./sekeletons/CardSkeleton";

const Card = ({ gameInfo, isLoading }) => {
  return (
    <div className={`card-wrapper  ${gameInfo ? "game-card" : ""}`}>
      {isLoading ? (
        <>
          <CardSkeleton />
          <CardSkeleton />
        </>
      ) : (
        <>
          <img className="thumbnail" src={gameInfo?.header_image} alt="Card" />

          {gameInfo && (
            <div>
              <button className="add-to place-content-center">
                <i className="bi bi-plus fs-4"></i>
              </button>

              <div className="card-content">
                <p className="product-type fw-semibold text-muted mt-2 m-0">
                  {getGameType(gameInfo?.type)}
                </p>
                <h5 className="game-title fw-bold text-primary">{gameInfo?.name}</h5>

                <PriceOverview price_overview={gameInfo?.price_overview} fs="6" />
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Card;

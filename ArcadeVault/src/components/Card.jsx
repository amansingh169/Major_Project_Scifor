import { Link } from "react-router-dom";
import { getGameType } from "../utils/formatGameContent";
import PriceOverview from "./PriceOverview";
import CardSkeleton from "./sekeletons/CardSkeleton";

const Card = ({ gameInfo, isLoading, slider = false }) => {
  return (
    <Link
      to={`/game/${gameInfo.steam_appid}`}
      className={`card-wrapper ${slider ? "game-card" : ""}`}
    >
      {isLoading ? (
        <>
          <CardSkeleton />
          <CardSkeleton />
        </>
      ) : (
        <>
          <img className="img-thumbnail" src={gameInfo?.header_image} alt="Card" />

          {gameInfo && (
            <div className="card-content">
              <button className="add-to place-content-center">
                <i className="bi bi-plus fs-4"></i>
              </button>

              <div>
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
    </Link>
  );
};

export default Card;

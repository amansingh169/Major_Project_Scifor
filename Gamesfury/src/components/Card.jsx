import { Link, useNavigate } from "react-router-dom";
import ph from "../../notes/image.png";

const Card = ({ img, url, gameInfo }) => {
  // const navigate = useNavigate();

  return (
    <div className={`card-wrapper  ${gameInfo ? "game-card" : ""}`}>
      {gameInfo ? (
        <Link to={`/game/${gameInfo.slug}-${gameInfo.id}`}>
          <img
            className={`thumbnail  ${gameInfo ? "" : "img-thumbnail"}`}
            src={`${gameInfo ? gameInfo.background_image : img}`}
            alt="Card"
          />

          {gameInfo && (
            <div>
              <button className="add-to-wlist place-content-center">
                <i className="bi bi-plus fs-4"></i>
              </button>

              <div className="card-content">
                <p className="product-type fw-semibold text-muted mt-2 m-0">Base Game</p>
                <h5 className="game-title fw-bold text-primary m-0">{gameInfo.name}</h5>
                <h6 className="price text-full m-0 mt-2">{`$${gameInfo.price}`}</h6>
              </div>
            </div>
          )}
        </Link>
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

import { useNavigate } from "react-router-dom";

const Card = ({ img, gameInfo }) => {
  const navigate = useNavigate();

  return (
    <div className={`card-wrapper  ${gameInfo ? "game-card" : ""}`}>
      <a onClick={() => navigate(`/game/${gameInfo.id}`)}>
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
      </a>
    </div>
  );
};

export default Card;

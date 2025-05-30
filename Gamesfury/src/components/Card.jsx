const Card = ({ img, gameInfo }) => {
  return (
    <div className={`card-wrapper  ${gameInfo ? "game-card" : ""}`}>
      <a href="#">
        <img className={`thumbnail  ${gameInfo ? "" : "img-thumbnail"}`} src={img} alt="Card" />

        {gameInfo && (
          <div>
            <button className="add-to-wlist place-content-center">
              <i class="bi bi-plus fs-4"></i>
            </button>

            <div className="card-content">
              <p className="product-type fw-semibold text-muted mt-2 m-0">Base Game</p>
              <h5 className="game-title fw-bold text-primary m-0">SILENT HILL 2</h5>
              <h6 className="price text-full m-0 mt-2">$29.99</h6>
            </div>
          </div>
        )}
      </a>
    </div>
  );
};

export default Card;

import "./banner.css";

const Banner = ({ img, gameInfo }) => {
  return (
    <div className="banner-wrapper" style={{ flex: 1 }}>
      <a href="#">
        <img
          className={`thumbnail img-thumbnail ${gameInfo ? "landscape" : "portrait"}`}
          src={img}
          alt="Banner"
        />

        {gameInfo && (
          <button className="add-to-wlist place-content-center p-2">
            <i className="bx bx-bookmark-plus"></i>
          </button>
        )}

        <div className="card-content">
          <div className="product-type fs-6 mt-2 text-muted">Base Game</div>
          <div className="game-title fs-5 fw-bold text-primary">SILENT HILL 2</div>
          <div className="price fs-6 fw-semibold text-full">$29.99</div>
        </div>
      </a>
    </div>
  );
};

export default Banner;

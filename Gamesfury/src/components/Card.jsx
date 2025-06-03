import { Link, useNavigate } from "react-router-dom";

const Card = ({ img, url, gameInfo, discountedGame }) => {
  // const navigate = useNavigate();

  function getFakePrice() {
    const prices = [
      8.49, 9.99, 10.99, 11.49, 13.79, 14.99, 17.5, 18.25, 19.49, 21.99, 23.75, 24.99, 29.49, 32.99,
      34.5, 37.89, 39.99, 42.0, 44.99, 47.49, 52.99, 54.89, 57.75, 59.99, 64.5,
    ];

    return prices[Math.floor(Math.random() * prices.length)];
  }

  function getPriceInfo() {
    const weightedPrices = [
      9.99, 9.99, 9.99, 14.99, 14.99, 19.99, 19.99, 24.99, 29.99, 29.99, 29.99, 34.99, 39.99, 44.99,
      49.99, 59.99, 69.99, 79.99,
    ];

    const discountPool = [5, 10, 10, 15, 15, 20, 20, 25, 30, 40, 50, 60, 70];

    const basePrice = weightedPrices[Math.floor(Math.random() * weightedPrices.length)];
    const discountPercent = discountPool[Math.floor(Math.random() * discountPool.length)];

    const finalPrice = (basePrice * (1 - discountPercent / 100)).toFixed(2);

    return {
      basePrice: basePrice.toFixed(2),
      discountPercent,
      finalPrice,
    };
  }

  const priceInfo = getPriceInfo();

  return (
    <div className={`card-wrapper  ${gameInfo ? "game-card" : ""}`}>
      {gameInfo ? (
        <>
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

                {discountedGame ? (
                  <div className="price d-flex align-items-center gap-2">
                    <div className="discount badge">-{priceInfo.discountPercent}%</div>
                    <div className="cut-price text-decoration-line-through text-muted">
                      ${priceInfo.basePrice}
                    </div>
                    <div className="final-price text-primary fw-bold fs-5">
                      ${priceInfo.finalPrice}
                    </div>
                  </div>
                ) : (
                  <h6 className="price text-full m-0 mt-2">{`$${getFakePrice()}`}</h6>
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

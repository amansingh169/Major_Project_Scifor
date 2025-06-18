const PriceOverview = ({ price_overview, fs = "6", align_text = "center" }) => {
  const discountPercent = 100 - Math.ceil((price_overview?.final / price_overview?.initial) * 100);

  return (
    <>
      {!price_overview ? (
        <span className={`final-price text-primary fw-bold fs-${fs}`}>Free To Play</span>
      ) : price_overview ? (
        <div className={`price d-flex align-items-${align_text} gap-2`}>
          {price_overview.initial - price_overview.final > 0 ? (
            <>
              <span className="discount badge">{`-${discountPercent}%`}</span>
              <span className={`cut-price text-decoration-line-through text-muted fs-${fs}`}>
                {`$${(price_overview.initial / 100).toFixed(2)}`}
              </span>
              <span className={`final-price text-primary fw-bold fs-${fs - 1}`}>{`$${(
                price_overview.final / 100
              ).toFixed(2)}`}</span>
            </>
          ) : (
            <span className={`final-price text-primary fw-bold fs-${fs}`}>{`$${(
              price_overview.final / 100
            ).toFixed(2)}`}</span>
          )}
        </div>
      ) : (
        <span className="text-muted">Price Unavailable</span>
      )}
    </>
  );
};

export default PriceOverview;

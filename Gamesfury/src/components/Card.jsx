import cardImage from "../assets/neon.jpg";

const Card = () => {
  return (
    <div className="card" style={{ width: "18rem", marginTop: "2rem" }}>
      <img src={cardImage} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">Lorem ipsum dolor sit amet.</h5>
        <p className="card-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea tempora temporibus beatae ab.
          Facere enim modi provident nostrum dolore placeat.
        </p>
        <div className="d-flex justify-content-between">
          <button className="btn btn-primary">Buy Now</button>
          <button className="btn btn-secondary">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default Card;

import cardImage from "../assets/neon.jpg";

const Navbar = () => {
  return (
    <nav>
      <a className="a" href="/">
        Home
      </a>
      <a href="/">About</a>
      <a href="/">Contact Us</a>
      <button className="btn btn-primary">What's up?</button>
      <button className="btn btn-secondary">Nothing</button>

      <div className="card" style={{ width: "18rem", "margin-top": "2rem" }}>
        <img src={cardImage} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">Lorem ipsum dolor sit amet.</h5>
          <p className="card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea tempora temporibus beatae
            ab. Facere enim modi provident nostrum dolore placeat.
          </p>
          <div className="d-flex justify-content-between">
            <button className="btn btn-primary">Buy Now</button>
            <button className="btn btn-secondary">Add to cart</button>
          </div>
        </div>
      </div>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, repellat perspiciatis
        repudiandae cupiditate ipsam officiis consectetur explicabo id accusantium animi.
      </p>
    </nav>
  );
};

export default Navbar;

import { SplideSlide } from "@splidejs/react-splide";
import { Link } from "react-router-dom";

const GenreCard = ({ genre }) => {
  return (
    <SplideSlide>
      <Link to={`/browse?genre=${encodeURIComponent(genre.slug)}`}>
        <div className="genre-div bg-accent rounded-2 d-flex align-items-center justify-content-center text-center">
          <span className="fs-3 fw-bold text-secondary">{genre.name}</span>
        </div>
      </Link>
    </SplideSlide>
  );
};

export default GenreCard;

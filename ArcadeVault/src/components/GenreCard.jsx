import { SplideSlide } from "@splidejs/react-splide";
import { Link } from "react-router-dom";

const GenreCard = ({ genre }) => {
  return (
    <SplideSlide>
      <Link to={`/browse?genre=${encodeURIComponent(genre)}`}>
        <div className="genre-div bg-accent rounded-2 py-5 text-center">
          <h3 className="text-secondary">{genre.charAt(0).toUpperCase() + genre.slice(1)}</h3>
        </div>
      </Link>
    </SplideSlide>
  );
};

export default GenreCard;

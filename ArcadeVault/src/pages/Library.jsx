import { NavLink, Link, useParams, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { UserContext } from "../contexts/UserContext";
import LibraryCard from "../components/LibraryCard";
import Footer from "../components/Footer";
import Filters from "../components/Filters";

const Library = () => {
  const { user } = useContext(UserContext);
  const { collectionId = "all" } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/library/all");
  }, []);

  if (!user) {
    return <h2>You are not logged in!</h2>;
  } else if (!user.collections) {
    return <h2>Loading...</h2>;
  }

  const collections = user?.collections;

  return (
    <div className="library-wrapper">
      <div className="d-flex align-items-center gap-2 mb-5">
        <h1 className="lh-1 m-0">Library</h1>
        <a href="">
          <i className="bi bi-arrow-clockwise fs-3 text-muted"></i>
        </a>
      </div>

      <div className="row">
        <div className="cart-items col-12 col-xl-9 d-flex flex-column gap-3 order-2 order-lg-1">
          <div className="collection-nav">
            <div className="navbar justify-content-start gap-4 p-0">
              {Object.keys(collections).map((coll) => (
                <NavLink key={coll} className="nav-link" to={`/library/${coll}`}>
                  {coll.charAt(0).toUpperCase() + coll.slice(1)}
                </NavLink>
              ))}
            </div>
          </div>

          <div className="lib-games d-flex flex-column gap-5 gap-sm-4 mt-4">
            {collections[collectionId].length === 0 ? (
              <h1>No games in this collection.</h1>
            ) : (
              collections[collectionId].map((game) => (
                <LibraryCard key={game.steam_appid} gameInfo={game} />
              ))
            )}
          </div>
        </div>

        <div className="details-aside col-12 col-xl-3 mt-4 mt-lg-0 order-1 order-lg-2 mb-3">
          <h4 className="mb-4">Filters</h4>
          <Filters library={true} />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Library;

import CollectionNav from "../components/CollectionNav";
import { Link, useParams, useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { useState, useContext, useEffect } from "react";
import Card from "../components/Card";

const Library = () => {
  const { user } = useContext(UserContext);
  const { collection } = useParams();
  // const navigate = useNavigate();
  const [userCollections, setUserCollections] = useState();

  useEffect(() => {
    const getUserCollections = () => {
      if (user) {
        setUserCollections(user.collections || {});
        console.log(userCollections);
      }
    };

    getUserCollections();
  }, [user, userCollections]);

  if (!user) {
    return <h2>You are not logged in!</h2>;
  } else if (!userCollections) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="library-wrapper">
      <div className="d-flex align-items-center gap-3">
        <h1 className="lh-1">Library</h1>
        <a href="">
          <i className="bi bi-arrow-clockwise fs-3 text-muted"></i>
        </a>
      </div>
      <CollectionNav />

      {userCollections.ownedGames.map((game) => (
        <Card key={game} gameInfo={game} />
        // <h3 key={game.id}>{game.name}</h3>
      ))}
    </div>
  );
};

export default Library;

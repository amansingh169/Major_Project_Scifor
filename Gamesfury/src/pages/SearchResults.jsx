import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Card from "../components/Card";
import { fetchSearchResults } from "../api/games";

const useQuery = () => new URLSearchParams(useLocation().search);

const SearchResults = () => {
  const query = useQuery().get("query");
  const [resultList, setResultList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getResultList = async () => {
      setIsLoading(true);
      const searchResults = await fetchSearchResults(query);
      setResultList(searchResults);
      setIsLoading(false);
      console.log(searchResults);
    };

    getResultList();
  }, [query]);

  return (
    <div className="d-flex flex-wrap gap-4 justify-content-center px-2">
      {resultList.length === 0 ? (
        <p className="text-center mt-5 fs-4">No results for this search.</p>
      ) : (
        resultList.map((game) => (
          <Link to={`/game/${game.id}`} key={game.id}>
            <Card gameInfo={game} isLoading={isLoading} />
          </Link>
        ))
      )}
    </div>
  );
};

export default SearchResults;

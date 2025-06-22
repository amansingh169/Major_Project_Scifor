import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Card from "../components/Card";
import { fetchSearchResults } from "../api/games";
import Footer from "../components/Footer";

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

  if (isLoading && !resultList.length) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <>
      <h3 className="mb-4">Search Results:</h3>

      <div className="games-container gap-4">
        {isLoading ? (
          <h2>Loading...</h2>
        ) : resultList && resultList.length > 0 ? (
          resultList.map((game) => (
            <Card key={game?.steam_appid} gameInfo={game} isLoading={isLoading} />
          ))
        ) : (
          <p className="text-center mt-5 fs-4">No results for this search.</p>
        )}
      </div>
      <Footer />
    </>
  );
};
export default SearchResults;

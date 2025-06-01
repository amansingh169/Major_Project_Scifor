import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchGameData } from "../api/rawg";

const GameDetails = () => {
  const [gameData, setGameData] = useState();
  const { id } = useParams();

  useEffect(() => {
    const getGameData = async () => {
      const storedData = localStorage.getItem(`storedGame_${id}`);

      if (storedData) {
        setGameData(JSON.parse(storedData));
        console.log("Stored Game Data Fetched!");
      } else {
        const data = await fetchGameData(id);
        setGameData(data);
        console.log("Game Data Fetched from API!");
        localStorage.setItem(`storedGame_${id}`, JSON.stringify(data));
      }
    };

    getGameData();
  }, []);

  if (!gameData) return <h2>Loading...</h2>;

  return (
    <div className="game-details-wrapper">
      <h1>{`${gameData.name}`}</h1>
    </div>
  );
};

export default GameDetails;

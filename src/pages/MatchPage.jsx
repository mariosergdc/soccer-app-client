import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { url } from "../utils/backurl";

const MatchPage = () => {
  const [matchData, setMatchData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchMatchData = async () => {
      const response = await axios.get(`${url}/matches/${id}`);
      setMatchData(response.data);
    };
    fetchMatchData();
  }, [id]);

  if (!matchData) {
    return <div>Loading...</div>;
  }

  const { date, homeTeam, awayTeam, homeGoals, awayGoals, status } = matchData;

  return (
    <div>
      <div>Date: {date}</div>
      <div>
        <label>Home Team:</label>
        <div>{homeTeam.name}</div>
      </div>
      <div>
        <label>Status:</label>
        <div>{status}</div>
      </div>
      <div>
        <label>Away Team:</label>
        <div>{awayTeam.name}</div>
      </div>
      <div>
        <label>Home Goals:</label>
        <div>{homeGoals}</div>
        <button>Add Goal</button>
      </div>
      <div>
        <label>Away Goals:</label>
        <div>{awayGoals}</div>
        <button>Add Goal</button>
      </div>
    </div>
  );
};

export default MatchPage;

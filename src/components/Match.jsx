import axios from "axios";
import { useEffect, useState } from "react";

function Match({ match }) {
  console.log(match);
  const [homeTeam, setHomeTeam] = useState({});
  const [awayTeam, setAwayTeam] = useState({});

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:5000/teams/${match.homeTeam}`)
      .then((response) => {
        setHomeTeam(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    axios
      .get(`http://127.0.0.1:5000/teams/${match.awayTeam}`)
      .then((response) => {
        setAwayTeam(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [match.homeTeam, match.awayTeam]);

  const date = new Date(match.date);
  const formattedDate = date.toLocaleDateString();
  const formattedTime = date.toLocaleTimeString();

  return (
    <div>
      <p>
        {homeTeam.name} vs {awayTeam.name}
      </p>
      <p>Date: {formattedDate}</p>
      <p>Time: {formattedTime}</p>
      <p>Status: {match.status}</p>
    </div>
  );
}

export default Match;

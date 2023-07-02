import { useState, useEffect } from "react";
import axios from "axios";
import Match from "../components/Match";

function MatchesPage() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/matches")
      .then((response) => {
        setMatches(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>Calendario</h1>
      {matches.map((match) => (
        <Match key={match._id} match={match} />
      ))}
    </div>
  );
}

export default MatchesPage;

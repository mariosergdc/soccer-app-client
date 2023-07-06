import { useState, useEffect } from "react";
import StandingsTable from "../components/StandingsTable";
import axios from "axios";
import { url } from "../utils/backurl";

function StandingsPage() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    axios
      .get(`${url}/teams`)
      .then((response) => {
        setTeams(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>Tabla de posiciones</h1>
      {teams.length !== 0 && <StandingsTable teams={teams} />}
    </div>
  );
}

export default StandingsPage;

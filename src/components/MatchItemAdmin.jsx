import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { url } from "../utils/backurl";

function MatchItemAdmin({ match, handleDelete }) {
  console.log("match en matchitemadmin", match);
  const [homeTeam, setHomeTeam] = useState({});
  const [awayTeam, setAwayTeam] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${url}/teams/${match.homeTeam}`)
      .then((response) => {
        setHomeTeam(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    axios
      .get(`${url}/teams/${match.awayTeam}`)
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
    <div className="border border-primary">
      <p>
        {homeTeam.name}
        {` `} {match.homeGoals} vs {awayTeam.name}
        {` `}
        {match.awayGoals}
      </p>
      <p>Date: {formattedDate}</p>
      <p>Time: {formattedTime}</p>
      <p>Status: {match.status}</p>
      <button onClick={() => navigate(`/matches/${match._id}`)}>Editar</button>
      <button onClick={() => handleDelete(match._id)}>Eliminar</button>
    </div>
  );
}

export default MatchItemAdmin;

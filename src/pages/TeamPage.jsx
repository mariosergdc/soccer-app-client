import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function TeamPage() {
  const [team, setTeam] = useState(null);
  const [players, setPlayers] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    async function fetchTeam() {
      const response = await axios.get(`http://127.0.0.1:5000/teams/${id}`);
      setTeam(response.data);
    }

    async function fetchPlayers() {
      const response = await axios.get(
        `http://127.0.0.1:5000/players/teams/${id}`
      );
      setPlayers(response.data);
    }

    fetchTeam();
    fetchPlayers();
  }, [id]);

  if (!team) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h1>{team.name}</h1>
      <img src={team.logo} alt={team.name} />
      <h2>Jugadores:</h2>
      <ul>
        {players.map((player) => (
          <li key={player._id}>
            {player.name} {player.number}
            {player.position}
          </li>
        ))}
      </ul>
      <h2>Rendimiento:</h2>
      <ul>
        <li>Victorias: {team.performance.wins}</li>
        <li>Derrotas: {team.performance.losses}</li>
        <li>Empates: {team.performance.ties}</li>
        <li>Goles a favor: {team.performance.goalsScored}</li>
        <li>Goles en contra: {team.performance.goalsConceded}</li>
      </ul>
    </div>
  );
}

export default TeamPage;

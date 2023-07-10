import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { url } from "../utils/backurl";

function TeamPage() {
  const [team, setTeam] = useState(null);
  const [players, setPlayers] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const response = await axios.get(`${url}/teams/${id}`);
        if (response.data) {
          setTeam(response.data);
        } else {
          console.log("Equipo no encontrado");
        }
      } catch (error) {
        console.error(error);
      }
    };

    async function fetchPlayers() {
      try {
        const response = await axios.get(`${url}/players/teams/${id}`);
        if (response.data) {
          setPlayers(response.data);
        } else {
          console.log("Jugadores no encontrados");
        }
      } catch (error) {
        console.error(error);
      }
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
      {/* <img src={team.logo} alt={team.name} /> */}

      <h2>Rendimiento:</h2>

      <div>Victorias: {team.performance.wins}</div>
      <div>Derrotas: {team.performance.losses}</div>
      <div>Empates: {team.performance.ties}</div>
      <div>Goles a favor: {team.performance.goalsScored}</div>
      <div>Goles en contra: {team.performance.goalsConceded}</div>

      <h2>Jugadores:</h2>

      {players.map((player) => (
        <div key={player._id}>
          {player.name} {player.number}
          {player.position}
        </div>
      ))}
    </div>
  );
}

export default TeamPage;

import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";

function StandingsTable({ teams }) {
  // Calculate games played, goal difference, and points for each team
  teams.forEach((team) => {
    team.performance.gamesPlayed =
      team.performance.wins + team.performance.ties + team.performance.losses;
    team.performance.goalDifference =
      team.performance.goalsScored - team.performance.goalsConceded;
    team.performance.points = team.performance.wins * 3 + team.performance.ties;
  });

  // Sort the teams by points and goal difference in case of a tie
  teams.sort((a, b) => {
    if (a.performance.points !== b.performance.points) {
      return b.performance.points - a.performance.points;
    } else {
      return b.performance.goalDifference - a.performance.goalDifference;
    }
  });

  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>Posición</th>
          <th>Nombre del equipo</th>
          <th>Partidos jugados</th>
          <th>Victorias</th>
          <th>Empates</th>
          <th>Derrotas</th>
          <th>Goles a favor</th>
          <th>Goles en contra</th>
          <th>Diferencia de goles</th>
          <th>Puntos</th>
        </tr>
      </thead>
      <tbody>
        {teams.map(
          (team, index) =>
            index < 6 && (
              <tr key={team._id}>
                <td>{index + 1}</td>
                <td>
                  <Link to={`/teams/${team._id}`}>{team.name}</Link>
                </td>
                <td data-label="PJ">{team.performance.gamesPlayed}</td>
                <td data-label="PG">{team.performance.wins}</td>
                <td data-label="PE">{team.performance.ties}</td>
                <td data-label="PP">{team.performance.losses}</td>
                <td data-label="GF">{team.performance.goalsScored}</td>
                <td data-label="GC">{team.performance.goalsConceded}</td>
                <td data-label="DG">{team.performance.goalDifference}</td>
                <td data-label="P">{team.performance.points}</td>
              </tr>
            )
        )}
      </tbody>
    </Table>
  );
}

export default StandingsTable;

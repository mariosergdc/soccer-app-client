import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";

function StandingsTable({ teams }) {
  // Ordenar los equipos por puntos
  teams.sort((a, b) => b.performance.points - a.performance.points);

  return (
    <Table striped bordered hover>
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
        {teams.map((team, index) => (
          <tr key={team._id}>
            <td>{index + 1}</td>
            <td>
              <Link to={`/teams/${team._id}`}>{team.name}</Link>
            </td>
            <td>{team.performance?.played}</td>
            <td>{team.performance?.wins}</td>
            <td>{team.performance?.ties}</td>
            <td>{team.performance?.losses}</td>
            <td>{team.performance?.goalsScored}</td>
            <td>{team.performance?.goalsConceded}</td>
            <td>
              {team.performance?.goalsScored - team.performance?.goalsConceded}
            </td>
            <td>{team.performance?.points}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default StandingsTable;

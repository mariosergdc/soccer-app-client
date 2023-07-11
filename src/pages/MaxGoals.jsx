import axios from "axios";
import { useEffect, useState } from "react";
import { url } from "../utils/backurl";
import { Table } from "react-bootstrap";

const MaxGoals = () => {
  const [maxGoalsArray, setMaxGoalsArray] = useState([]);
  useEffect(() => {
    axios
      .get(`${url}/players/maxgoals`)
      .then((response) => {
        setMaxGoalsArray(response.data);
        //console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Goles</th>
            <th>Equipo</th>
          </tr>
        </thead>
        <tbody>
          {maxGoalsArray.map((player) => (
            <tr key={player._id}>
              <td>{player.name}</td>
              <td>{player.statistics.goals}</td>
              <td>{player.team.name}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default MaxGoals;

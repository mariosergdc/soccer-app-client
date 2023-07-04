import { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { url } from "../utils/backurl";

function GoalForm({ matchId, teamId }) {
  const [player, setPlayer] = useState("");
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    axios
      .get(`${url}/players/teams/${teamId}`)
      .then((response) => {
        setPlayers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [teamId]);

  const handlePlayerChange = (event) => {
    setPlayer(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`${url}/goals`, {
        matchId: matchId,
        teamId: teamId,
        playerId: player,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Player:</Form.Label>
        <Form.Control as="select" value={player} onChange={handlePlayerChange}>
          <option value="">Select a player</option>
          {players.map((player) => (
            <option key={player.id} value={player.id}>
              {player.name}
            </option>
          ))}
        </Form.Control>
      </Form.Group>

      <Button type="submit">Add Goal</Button>
    </Form>
  );
}

export default GoalForm;

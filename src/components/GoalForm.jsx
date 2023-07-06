import { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { url } from "../utils/backurl";

function GoalForm({ matchId, teamId }) {
  const [player, setPlayer] = useState("");
  const [players, setPlayers] = useState([]); //jugadores de teamid
  const [goalType, setGoalType] = useState("standard"); //default value

  console.log("matchid", matchId);
  console.log("teamid", teamId);

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

  const handleGoalTypeChange = (event) => {
    setGoalType(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      match: matchId,
      team: teamId,
      player: player,
      goalType: goalType, //add goalType to the object
    });
    axios
      .post(`${url}/goals`, {
        match: matchId,
        team: teamId,
        player: player,
        goalType: goalType, //add goalType to the object
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
            <option key={player._id} value={player._id}>
              {player.name}
            </option>
          ))}
        </Form.Control>
      </Form.Group>

      <Form.Group>
        <Form.Label>Goal Type:</Form.Label>
        <Form.Control
          as="select"
          value={goalType}
          onChange={handleGoalTypeChange}
        >
          <option value="standard">Standard</option>
          <option value="penalty">Penalty</option>
          <option value="autogoal">Autogoal</option>
        </Form.Control>
      </Form.Group>

      <Button type="submit">Add Goal</Button>
    </Form>
  );
}

export default GoalForm;

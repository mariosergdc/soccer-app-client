import { useEffect, useState } from "react";
import axios from "axios";
import { url } from "../utils/backurl";
import { Button, Form } from "react-bootstrap";

function CreateMatch() {
  const [match, setMatch] = useState({
    homeTeam: "",
    awayTeam: "",
    date: "",
    time: "",
  });
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const fetchTeams = async () => {
      const response = await axios.get(`${url}/teams`);
      setTeams(response.data);
    };
    fetchTeams();
  }, []);

  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setMatch({
      ...match,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const datetime = new Date(`${match.date}T${match.time}:00`);
    const matchWithDatetime = {
      homeTeam: match.homeTeam,
      awayTeam: match.awayTeam,
      date: datetime,
    };
    axios
      .post(`${url}/matches`, matchWithDatetime)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="homeTeam">
        <Form.Label>Home Team:</Form.Label>
        <Form.Select
          aria-label="Default select"
          name="homeTeam"
          value={match.homeTeam}
          onChange={handleInputChange}
        >
          <option value="">Elige un Equipo</option>
          {teams.map((team) => (
            <option key={team._id} value={team._id}>
              {team.name}
            </option>
          ))}
        </Form.Select>
      </Form.Group>

      <Form.Group controlId="awayTeam">
        <Form.Label>Away Team:</Form.Label>
        <Form.Select
          aria-label="Default select"
          name="awayTeam"
          value={match.awayTeam}
          onChange={handleInputChange}
        >
          <option value="">Elige un Equipo</option>
          {teams.map((team) => (
            <option key={team._id} value={team._id}>
              {team.name}
            </option>
          ))}
        </Form.Select>
      </Form.Group>

      <Form.Group>
        <Form.Label>Date:</Form.Label>
        <Form.Control
          type="date"
          name="date"
          value={match.date}
          onChange={handleInputChange}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Time:</Form.Label>
        <Form.Control
          type="time"
          name="time"
          value={match.time}
          onChange={handleInputChange}
        />
      </Form.Group>

      <Button type="submit">Create Match</Button>
    </Form>
  );
}

export default CreateMatch;

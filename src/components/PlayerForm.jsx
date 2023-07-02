import axios from "axios";
import { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const PlayerForm = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [position, setPosition] = useState("");
  const [teams, setTeams] = useState([]);
  const [selectedTeam, setSelectedTeam] = useState("");

  useEffect(() => {
    const fetchTeams = async () => {
      const response = await axios.get("http://127.0.0.1:5000/teams");
      setTeams(response.data);
    };
    fetchTeams();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const playerData = {
      name,
      number,
      position,
      team: selectedTeam,
    };
    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/players",
        playerData
      );
      console.log(response.data);
      setName("");
      setNumber("");
      setPosition("");
      navigate(`/teams/${selectedTeam}`);
      setSelectedTeam("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <h1>Insertar Jugador</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="number">
          <Form.Label>Number</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="position">
          <Form.Label>Position</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter position"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="team">
          <Form.Label>Team</Form.Label>
          <Form.Control
            as="select"
            value={selectedTeam}
            onChange={(e) => setSelectedTeam(e.target.value)}
          >
            <option value="">Equipo del Jugador</option>
            {teams.map((team) => (
              <option key={team._id} value={team._id}>
                {team.name}
              </option>
            ))}
          </Form.Control>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default PlayerForm;

import axios from "axios";
import { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { url } from "../utils/backurl";

const CreatePlayer = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [position, setPosition] = useState("");
  const [teams, setTeams] = useState([]);
  const [selectedTeam, setSelectedTeam] = useState("");

  useEffect(() => {
    const fetchTeams = async () => {
      const response = await axios.get(`${url}/teams`);
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
      const response = await axios.post(`${url}/players`, playerData);

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
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Entre el nombre del jugador"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="number">
          <Form.Label>Número</Form.Label>
          <Form.Control
            type="text"
            placeholder="Entre el número del jugador"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="position">
          <Form.Label>Posición</Form.Label>
          <Form.Control
            type="text"
            placeholder="Posición del jugador"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="team">
          <Form.Label>Equipo del Jugador</Form.Label>
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

export default CreatePlayer;

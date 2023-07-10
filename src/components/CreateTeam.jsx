import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { url } from "../utils/backurl";
//import { useNavigate } from "react-router-dom";

function CreateTeam() {
  const [name, setName] = useState("");
  //const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.post(`${url}/teams`, {
        name,
      });
      setName("");
      //navigate("/teams-page-admin");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <h1>Crear Equipo</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Nombre:</Form.Label>
          <Form.Control
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Crear
        </Button>
      </Form>
    </>
  );
}

export default CreateTeam;

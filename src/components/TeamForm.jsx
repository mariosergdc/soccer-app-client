import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

function TeamForm() {
  const [name, setName] = useState("");
  const [logo, setLogo] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://127.0.0.1:5000/teams", {
        name,
        logo,
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <h1>Crear Equipo</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Name:</Form.Label>
          <Form.Control
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formLogo">
          <Form.Label>Logo:</Form.Label>
          <Form.Control
            type="text"
            value={logo}
            onChange={(event) => setLogo(event.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Crear
        </Button>
      </Form>
    </>
  );
}

export default TeamForm;

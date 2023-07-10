import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { url } from "../utils/backurl";
import { Button, Form } from "react-bootstrap";

const EditTeam = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${url}/teams/${id}`)
      .then((response) => {
        setName(response.data.name);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleUpdate = async () => {
    await axios.patch(`${url}/teams/${id}`, { name });
    navigate("/teams-page-admin");
  };

  return (
    <Form>
      <h1>Editar Equipo</h1>
      <Form.Group>
        <Form.Label>Nombre:</Form.Label>
        <Form.Control type="text" value={name} onChange={handleNameChange} />
      </Form.Group>
      <Button variant="primary" onClick={handleUpdate}>
        Actualizar
      </Button>
    </Form>
  );
};

export default EditTeam;

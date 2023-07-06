import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { url } from "../utils/backurl";

const EditPlayer = () => {
  const { id } = useParams();
  const [name, setName] = useState("");

  useEffect(() => {
    const fetchPlayer = async () => {
      const response = await axios.get(`${url}/players/${id}`);
      setName(response.data.name);
    };
    fetchPlayer();
  }, [id]);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleUpdate = async () => {
    await axios.patch(`${url}/players/${id}`, { name });
    // TODO: Navigate back to TeamsPageAdmin
  };

  return (
    <div>
      <h1>Editar Jugador</h1>
      <label>
        Nombre:
        <input type="text" value={name} onChange={handleNameChange} />
      </label>
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
};

export default EditPlayer;

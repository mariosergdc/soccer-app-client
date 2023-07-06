import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { url } from "../utils/backurl";

const EditTeam = () => {
  const { id } = useParams();
  const [name, setName] = useState("");

  useEffect(() => {
    const fetchTeam = async () => {
      const response = await axios.get(`${url}/teams/${id}`);
      setName(response.data.name);
    };
    fetchTeam();
  }, [id]);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleUpdate = async () => {
    await axios.patch(`${url}/teams/${id}`, { name });
    // TODO: Navigate back to TeamsPageAdmin
  };

  return (
    <div>
      <h1>Edit Team</h1>
      <label>
        Name:
        <input type="text" value={name} onChange={handleNameChange} />
      </label>
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
};

export default EditTeam;

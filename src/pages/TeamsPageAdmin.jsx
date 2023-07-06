import { useState, useEffect } from "react";
import axios from "axios";
import { url } from "../utils/backurl";
import { useNavigate } from "react-router-dom";

const TeamsPageAdmin = () => {
  const [teams, setTeams] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTeams = async () => {
      const response = await axios.get(`${url}/teams`);
      setTeams(response.data);
      console.log(response.data);
    };
    fetchTeams();
  }, []);

  const handleEdit = (id) => {
    navigate(`/teams/edit/${id}`);
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Estás seguro que deseas eliminar este equipo"
    );
    if (confirmDelete) {
      axios
        .post(`${url}/teams/delete/${id}`)
        .then(() => {
          setTeams(teams.filter((team) => team._id !== id));
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  return (
    <div>
      <h1>Teams</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team) => (
            <tr key={team._id}>
              <td>{team.name}</td>
              <td>
                <button onClick={() => handleEdit(team._id)}>Edit</button>
              </td>
              <td>
                <button onClick={() => handleDelete(team._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TeamsPageAdmin;

import { useState, useEffect } from "react";
import axios from "axios";
import { url } from "../utils/backurl";
import { useNavigate } from "react-router-dom";
import { Table } from "react-bootstrap";

const TeamsPageAdmin = () => {
  const [teams, setTeams] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${url}/teams`)
      .then((response) => {
        setTeams(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
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
      <h1>Equipos</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Editar</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team) => (
            <tr key={team._id}>
              <td>{team.name}</td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={() => handleEdit(team._id)}
                >
                  Editar
                </button>
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(team._id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default TeamsPageAdmin;

import { useState, useEffect } from "react";
import axios from "axios";
import { url } from "../utils/backurl";
import { useNavigate } from "react-router-dom";

const PlayersPageAdmin = () => {
  const [players, setPlayers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPlayers = async () => {
      const response = await axios.get(`${url}/players`);
      setPlayers(response.data);
    };
    fetchPlayers();
  }, []);

  const handleEdit = (id) => {
    navigate(`/players/edit/${id}`);
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Estás seguro que deseas eliminar este equipo"
    );
    if (confirmDelete) {
      axios
        .post(`${url}/players/delete/${id}`)
        .then(() => {
          setPlayers(players.filter((player) => player._id !== id));
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  return (
    <div>
      <h1>Jugadores</h1>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Editar</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player) => (
            <tr key={player._id}>
              <td>{player.name}</td>
              <td>
                <button onClick={() => handleEdit(player._id)}>Editar</button>
              </td>
              <td>
                <button onClick={() => handleDelete(player._id)}>
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PlayersPageAdmin;

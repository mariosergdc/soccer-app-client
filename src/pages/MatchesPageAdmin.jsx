import { useState, useEffect } from "react";
import axios from "axios";
import MatchItemAdmin from "../components/MatchItemAdmin";
import { url } from "../utils/backurl";

function MatchesPageAdmin() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    axios
      .get(`${url}/matches`)
      .then((response) => {
        setMatches(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Estás seguro que deseas eliminar este partido"
    );
    if (confirmDelete) {
      axios
        .post(`${url}/matches/delete/${id}`)
        .then(() => {
          setMatches(matches.filter((match) => match._id !== id));
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  return (
    <div>
      <h1>Partidos</h1>
      {matches.map((match) => (
        <MatchItemAdmin
          key={match._id}
          match={match}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
}

export default MatchesPageAdmin;

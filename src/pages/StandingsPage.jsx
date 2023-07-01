import { useState, useEffect } from 'react';
import StandingsTable from '../components/StandingsTable';
import axios from 'axios';

function StandingsPage() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:5000/teams')
      .then(response => {
        console.log(response.data);
        setTeams(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>Tabla de posiciones</h1>{teams.length!==0 && <StandingsTable teams={teams} />}
    </div>
  );
}

export default StandingsPage;
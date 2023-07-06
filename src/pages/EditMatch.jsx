import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { url } from "../utils/backurl";
import AddGoalModal from "../components/AddGoalModal";

const EditMatch = () => {
  const [matchData, setMatchData] = useState(null);
  const [homeTeam, setHomeTeam] = useState({});
  const [awayTeam, setAwayTeam] = useState({});
  const [status, setStatus] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const fetchMatchData = async () => {
      const response = await axios.get(`${url}/matches/${id}`);
      setMatchData(response.data);
      setStatus(response.data.status);
      axios
        .get(`${url}/teams/${response.data.homeTeam}`)
        .then((response) => {
          setHomeTeam(response.data);
        })
        .catch((error) => {
          console.error(error);
        });

      axios
        .get(`${url}/teams/${response.data.awayTeam}`)
        .then((response) => {
          setAwayTeam(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    };
    fetchMatchData();
  }, [id]);

  if (!matchData) {
    return <div>Loading...</div>;
  }

  const { date, homeGoals, awayGoals } = matchData;
  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const handleUpdateStatus = async () => {
    await axios.patch(`${url}/matches/${matchData._id}`, { status });
    // actualizar estadisticas
    if (status === "finished") {
      axios
        .get(`${url}/matches`)
        .then((response) => {
          const matches = response.data;
          console.log(matches);
          let htpg = 0,
            htpp = 0,
            htpe = 0,
            atpg = 0,
            atpp = 0,
            atpe = 0;
          matches.map((match) => {
            if (match.status === "finished") {
              if (homeTeam._id === match.homeTeam) {
                if (match.homeGoals > match.awayGoals) {
                  htpg++;
                } else if (match.homeGoals < match.awayGoals) {
                  htpp++;
                } else {
                  htpe++;
                }
              } else if (homeTeam._id === match.awayTeam) {
                if (match.homeGoals > match.awayGoals) {
                  htpp++;
                } else if (match.homeGoals < match.awayGoals) {
                  htpg++;
                } else {
                  htpe++;
                }
              }

              if (awayTeam._id === match.homeTeam) {
                if (match.homeGoals > match.awayGoals) {
                  atpg++;
                } else if (match.homeGoals < match.awayGoals) {
                  atpp++;
                } else {
                  atpe++;
                }
              } else if (awayTeam._id === match.awayTeam) {
                if (match.homeGoals > match.awayGoals) {
                  atpp++;
                } else if (match.homeGoals < match.awayGoals) {
                  atpg++;
                } else {
                  atpe++;
                }
              }
            }
          });
          //actualizar teams stadistics
          axios.patch(`${url}/teams/${homeTeam._id}`, {
            performance: {
              wins: htpg,
              losses: htpp,
              ties: htpe,
            },
          });
          axios.patch(`${url}/teams/${awayTeam._id}`, {
            performance: {
              wins: atpg,
              losses: atpp,
              ties: atpe,
            },
          });
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  return (
    <div>
      <div>Date: {date}</div>
      <div className="border border-primary">
        <label>Home Team:</label>
        <div>{homeTeam.name}</div>
        <label>Home Goals:</label>
        <div>{homeGoals}</div>
        <AddGoalModal
          matchId={matchData._id}
          teamId={homeTeam._id}
          teamName={homeTeam.name}
        />
      </div>

      <div className="border border-danger">
        <label>Away Team:</label>
        <div>{awayTeam.name}</div>
        <label>Away Goals:</label>
        <div>{awayGoals}</div>
        <AddGoalModal
          matchId={matchData._id}
          teamId={awayTeam._id}
          teamName={awayTeam.name}
        />
      </div>

      <div>
        <div>
          <label>Status:</label>
          <select value={status} onChange={handleStatusChange}>
            <option value="pending">Pending</option>
            <option value="inprogress">In Progress</option>
            <option value="finished">Finished</option>
          </select>
        </div>
        <button onClick={handleUpdateStatus}>Cambiar Status</button>
      </div>
    </div>
  );
};

export default EditMatch;

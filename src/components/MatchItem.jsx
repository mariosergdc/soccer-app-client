import axios from "axios";
import { useEffect, useState } from "react";
import { url } from "../utils/backurl";
import convertToAmPm from "../utils/convertToAmPm";

function MatchItem({ match }) {
  const [homeTeam, setHomeTeam] = useState({});
  const [awayTeam, setAwayTeam] = useState({});

  useEffect(() => {
    axios
      .get(`${url}/teams/${match.homeTeam}`)
      .then((response) => {
        setHomeTeam(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    axios
      .get(`${url}/teams/${match.awayTeam}`)
      .then((response) => {
        setAwayTeam(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [match.homeTeam, match.awayTeam]);

  const date = new Date(match.date);

  return (
    <div className="match-item  p-2 mb-2">
      <div className="d-flex justify-content-between">
        <div>Fecha: {date.toLocaleDateString()}</div>
        <div>Hora: {convertToAmPm(date)}</div>
      </div>
      <hr className="mx-1 p-0"></hr>
      <div className="d-flex">
        <div className=" w-50">
          <div className="fs-3">{homeTeam.name}</div>
          <div className="fs-4">{match.homeGoals}</div>
        </div>
        <div className=" w-50">
          <div className="fs-3">{awayTeam.name}</div>
          <div className="fs-4">{match.awayGoals}</div>
        </div>
      </div>
      <hr className="mx-1 p-0"></hr>
      <div>
        <div>{match.status}</div>
      </div>
    </div>
  );
}

export default MatchItem;

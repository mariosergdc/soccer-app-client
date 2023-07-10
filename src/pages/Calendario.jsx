import { useState, useEffect } from "react";
import axios from "axios";
import { url } from "../utils/backurl";
import MatchItem from "../components/MatchItem";
import { Col, Row } from "react-bootstrap";

function Calendario() {
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

  return (
    <div>
      <h1>Calendario</h1>
      <div className="calendario-container">
        <Row>
          {matches.map((match) => (
            <Col xs={12} md={4} key={match._id}>
              <MatchItem match={match} />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}

export default Calendario;

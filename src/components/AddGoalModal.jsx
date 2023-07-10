import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import GoalForm from "./GoalForm";

const AddGoalModal = ({ matchId, teamId, teamName, fetchMatchData }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Goal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Goal for {teamName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <GoalForm
            matchId={matchId}
            teamId={teamId}
            handleClose={handleClose}
            fetchMatchData={fetchMatchData}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddGoalModal;

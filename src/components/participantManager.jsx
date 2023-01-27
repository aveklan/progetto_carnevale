import { Component } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";

import InputForm from "./inputForm";
import ParticipantList from "./participantList";
import {
  loadParticipants,
  getParticipants,
  addParticipant,
  resetParticipants,
} from "./utils/participants";

class ParticipantManager extends Component {
  state = {
    participants: loadParticipants(),
  };

  handleInsert = (currentTarget) => {
    addParticipant(currentTarget);
    const participants = getParticipants();
    this.setState({ participants });
  };

  handleReset = () => {
    resetParticipants();
    this.setState({ participants: [] });
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col>
            <h4>Conteggio votanti elezioni dello tzigano</h4>
            <InputForm onInsert={this.handleInsert}></InputForm>
            <Button onClick={this.handleReset}>Reset</Button>
          </Col>
          <Col>
            <h4>Risultati</h4>
            <ParticipantList
              participants={this.state.participants}
            ></ParticipantList>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ParticipantManager;

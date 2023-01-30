import { Component } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import InputForm from "./inputForm";
import ParticipantList from "./participantList";
import Totals from "./totals";
import {
  loadParticipants,
  getParticipants,
  addParticipant,
  resetParticipants,
  saveParticipants,
  removeParticipant,
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
  handleClear = () => {
    resetParticipants();
    this.setState({ participants: [] });
  };

  handleSave = () => {
    saveParticipants();
  };

  handleRemove = ({ currentTarget: input }) => {
    var participants = [...this.state.participants];
    participants.splice(input.id, 1);
    removeParticipant(input.id);
    this.setState({ participants });
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col>
            <h4>Conteggio votanti elezioni dello tzigano</h4>
            <InputForm
              onInsert={this.handleInsert}
              onCLear={this.handleClear}
              onSave={this.handleSave}
            />
          </Col>
          <Col>
            <h4>Iscritti:</h4>
            <ParticipantList
              participants={this.state.participants}
              onRemove={this.handleRemove}
            ></ParticipantList>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col md={6}>
            <h4>Totali:</h4>
            <Totals participants={this.state.participants}></Totals>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ParticipantManager;

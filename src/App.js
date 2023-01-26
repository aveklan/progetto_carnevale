import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputForm from "./components/inputForm";

function App() {
  return (
    <div>
      <div className="text-center">
        <h1>Progetto Carnevale</h1>
      </div>
      <Container fluid>
        <Row>
          <Col>
            <h4>Conteggio votanti elezioni dello tzigano</h4>
            <InputForm></InputForm>
          </Col>
          <Col>
            <h4>Risultati</h4>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;

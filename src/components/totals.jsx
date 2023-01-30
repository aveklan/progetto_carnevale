import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import TotalsCard from "./common/totalsCard";

const Totals = ({ participants }) => {
  var totM = 0,
    totF = 0,
    totL = 0,
    totP = 0,
    tot = participants.length;

  const calculateTotals = () => {
    for (var i in participants) {
      if (participants[i].gender === "M") totM++;
      else if (participants[i].gender === "F") totF++;

      if (participants[i].province === "L") totL++;
      else if (participants[i].province === "P") totP++;
    }
  };

  calculateTotals();

  return (
    <div>
      <Container>
        <Row className="mt-3 ml-1">
          <Col>
            <TotalsCard name="Maschi" value={totM} />
          </Col>
          <Col>
            <TotalsCard name="Femmine" value={totF} />
          </Col>
          <Col>
            <TotalsCard name="Lugagnano" value={totL} />
          </Col>
          <Col>
            <TotalsCard name="Provincia" value={totP} />
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <TotalsCard name="" value={tot} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Totals;

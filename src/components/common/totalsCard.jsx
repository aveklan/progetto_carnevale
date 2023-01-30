import Card from "react-bootstrap/Card";

function TotalsCard({ name, value }) {
  return (
    <Card>
      <Card.Body>
        Numero totale {name} : {value}
      </Card.Body>
    </Card>
  );
}

export default TotalsCard;

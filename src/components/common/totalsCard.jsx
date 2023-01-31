import Card from "react-bootstrap/Card";

function TotalsCard({ name, value }) {
  return (
    <Card className="text-center">
      <Card.Body>
        Numero totale {name}: {value}
      </Card.Body>
    </Card>
  );
}

export default TotalsCard;

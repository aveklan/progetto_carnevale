import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

const InputCheckbox = ({ name, label, values, legend, error, onChange }) => {
  return (
    <Form.Group as={Row} className="mb-3" controlId="Gender">
      <Form.Label column sm="3">
        {label}
      </Form.Label>
      <Col sm="3">
        <Form.Check
          inline
          label={values[0]}
          name={name}
          type="radio"
          value={values[0]}
          onChange={onChange}
        />
        <Form.Check
          inline
          label={values[1]}
          name={name}
          type="radio"
          value={values[1]}
          onChange={onChange}
        />
      </Col>
      <Col sm="6">{legend}</Col>

      {error && <div className="alert alert-danger">{error}</div>}
    </Form.Group>
  );
};

export default InputCheckbox;

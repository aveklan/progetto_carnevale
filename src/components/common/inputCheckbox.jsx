import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

const InputCheckbox = ({
  name,
  label,
  value,
  values,
  legend,
  error,
  onChange,
}) => {
  return (
    <Form.Group as={Row} className="mb-3" controlId="Gender">
      <Form.Label column sm="3">
        {label}
      </Form.Label>
      <Col sm="3">
        <Form.Check
          inline
          type="radio"
          label={values[0]}
          name={name}
          value={values[0]}
          checked={value === values[0]}
          onClick={onChange}
        />
        <Form.Check
          inline
          type="radio"
          label={values[1]}
          name={name}
          value={values[1]}
          checked={value === values[1]}
          onClick={onChange}
        />
      </Col>
      <Col sm="6">{legend}</Col>

      {error && <div className="alert alert-danger">{error}</div>}
    </Form.Group>
  );
};

export default InputCheckbox;

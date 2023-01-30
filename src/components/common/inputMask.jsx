import MaskedInput from "react-text-mask";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const InputMask = ({ name, label, value, error, onChange }) => {
  return (
    <Form.Group as={Row} className="mb-3" controlId={name}>
      <Form.Label column sm="3">
        {label}
      </Form.Label>
      <Col sm="9">
        <MaskedInput
          className="form-control"
          placeholder={label}
          value={value}
          onChange={onChange}
          name={name}
          mask={[/\d/, /\d/, "/", /\d/, /\d/, "/", /\d/, /\d/, /\d/, /\d/]}
        />
        {error && <div className="alert alert-danger">{error}</div>}
      </Col>
    </Form.Group>
  );
};

export default InputMask;

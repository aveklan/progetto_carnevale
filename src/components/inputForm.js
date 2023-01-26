import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import LocalForm from "./common/form";
import Input from "./common/input";
import InputCheckbox from "./common/inputCheckbox";

class InputForm extends LocalForm {
  state = {
    data: {
      surname: "",
      name: "",
      year: "",
      gender: "",
      province: "",
    },
    errors: {},
  };

  schema = () => {
    const Joi = require("joi");
    const schema = Joi.object({
      surname: Joi.string().required(),
      name: Joi.string().required(),
      year: Joi.number().integer().min(1900).max(2013).required(),
      gender: Joi.valid("M").valid("F").required(),
      province: Joi.valid("L").valid("P").required(),
    });
    return schema;
  };

  doSubmit = () => {
    console.log("Submitted");
  };

  render() {
    const { data } = this.state;
    const { errors } = this.state;
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Input
            name="surname"
            label="Cognome"
            error={errors.surname}
            value={data.surname}
            onChange={this.handleChange}
          ></Input>
          <Input
            name="name"
            label="Nome"
            error={errors.name}
            value={data.name}
            onChange={this.handleChange}
          ></Input>
          <Input
            name="year"
            label="Anno di nascita"
            error={errors.year}
            value={data.year}
            onChange={this.handleChange}
          ></Input>
          <InputCheckbox
            name="gender"
            label="Sesso"
            values={["M", "F"]}
            legend="M-per maschio, F-per femmina"
            error={errors.gender}
            value={data.gender}
            onChange={this.handleChange}
          ></InputCheckbox>
          <InputCheckbox
            name="province"
            label="Provincia"
            values={["L", "P"]}
            legend="L-per lugagnao, P-per provincia"
            error={errors.province}
            value={data.province}
            onChange={this.handleChange}
          ></InputCheckbox>
          <Button variant="primary" type="submit">
            Inserisci
          </Button>
        </Form>
      </div>
    );
  }
}

export default InputForm;

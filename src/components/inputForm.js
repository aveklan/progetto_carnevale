import React, { Component } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import Input from "./common/input";
import InputCheckbox from "./common/inputCheckbox";

class InputForm extends Component {
  state = {
    account: {
      surname: "",
      name: "",
      year: "",
      gender: "",
      province: "",
    },
    errors: {},
  };

  validate = () => {
    const Joi = require("joi");
    const schema = Joi.object({});
    return { surname: "Surname is requred." };
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;
  };

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };

  render() {
    const { account } = this.state;
    const { errors } = this.state;
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Input
            name="surname"
            label="Cognome"
            error={errors.surname}
            value={account.surname}
            onChange={this.handleChange}
          ></Input>
          <Input
            name="name"
            label="Nome"
            error={errors.name}
            value={account.name}
            onChange={this.handleChange}
          ></Input>
          <Input
            name="year"
            label="Anno di nascita"
            error={errors.year}
            value={account.year}
            onChange={this.handleChange}
          ></Input>
          <InputCheckbox
            name="gender"
            label="Sesso"
            values={["M", "F"]}
            legend="M-per maschio, F-per femmina"
            error={errors.gender}
            value={account.gender}
            onChange={this.handleChange}
          ></InputCheckbox>
          <InputCheckbox
            name="province"
            label="Provincia"
            values={["L", "P"]}
            legend="L-per lugagnao, P-per provincia"
            error={errors.province}
            value={account.province}
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

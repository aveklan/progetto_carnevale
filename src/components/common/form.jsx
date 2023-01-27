import { Component } from "react";

class LocalForm extends Component {
  state = { data: {}, errors: {} };

  validate = () => {
    const schema = this.schema();
    //const options = { abortEarly: false };
    const result = schema.validate(this.state.data);

    if (!result.error) return null;

    const errors = {};
    for (let item of result.error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;
    this.doSubmit();
  };

  handleChange = ({ currentTarget: input }) => {
    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data });
  };
}

export default LocalForm;

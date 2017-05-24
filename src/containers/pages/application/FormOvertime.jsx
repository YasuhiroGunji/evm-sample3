import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

import FieldInput from './FieldInput';

class SubmitValidationForm extends Component {

  render() {
    const { error, handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <Field
          name="email" type="email" component={FieldInput} label="email" />
        <Field name="password" type="password" component={FieldInput} label="Password" />
        {error && <strong>{error}</strong>}
        <div>
          <button className="c-btn c-btn-primary--flat" type="submit">Submit</button>
        </div>
      </form>
    );
  }
}

SubmitValidationForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'submitValidation',
})(SubmitValidationForm);

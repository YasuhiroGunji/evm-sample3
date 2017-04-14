import React, { PropTypes } from 'react';
import TextField from 'material-ui/TextField';

const styles = {
  textbox: {
    marginRight: 20,
    width: 150,
  },
  layout: {
    display: 'inline-block',
  },
};

const TextBox = props =>
  <div style={styles.layout}>
    <TextField
      floatingLabelText={props.label}
      value={props.value}
      onChange={e => props.handleTextChange(props.propertyName, e)}
      style={styles.textbox}
    />
  </div>
;

TextBox.propTypes = {
  label: PropTypes.string.isRequired,
  propertyName: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleTextChange: PropTypes.func.isRequired,
};

export default TextBox;

import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';

const styles = {
  textbox: {
    marginRight: 20,
    width: 300,
  },
  layout: {
    display: 'inline-block',
  },
};

const TextArea = props => (
  <div style={styles.layout}>
    <TextField
      multiLine
      rows={1}
      rowsMax={5}
      floatingLabelText={props.label}
      value={props.value}
      onChange={e => props.handleTextChange(props.propertyName, e)}
      style={styles.textbox}
    />
  </div>
);

TextArea.propTypes = {
  label: PropTypes.string.isRequired,
  propertyName: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleTextChange: PropTypes.func.isRequired,
};

export default TextArea;

import React from 'react';
import PropTypes from 'prop-types';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const styles = {
  customWidth: {
    marginRight: 20,
    width: 150,
  },
  layout: {
    display: 'inline-block',
  },
};

export default class DropDown extends React.Component {

  constructor(props) {
    super(props);
    this.state = this.props;
    this.localhandler = this.localhandler.bind(this);
  }

  localhandler(event, index, value) {
    this.props.handleDdlChange(this.props.propertyName, event, index, value);
  }

  render() {
    const items = this.props.data.map(item => (
      <MenuItem key={item.value} value={item.value} primaryText={item.text} />
    ));

    return (
      <div style={styles.layout}>
        <SelectField
          floatingLabelText={this.props.label}
          value={this.props.selectValue}
          onChange={this.localhandler}
          style={styles.customWidth}
          disabled={this.props.disabled}
        >
          {items}
        </SelectField>
      </div>
    );
  }
}

DropDown.propTypes = {
  label: PropTypes.string.isRequired,
  propertyName: PropTypes.string.isRequired,
  selectValue: PropTypes.number.isRequired,
  data: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string,
    value: PropTypes.number,
  })).isRequired,
  handleDdlChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

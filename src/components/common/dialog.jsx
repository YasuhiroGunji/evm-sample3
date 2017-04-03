import React, { PropTypes } from 'react';
import Dialog from 'material-ui/Dialog';

const styles = {
  radioButton: {
    marginTop: 16,
  },
};

export default class ComDialog extends React.Component {

  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  handleActionTouchTap() {
    this.props.action.Snackbar(false);
    // alert('Event removed from your calendar.');
  }
  handleRequestClose() {
    this.props.action.Snackbar(false);
  }

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleClose}
      />,
    ];
    return (
      <div>
        <Dialog
          title="Scrollable Dialog"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
          autoScrollBodyContent={true}
        >
          <RadioButtonGroup name="shipSpeed" defaultSelected="not_light">
            {radios}
          </RadioButtonGroup>
        </Dialog>
      </div>
    );
  }
}

ComSnackbar.PropTypes = {
  snackbarOpen: React.PropTypes.bool.isRequired,
  action: React.PropTypes.object,
};

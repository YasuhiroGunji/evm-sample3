import React, { PropTypes } from 'react';
import Snackbar from 'material-ui/Snackbar';

export default class ComSnackbar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      autoHideDuration: 3000,
      message: 'Event added to your calendar',
      isOpen: this.props.snackbarOpen,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ isOpen: nextProps.snackbarOpen });
  }

  handleActionTouchTap() {
    this.props.action.Snackbar(false);
    // alert('Event removed from your calendar.');
  }
  handleRequestClose() {
    this.props.action.Snackbar(false);
  }

  render() {
    return (
      <div>
        <Snackbar
          open={this.state.isOpen}
          message={this.state.message}
          action="undo"
          autoHideDuration={this.state.autoHideDuration}
          onActionTouchTap={this.handleActionTouchTap}
          onRequestClose={this.handleRequestClose}
        />
      </div>
    );
  }
}

ComSnackbar.PropTypes = {
  snackbarOpen: React.PropTypes.bool.isRequired,
  action: React.PropTypes.func,
};

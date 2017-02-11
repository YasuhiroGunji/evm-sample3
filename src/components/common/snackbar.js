import React from 'react';
import Snackbar from 'material-ui/Snackbar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export default class ComSnackbar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      autoHideDuration: 4000,
      message: 'Event added to your calendar',
      isOpen: this.props.snackbarOpen,
    };
  }

  handleActionTouchTap = () => {
    this.setState({
      isOpen: false,
    });
    // alert('Event removed from your calendar.');
  };

  handleRequestClose = () => {
    this.setState({
      isOpen: false,
    });
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.snackbarOpen) {
      this.setState({isOpen: this.props.snackbarOpen});
    }
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
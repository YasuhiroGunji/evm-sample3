import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

export default class ComDialog extends React.Component {

  constructor(props) {
    super(props);
    this.state = this.props;
    this.setState({ isOpen: false });
    // this.onChangeCheckbox = this.onChangeCheckbox.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ isOpen: nextProps.isOpen });
  }

  // onChangeCheckbox(e, isInputChecked) {
  //   const newIds = this.state.groupIds.slice();
  //   this.setState({ groupIds: newIds });
  // }

  handleSubmit() {
    this.props.onSubmit(this.state.groupIds);
  }

  handleclose() {
    this.props.onClose();
  }

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={() => this.handleClose()}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onTouchTap={() => this.handleSubmit()}
      />,
    ];
    return (
      <div>
        <Dialog
          title="Scrollable Dialog"
          actions={actions}
          open={false}
          onRequestClose={() => this.handleClose()}
          autoScrollBodyContent={true}
        >
        aaaaaaaaaaaa
        </Dialog>
      </div>
    );
  }
}

ComDialog.propTypes = {
  isOpen: React.PropTypes.bool.isRequired,
  onSubmit: React.PropTypes.func.isRequired,
  onClose: React.PropTypes.func.isRequired,
};

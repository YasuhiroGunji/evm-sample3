import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

import GroupTree from './grouptree';

export default class ComDialog extends React.Component {

  constructor(props) {
    super(props);
    this.state = this.props;
    this.onChangeCheckbox = this.onChangeCheckbox.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ isOpen: nextProps.isOpen });
  }

  onChangeCheckbox(e, isInputChecked) {
    const newIds = this.state.groupIds.slice();
    this.setState({ groupIds: newIds });
  }

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
        secondary
        onTouchTap={this.props.onClose}
      />,
      <FlatButton
        label="Submit"
        primary
        keyboardFocused
        onTouchTap={this.props.onSubmit}
      />,
    ];
    return (
      <div>
        <Dialog
          title="グループ選択"
          actions={actions}
          open={this.props.isOpen}
          onRequestClose={this.props.onClose}
          autoScrollBodyContent
        >
          <GroupTree />
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

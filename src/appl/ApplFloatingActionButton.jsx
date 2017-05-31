import React from 'react';
import PropTypes from 'prop-types';

// material-ui component
import FloatingActionButton from 'material-ui/FloatingActionButton';
// svg-icon
import ContentAdd from 'material-ui/svg-icons/content/add';

const Style = {
  position: 'fixed',
  bottom: 16,
  right: 8,
  zIndex: 100,
};

const ActionButton = props => (
  <div style={Style}>
    <FloatingActionButton
      zDepth={3}
      secondary
      style={{ marginRight: 8 }}
      onTouchTap={props.handleShowForm}
    >
      <ContentAdd />
    </FloatingActionButton>
  </div>
);

ActionButton.propTypes = {
  handleShowForm: PropTypes.func.isRequired,
};

export default ActionButton;

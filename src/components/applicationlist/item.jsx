import React, { PropTypes } from 'react';
import Card from '../common/card';
import CardDetail from '../common/carddetail';

const ApplItem = (props) => {
  if (props.Item.ShowDetail) {
    return (
      <CardDetail
        Item={props.Item}
        onDelete={props.onDelete}
        handleClose={props.handleClose}
      />
    );
  }
  return (
    <Card
      Item={props.Item}
      onDelete={props.onDelete}
      handleOpen={props.handleOpen}
    />
  );
};

ApplItem.propTypes = {
  Item: PropTypes.object,
  onDelete: PropTypes.func.isRequired,
  handleOpen: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default ApplItem;

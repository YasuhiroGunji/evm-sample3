import React from 'react';
import PropTypes from 'prop-types';
import Card from '../components/card';
import CardDetail from '../components/carddetail';

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

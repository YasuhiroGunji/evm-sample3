import React, { PropTypes } from 'react';
import Card from '../common/card';
import CardDetail from '../common/carddetail';


const ApplicationItem = (props) => {
  if (props.ShowDetail) {
    return (
      <CardDetail
        Item={props.Item}
        handleDelete={props.handleDelete}
        handleClose={props.handleClose}
      />
    );
  }
  return (
    <Card
      Item={props.Item}
      handleDelete={props.handleDelete}
      handleClose={props.handleClose}
    />
  );
};

ApplicationItem.propTypes = {
  ShowDetail: PropTypes.bool.isRequired,
  Item: PropTypes.Object.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default ApplicationItem;

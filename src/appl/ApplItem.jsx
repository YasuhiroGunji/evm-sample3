import React from 'react';
import PropTypes from 'prop-types';
import Card from '../components/card';
import CardDetail from '../components/carddetail';

import Overtime from './item/Overtime';
import { APPL_CD } from '../utils/Enum';

const ApplItem = (props) => {
  switch (props.item.ApplCd) {
    case APPL_CD.OVERTIME:
      return (
        <Overtime {...props} />
      );
    default:
      return (
        <Card
          Item={props.item}
          onDelete={props.onDelete}
          handleOpen={props.handleOpen}
        />
      );
  }
};

ApplItem.propTypes = {
  item: PropTypes.objectOf(PropTypes.any).isRequired,
  onDelete: PropTypes.func.isRequired,
  handleOpen: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default ApplItem;

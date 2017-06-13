import React from 'react';
import PropTypes from 'prop-types';
// material-ui component
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';
// svg-icon
import Delete from 'material-ui/svg-icons/action/delete';
import { grey400 } from 'material-ui/styles/colors';

import Overtime from './item/OvertimeItem';
import { APPL_CD } from '../utils/Enum';

const style = {
  card: {
    position: 'relative',
    marginTop: 0,
    marginRight: 16,
    marginBottom: 2,
    marginLeft: 16,
  },
  icon: {
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 2,
  },
};

const ApplItem = (props) => {
  const { item, onDelete, handleOpen } = props;
  let contents = '';

  switch (item.ApplCd) {
    case APPL_CD.OVERTIME:
      contents = <Overtime item={item} handleOpen={handleOpen} />;
      break;

    case APPL_CD.IRREGULAR:
      contents = <Overtime item={item} handleOpen={handleOpen} />;
      break;

    default:
      contents = '';
  }

  return (
    <Paper zDepth={2} style={style.card}>
      <div style={style.icon}>
        <IconButton
          tooltip={'delete'}
          tooltipPosition={'bottom-left'}
          onClick={() => onDelete(item.ApplId)}
        >
          <Delete color={grey400} />
        </IconButton>
      </div>
      {contents}
    </Paper>
  );
};

ApplItem.propTypes = {
  item: PropTypes.objectOf(PropTypes.any).isRequired,
  onDelete: PropTypes.func.isRequired,
  handleOpen: PropTypes.func.isRequired,
};

export default ApplItem;

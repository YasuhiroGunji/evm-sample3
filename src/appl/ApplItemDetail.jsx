import React from 'react';
import PropTypes from 'prop-types';
// material-ui component
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';
import { ListItem } from 'material-ui/List';
// import LinearProgress from 'material-ui/LinearProgress';

// svg-icon
import Delete from 'material-ui/svg-icons/action/delete';
import { grey400 } from 'material-ui/styles/colors';

import Overtime from './item/OvertimeItemEdit';
import { APPL_CD } from '../utils/Enum';

const style = {
  header: {
    position: 'relative',
    marginTop: 30,
    marginLeft: -8,
    marginRight: -8,
    title: {
      fontSize: '1.2rem',
      fontWeight: 'bold',
      marginRight: 16,
    },
    deleteIcon: {
      position: 'absolute',
      top: 0,
      right: 0,
      zIndex: 2,
    },
  },
  edit: {
    marginLeft: -8,
    marginRight: -8,
    marginBottom: 30,
    backgroundColor: '#fff',
  },
};

const ApplItemDetail = (props) => {
  const { item, onDelete, handleClose, initialEdit } = props;
  let header = '';
  let contents = '';

  switch (item.ApplCd) {
    case APPL_CD.OVERTIME:
      header = (
        <div>
          <span style={style.header.title}>{'残業申請'}</span>
          <span style={style.header.title}>{`${item.ScheduledDate}`}</span>
        </div>
      );
      contents = <Overtime item={item} initialEdit={initialEdit} />;
      break;

    case APPL_CD.IRREGULAR:
      header = (
        <div>
          <span style={style.title}>{'変則申請'}</span>
          <span style={style.title}>{`${item.ScheduledDate}`}</span>
        </div>
      );
      contents = <Overtime item={item} initialEdit={initialEdit} />;
      break;

    default:
      header = '';
      contents = '';
  }

  return (
    <div>
      <Paper zDepth={1} style={style.header}>
        <div style={style.header.deleteIcon}>
          <IconButton
            tooltip={'delete'}
            tooltipPosition={'bottom-left'}
            onClick={() => onDelete(item.ApplId)}
          >
            <Delete color={grey400} />
          </IconButton>
        </div>
        <ListItem
          onTouchTap={() => handleClose(item.ApplId)}
          primaryText={header}
        />
      </Paper>

      <Paper zDepth={1} style={style.edit}>
        {contents}
      </Paper>
    </div>
  );
};

ApplItemDetail.propTypes = {
  item: PropTypes.objectOf(PropTypes.any).isRequired,
  onDelete: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
  initialEdit: PropTypes.func.isRequired,
};

export default ApplItemDetail;

import React from 'react';
import PropTypes from 'prop-types';

// material-ui component
import Paper from 'material-ui/Paper';
import { ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
// color
import { grey400, yellow600 } from 'material-ui/styles/colors';
// svg-icon
import Delete from 'material-ui/svg-icons/action/delete';
import Zangyo from '../../images/zangyo';

const OvertimeItem = (props) => {
  const { item, onDelete, handleOpen, handleClose } = props;

  return (
    <Paper zDepth={2} className={'md_card'}>

      <div className={'md_card_icon'}>
        <IconButton
          tooltip={'delete'}
          tooltipPosition={'bottom-left'}
          onClick={() => onDelete(item.ApplId)}
        >
          <Delete color={grey400} />
        </IconButton>
      </div>

      <ListItem
        onClick={() => handleOpen(item.ApplId)}
        leftAvatar={<Avatar icon={<Zangyo />} backgroundColor={yellow600} />}
        primaryText={
          <div className={'md_card_content'}>
            <div className={'md_card_title'}>
              <div>{`${item.ScheduledDate}    ${item.CustomerCd}/${item.ProjectCd}    ${item.WorkContent}`}</div>
            </div>
          </div>
        }
        secondaryText={
          <div>
            <div>
              <span>予定：</span>
              <span>{item.OvertimeStart}～{item.OvertimeEnd}</span>
              <span>普通：</span>
              <span>{item.NomalOvertimeHrs} 深夜：</span>
              <span>{item.LateOvertimeHrs}</span>
            </div>
            <div>
              <span>実績：</span>
              <span>{item.OvertimeActualStart}～{item.OvertimeActualEnd}</span>
            </div>
          </div>
        }
      />
    </Paper>
  );
};

OvertimeItem.propTypes = {
  item: PropTypes.objectOf(PropTypes.any).isRequired,
  onDelete: PropTypes.func.isRequired,
  handleOpen: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default OvertimeItem;

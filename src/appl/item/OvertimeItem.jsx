import React from 'react';
import PropTypes from 'prop-types';

// material-ui component
import { ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
// color
import { yellow600 } from 'material-ui/styles/colors';
// svg-icon
import Zangyo from '../../images/zangyo';


const style = {
  title: {
    marginRight: 16,
  },
};

const OvertimeItem = (props) => {
  const { item, handleOpen } = props;

  return (
    <ListItem
      onTouchTap={() => handleOpen(item.ApplId)}
      leftAvatar={<Avatar icon={<Zangyo />} backgroundColor={yellow600} />}
      primaryText={
        <div>
          <span style={style.title}>{`${item.ScheduledDate}`}</span>
          <span style={style.title}>{`${item.CustomerCd}/${item.ProjectCd}`}</span>
          <span style={style.title}>{`${item.WorkContent}`}</span>
          <span style={style.title}>{`普通：${item.NomalOvertimeHrs}`}</span>
          <span style={style.title}>{`深夜：${item.LateOvertimeHrs}`}</span>
        </div>
      }
    >
    </ListItem>
  );
};

OvertimeItem.propTypes = {
  item: PropTypes.objectOf(PropTypes.any).isRequired,
  handleOpen: PropTypes.func.isRequired,
};

export default OvertimeItem;

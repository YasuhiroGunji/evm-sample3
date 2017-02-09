import React, { Component, PropTypes } from 'react';

import Paper from 'material-ui/Paper';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Delete from 'material-ui/svg-icons/action/delete';
import Edit from 'material-ui/svg-icons/editor/mode-edit';
import FileFolder from 'material-ui/svg-icons/file/folder';
import MenuItem from 'material-ui/MenuItem';
import {grey400, yellow600, grey500, darkBlack, lightBlack} from 'material-ui/styles/colors';

const style = {
  cardstyle: {
    height: 72,
    marginTop: 2,
  },
  marginStyle:{
    marginRight: 8,
  }
};

const iconButtonElement = (
  <IconButton
    touch={true}
    tooltip="more"
    tooltipPosition="top-left"
  >
    <MoreVertIcon color={grey400} />
  </IconButton>
);
const rightIconMenu = (
  <IconMenu iconButtonElement={iconButtonElement}>
    <MenuItem>Edit</MenuItem>
    <MenuItem>Pined</MenuItem>
    <MenuItem>Delete</MenuItem>
  </IconMenu>
);

export default class Card extends Component {

  static PropTypes = {
    applyItem: PropTypes.shape({
      Id: PropTypes.number.isRequired,
      EmpId: PropTypes.string.isRequired,
      ScheduledDate: PropTypes.object.isRequired,
      CustomerCd: PropTypes.string.isRequired,
      ProjectCd: PropTypes.string.isRequired,
      WorkContent: PropTypes.string.isRequired,
      PlanStartTIme: PropTypes.string.isRequired,
      PlanEndTime: PropTypes.string.isRequired,
      OvertimeStart: PropTypes.string.isRequired,
      OvertimeEnd: PropTypes.string.isRequired,
      OverTime: PropTypes.string.isRequired,
      LateOverTime: PropTypes.string.isRequired,
    })
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Paper style={style.cardstyle} zDepth={2}>
        <span style={{float:'right'}}>
          <IconButton
            touch={true}
            tooltip="delete"
            tooltipPosition="top-right"
          >
            <Delete color={grey500} />
          </IconButton>
          <IconButton
            touch={true}
            tooltip="delete"
            tooltipPosition="top-right"
          >
            <Edit color={grey500} />
          </IconButton>
        </span>
        <ListItem
          leftAvatar={<Avatar icon={<FileFolder />} backgroundColor={yellow600} />}
          rightIcon={rightIconMenu}
          primaryText={this.props.applyItem.ScheduledDate + '' + this.props.applyItem.WorkContent}
          secondaryText={
            <p>
              <span style={style.marginStyle}>予定：{this.props.applyItem.PlanStartTIme}～{this.props.applyItem.PlanEndTime}</span>
              <span style={style.marginStyle}>実績：{this.props.applyItem.OvertimeStart}～{this.props.applyItem.OvertimeEnd}</span>
              <span style={style.marginStyle}>普通：{this.props.applyItem.OverTime} 深夜：{this.props.applyItem.LateOverTime}</span>
            </p>
          }
        >
          
        </ListItem>
      </Paper>
    )
  };
}

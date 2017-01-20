import React, { Component, PropTypes } from 'react';

import Paper from 'material-ui/Paper';
import FontIcon from 'material-ui/FontIcon';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import FileFolder from 'material-ui/svg-icons/file/folder';
import MenuItem from 'material-ui/MenuItem';
import {grey400, yellow600, darkBlack, lightBlack} from 'material-ui/styles/colors';

const style = {
  cardstyle: {
    height: 72,
    marginTop: 2,
    display: 'block',
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

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Paper style={style.cardstyle} zDepth={2}>
        <ListItem
          leftAvatar={<Avatar icon={<FileFolder />} backgroundColor={yellow600} />}
          rightIcon={rightIconMenu}
          primaryText={this.props.applyItem.date + '' + this.props.applyItem.workItem}
          secondaryText={
            <p>
              <span style={style.marginStyle}>予定：{this.props.applyItem.planStartTime}～{this.props.applyItem.planEndTime}</span>
              <span style={style.marginStyle}>実績：{this.props.applyItem.actualStartTime}～{this.props.applyItem.actualEndTime}</span>
              <span style={style.marginStyle}>普通：{this.props.applyItem.overTime} 深夜：{this.props.applyItem.lateOverTime}</span>
            </p>
          }
        />
      </Paper>
    )
  };
}

Card.PropTypes = {
  applyItem: PropTypes.shape({
    id: PropTypes.number.isRequired,
    date: PropTypes.object.isRequired,
    workItem: PropTypes.string.isRequired,
    kokyakuCd: PropTypes.string.isRequired,
    projectCd: PropTypes.string.isRequired,
    planStartTime: PropTypes.string.isRequired,
    planEndTime: PropTypes.string.isRequired,
    actualStartTime: PropTypes.string.isRequired,
    actualEndTime: PropTypes.string.isRequired,
    overTime: PropTypes.string.isRequired,
    lateOverTime: PropTypes.string.isRequired,
  })
}
import React, { Component, PropTypes } from 'react';

import Card from '../common/card';

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

export default class ApplyList extends Component {

  static PropTypes = {
    applyList : PropTypes.arrayOf({
      id: PropTypes.number.isRequired,
      date: PropTypes.object.isRequired,
      workItem: PropTypes.string.isRequired,
      kokyakuCd: PropTypes.string.isRequired,
      projectCd: PropTypes.string.isRequired,
      planStartTIme: PropTypes.string.isRequired,
      planEndTime: PropTypes.string.isRequired,
      actualStartTime: PropTypes.string.isRequired,
      actualEndTIme: PropTypes.string.isRequired,
      overTime: PropTypes.string.isRequired,
      lateOverTime: PropTypes.string.isRequired,
    })
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="content">

        <div className="l_week_container">
          <div className="l_week_item">
            今週
          </div>
        </div>

        <List>
          { this.props.applyList.map(
            (applyItem) => <Card key={ applyItem.id } applyItem={ applyItem } />
          )}
        </List>

        <div className="l_week_container">
          <div className="l_week_item">
            先週
          </div>
        </div>
        <List>
          <Paper style={style.cardstyle} zDepth={2}>
            <ListItem
              leftAvatar={<Avatar icon={<FileFolder />} backgroundColor={yellow600} />}
              rightIcon={rightIconMenu}
              primaryText="2016/9/12(月) 画面一覧作成"
              secondaryText={
                <p>
                  <span style={style.marginStyle}>予定：18:00～21:00</span>
                  <span style={style.marginStyle}>実績：18:00～21:00</span>
                  <span style={style.marginStyle}>普通：2.5 深夜：0</span>
                </p>
              }
            />
          </Paper>
          <Paper style={style.cardstyle} zDepth={2}>
            <ListItem
              leftAvatar={<Avatar icon={<FileFolder />} backgroundColor={yellow600} />}
              rightIcon={rightIconMenu}
              primaryText="2016/9/12(月) 画面一覧作成"
              secondaryText={
                <p>
                  <span style={style.marginStyle}>予定：18:00～21:00</span>
                  <span style={style.marginStyle}>実績：18:00～21:00</span>
                  <span style={style.marginStyle}>普通：2.5 深夜：0</span>
                </p>
              }
            />
          </Paper>
        </List>
      </div>
    )
  };
}

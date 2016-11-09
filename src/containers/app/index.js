import React, { Component } from 'react';

import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import FontIcon from 'material-ui/FontIcon';
import RaisedButton from 'material-ui/RaisedButton';

import {grey400, yellow600, darkBlack, lightBlack} from 'material-ui/styles/colors';
import {List, ListItem} from 'material-ui/List';

import DatePicker from 'material-ui/DatePicker';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import FileFolder from 'material-ui/svg-icons/file/folder';



import { Link } from 'react-router';

import './style.styl';

const style = {
  cardstyle: {
    height: 72,
    marginTop: 2,
    display: 'block',
  },
  iconStyle:{
    fontSize: 3.0 + 'rem',
    marginRight: 24,
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

export default class App extends Component {

  constructor(props) {
    super(props);
    
    this.state = { showMenu: false, };
  }
  onMenuStateChange(showMenu){
      this.setState({ showMenu });
  }

  render() {
    return (
      <div className="l_wrapper">
        <AppBar
          title="evm-sampl2"
          onLeftIconButtonTouchTap={() => this.onMenuStateChange(true)}
        />
        <Drawer
          docked={false}
          open={this.state.showMenu}
          width={200}
          onRequestChange={(showMenu) => this.onMenuStateChange(showMenu)}
        >
          <Link to="/"><MenuItem onTouchTap={() => this.onMenuStateChange(false)}>Top</MenuItem></Link>
          <Link to="/attendance"><MenuItem onTouchTap={() => this.onMenuStateChange(false)}>Attendancce</MenuItem></Link>
          <Link to="/apply"><MenuItem onTouchTap={() => this.onMenuStateChange(false)}>Apply</MenuItem></Link>
        </Drawer>

        <div className="l_flex_container">

          <div className="l_flex_box">

            <div className="content">

              <div className="l_week_container">
                <div className="l_week_item">
                  今週
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

          </div>

          <div className="l_flex_box">

            <div className="content">

              <Paper zDepth={3}>

              <div className="l_form_container">
                <div className="l_form_row">
                  <DatePicker 
                    hintText="申請日"
                    autoOk="true" 
                  />
                </div>
                <div className="l_form_row">
                  <TextField
                    hintText=""
                    floatingLabelText="顧客コード"
                  />
                </div>
                <div className="l_form_row">
                  <TextField
                    hintText=""
                    floatingLabelText="プロジェクトコード"
                  />
                </div>
                <div className="l_form_row">
                  <TextField
                    hintText=""
                    floatingLabelText="作業開始時間"
                  />
                </div>
                <div className="l_form_row">
                  <TextField
                    hintText=""
                    floatingLabelText="作業内容"
                    multiLine={true}
                    rows={1}
                    rowsMax={5}
                  />
                </div>
                <div className="l_form_row md_form_button">
                  <RaisedButton label="Cancel" style={style.marginStyle} />
                  <RaisedButton label="Submit" primary={true} style={style.marginStyle} />
                </div>
              
              </div>

              </Paper>
            </div>
          </div>
        </div>

      </div>
    )
  };
}




// {this.props.children}
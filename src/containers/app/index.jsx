import React, { Component, PropTypes } from 'react';
import ClassSet from 'react-classset';
import { Link } from 'react-router';

import AppBar from 'material-ui/AppBar';
import Divider from 'material-ui/Divider';
import Drawer from 'material-ui/Drawer';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import { List, ListItem } from 'material-ui/List';
import MenuItem from 'material-ui/MenuItem';
import Subheader from 'material-ui/Subheader';

// svg-icon
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ContentSend from 'material-ui/svg-icons/content/send';

import Person from 'material-ui/svg-icons/social/person';
import Group from 'material-ui/svg-icons/social/group';

import { grey50 } from 'material-ui/styles/colors';
import Checkbox from 'material-ui/Checkbox';

// import GroupTree from './grouptree';
import './style.styl';

const GroupTree = () => (
  <IconMenu
    iconButtonElement={
      <IconButton>
        <Group color={grey50} />
      </IconButton>
    }
    targetOrigin={{ horizontal: 'right', vertical: 'top' }}
    anchorOrigin={{ horizontal: 'middle', vertical: 'bottom' }}
  >
    <List>
      <ListItem
        primaryText="GS2"
        leftCheckbox={<Checkbox />}
        initiallyOpen={false}
        primaryTogglesNestedList={false}
        nestedItems={[
          <ListItem
            key={1}
            leftCheckbox={<Checkbox />}
            primaryText="T1"
            nestedItems={[
              <ListItem key={1} primaryText="郡司　康弘" leftCheckbox={<Checkbox />} />,
              <ListItem key={2} primaryText="赤石　翔" leftCheckbox={<Checkbox />} />,
              <ListItem key={3} primaryText="遠藤　美波" leftCheckbox={<Checkbox />} />,
            ]}
          />,
          <ListItem
            key={2}
            primaryText="T2"
            leftIcon={<Checkbox />}
            nestedItems={[
              <ListItem key={1} primaryText="郡司　康弘" leftCheckbox={<Checkbox />} />,
              <ListItem key={2} primaryText="赤石　翔" leftCheckbox={<Checkbox />} />,
              <ListItem key={3} primaryText="遠藤　美波" leftCheckbox={<Checkbox />} />,
            ]}
          />,
          <ListItem
            key={3}
            primaryText="T3"
            leftIcon={<Checkbox />}
            nestedItems={[
              <ListItem key={1} primaryText="郡司　康弘" leftCheckbox={<Checkbox />} />,
              <ListItem key={2} primaryText="赤石　翔" leftCheckbox={<Checkbox />} />,
              <ListItem key={3} primaryText="遠藤　美波" leftCheckbox={<Checkbox />} />,
            ]}
          />,
        ]}
      />
    </List>
  </IconMenu>
);
const Profile = () => (
  <IconMenu
    iconButtonElement={
      <IconButton>
        <Person color={grey50} />
      </IconButton>
    }
    targetOrigin={{ horizontal: 'right', vertical: 'top' }}
    anchorOrigin={{ horizontal: 'middle', vertical: 'bottom' }}
  >
    <MenuItem primaryText="Edit" />
    <MenuItem primaryText="Help" />
    <MenuItem primaryText="Sign out" />
  </IconMenu>
);

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = { showMenu: true };
  }

  onMenuStateChange() {
    this.setState({
      showMenu: !this.state.showMenu,
    });
  }

  render() {
    return (
      <div className="l_wrapper">
        <AppBar
          title="日報システム"
          className="l_header_override"
          zDepth={3}
          onLeftIconButtonTouchTap={() => this.onMenuStateChange()}
          iconElementRight={<Profile />}
        />
        <Drawer
          open={this.state.showMenu}
          width={232}
          containerClassName="l_drawer_override"
        >
          <List>
            <Subheader>勤怠管理</Subheader>
            <Link to="/attendance">
              <ListItem primaryText="勤務明細" leftIcon={<ActionGrade />} />
            </Link>
            <Link to="/apply">
              <ListItem primaryText="残業申請" leftIcon={<ContentSend />} />
            </Link>
            <Divider />
            <Subheader>承認</Subheader>
            <Link to="/apply">
              <ListItem primaryText="承認一覧" leftIcon={<ContentInbox />} />
            </Link>
            <Divider />
            <Subheader>マスタメンテ</Subheader>
            <Link to="/apply">
              <ListItem primaryText="Maintainance" leftIcon={<ContentDrafts />} />
            </Link>
          </List>
        </Drawer>

        <div
          className={ClassSet({
            l_main: true,
            is_active: this.state.showMenu,
          })}
        >
          {this.props.children}
        </div>

      </div>
    );
  }
}

// <Link to="/"><MenuItem onTouchTap={() => this.onMenuStateChange(false)}>Top</MenuItem></Link>
// <Link to="/attendance"><MenuItem onTouchTap={() => this.onMenuStateChange(false)}>Attendancce</MenuItem></Link>
// <Link to="/apply"><MenuItem onTouchTap={() => this.onMenuStateChange(false)}>Apply</MenuItem></Link>

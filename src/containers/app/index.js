import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import AppBar from 'material-ui/AppBar';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
import Drawer from 'material-ui/Drawer';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import {List, ListItem} from 'material-ui/List';
import MenuItem from 'material-ui/MenuItem';
import Subheader from 'material-ui/Subheader';

//svg-icon
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ContentSend from 'material-ui/svg-icons/content/send';

import Person from 'material-ui/svg-icons/social/person';
import Group from 'material-ui/svg-icons/social/group';

import {indigo500, grey50} from 'material-ui/styles/colors';

// import GroupTree from './grouptree';
import './style.styl';


import Checkbox from 'material-ui/Checkbox';
// const style = {
//   main: {
//     paddingTop: 56
//   }
// }
const GroupTree = () => (
  <IconMenu
    iconButtonElement={
      <IconButton>
        <Group color={grey50} />
      </IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'middle', vertical: 'bottom'}}
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
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'middle', vertical: 'bottom'}}
  >
    <MenuItem primaryText="Edit" />
    <MenuItem primaryText="Help" />
    <MenuItem primaryText="Sign out" />
  </IconMenu>
);

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = { showMenu: true, marginClass: "l_main is_active" };
  }

  onMenuStateChange(){
      this.setState({ 
        showMenu: !this.state.showMenu, 
        marginClass: "l_main" + ((!this.state.showMenu == true) ? " is_active" : "")
      });
  }

  render() {
    return (
      <div className="l_wrapper">
        <AppBar
          title="evm-sampl3"
          className="l_header_override"
          zDepth={3}
          onLeftIconButtonTouchTap={() => this.onMenuStateChange()}
          iconElementRight={<Profile />}
        />
        <Drawer
          open={this.state.showMenu}
          width={232}
          onRequestChange={(showMenu) => this.onMenuStateChange(showMenu)}
          containerClassName="l_drawer_override"
        >
          <List>
            <Subheader>勤怠管理</Subheader>
            <Link to="/">
              <ListItem primaryText="Top" leftIcon={<ContentInbox />} />
            </Link>
            <Link to="/attendance">
              <ListItem primaryText="Attendancce" leftIcon={<ActionGrade />} />
            </Link>
            <Link to="/apply">
              <ListItem primaryText="Apply" leftIcon={<ContentSend />} />
            </Link>
            <Divider />
            <Subheader>マスタメンテ</Subheader>
            <Link to="/apply">
              <ListItem primaryText="Maintainance" leftIcon={<ContentDrafts />} />
            </Link>
          </List>
        </Drawer>
        
        <div className={this.state.marginClass}>
          {this.props.children}
        </div>
      </div>
    )
  };
}
// <Link to="/"><MenuItem onTouchTap={() => this.onMenuStateChange(false)}>Top</MenuItem></Link>
//           <Link to="/attendance"><MenuItem onTouchTap={() => this.onMenuStateChange(false)}>Attendancce</MenuItem></Link>
//           <Link to="/apply"><MenuItem onTouchTap={() => this.onMenuStateChange(false)}>Apply</MenuItem></Link>
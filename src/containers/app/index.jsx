import React, { Component } from 'react';
import ClassSet from 'react-classset';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// control
// import Dialog from 'material-ui/Dialog';

import Checkbox from 'material-ui/Checkbox';

import Divider from 'material-ui/Divider';
import Drawer from 'material-ui/Drawer';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import { List, ListItem } from 'material-ui/List';
import MenuItem from 'material-ui/MenuItem';
import Subheader from 'material-ui/Subheader';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';

// svg-icon header
import Dehaze from 'material-ui/svg-icons/image/dehaze';
import Group from 'material-ui/svg-icons/social/group';
import Person from 'material-ui/svg-icons/social/person';

// svg-icon drawer
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ContentSend from 'material-ui/svg-icons/content/send';
import { white } from 'material-ui/styles/colors';

// custom control
import * as GroupDialog from './dialog';

// action
import * as baseActions from '../../actions/Base';

// stylus
import './style.styl';

const Profile = () => (
  <IconMenu
    iconButtonElement={
      <IconButton className={'l_profile_iconbutton'}>
        <Person color={white} />
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

class App extends Component {

  constructor(props) {
    super(props);
    this.state = this.props;
    this.onToggleMenu = this.onToggleMenu.bind(this);
    this.onPageTransition = this.onPageTransition.bind(this);

    this.onGroupDialogOpen = this.onGroupDialogOpen.bind(this);
    this.onGroupDialogClose = this.onGroupDialogClose.bind(this);
    this.onGroupSelect = this.onGroupSelect.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ showMenu: nextProps.showMenu });
  }

  onToggleMenu() {
    this.props.baseActionsBind.ShowMenu(!this.state.showMenu);
  }

  onPageTransition(e) {
    const pageName = e.target.innerText;

    if (pageName === '勤務明細') {
      this.setState({ pageTitle: '勤務明細' });
      this.setState({ isAttendance: true });
      this.setState({ isApply: false });
      this.setState({ isAp: false });
    } else if (pageName === '残業申請') {
      this.setState({ pageTitle: '残業申請' });
      this.setState({ isAttendance: false });
      this.setState({ isApply: true });
      this.setState({ isAp: false });
    } else if (pageName === '承認一覧') {
      this.setState({ pageTitle: '承認一覧' });
      this.setState({ isAttendance: false });
      this.setState({ isApply: false });
      this.setState({ isAp: true });
    }
  }

  onGroupDialogOpen() {
    this.setState({ isGroupDialogOpen: true });
  }
  onGroupDialogClose() {
    this.setState({ isGroupDialogOpen: false });
  }
  onGroupSelect(actionGroupIds) {
    this.setState({ groupIds: actionGroupIds });
    this.props.baseActionsBind.GroupSelect(actionGroupIds);

    this.setState({ isGroupDialogOpen: false });
  }

  render() {
    return (
      <div className="l_wrapper">

        <Paper zDepth={2} className={'l_header_override'}>
          <Toolbar
            className={ClassSet({
              l_header_override: true,
              is_attendance: this.state.isAttendance,
              is_apply: this.state.isApply,
              is_ap: this.state.isAp,
            })}
          >
            <ToolbarGroup firstChild>
              <IconButton
                onTouchTap={() => this.onToggleMenu()}
                className={'l_menu_iconbutton'}
              >
                <Dehaze color={white} />
              </IconButton>
              <ToolbarTitle
                text={this.state.pageTitle}
                className={'l_header_title'}
              />
            </ToolbarGroup>
            <ToolbarGroup>
              <TextField
                id="text-field-default"
                className={'l_header_searchbox'}
              />
            </ToolbarGroup>
            <ToolbarGroup lastChild>
              <IconButton
                onClick={this.onGroupDialogOpen}
              >
                <Group color={white} />
              </IconButton>
              <Profile />
            </ToolbarGroup>
          </Toolbar>
        </Paper>

        <Drawer
          open={this.state.showMenu}
          width={232}
          containerClassName={'l_drawer_override'}
        >
          <List>
            <Subheader>勤怠管理</Subheader>
            <Link to="/attendance">
              <ListItem
                id={'link_attendance'}
                primaryText={'勤務明細'}
                onClick={this.onPageTransition}
                leftIcon={<ActionGrade />}
              />
            </Link>
            <Link to="/apply">
              <ListItem
                primaryText={'残業申請'}
                onClick={this.onPageTransition}
                leftIcon={<ContentSend />}
              />
            </Link>
            <Divider />
            <Subheader>承認</Subheader>
            <Link to="/apply">
              <ListItem
                primaryText={'承認一覧'}
                onClick={this.onPageTransition}
                leftIcon={<ContentInbox />}
              />
            </Link>
            <Divider />
            <Subheader>マスタメンテ</Subheader>
            <Link to="/apply">
              <ListItem primaryText="Maintainance" leftIcon={<ContentDrafts />} />
            </Link>
          </List>
        </Drawer>

        <GroupDialog
          isOpen={this.state.isGroupDialogOpen}
          onSubmit={this.onGroupDialogClose}
          onClose={this.onGroupDialogClose}
        />

        {this.props.children}

      </div>
    );
  }
}

App.propTypes = {
  baseActionsBind: React.PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  const { showMenu, pageTitle,
    isAttendance, isApply, isAp,
    groupIds, isGroupDialogOpen } = state.Base;
  return {
    showMenu, pageTitle, isAttendance, isApply, isAp, groupIds, isGroupDialogOpen,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    baseActionsBind: bindActionCreators(baseActions, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

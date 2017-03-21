import React, { Component, PropTypes } from 'react';
import ClassSet from 'react-classset';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

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

import * as baseActions from '../../actions/Base';

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

class App extends Component {

  constructor(props) {
    super(props);
    this.state = this.props;
    this.onPageTransition = this.onPageTransition.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ showMenu: nextProps.showMenu });
  }

  onMenuStateChange() {
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

  render() {
    return (
      <div className="l_wrapper">
        <AppBar
          title={this.state.pageTitle}
          className={ClassSet({
            l_header_override: true,
            is_attendance: this.state.isAttendance,
            is_apply: this.state.isApply,
            is_ap: this.state.isAp,
          })}
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
              <ListItem
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

        {this.props.children}

      </div>
    );
  }
}

function mapStateToProps(state) {
  const { showMenu, baseActionsBind, pageTitle, isAttendance, isApply, isAp } = state.Base;
  return {
    showMenu, baseActionsBind, pageTitle, isAttendance, isApply, isAp,
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

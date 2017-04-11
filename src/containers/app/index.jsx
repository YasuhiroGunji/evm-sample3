import * as React from 'react';
import ClassSet from 'react-classset';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// control
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';

// svg-icon header
import Dehaze from 'material-ui/svg-icons/image/dehaze';
import Group from 'material-ui/svg-icons/social/group';
import Search from 'material-ui/svg-icons/action/search';
import Person from 'material-ui/svg-icons/social/person';

import { white } from 'material-ui/styles/colors';

// custom control
import GroupDialog from './dialog';
import Drawer from './drawer';

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

class App extends React.Component {

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
    this.props.actions.ShowMenu(!this.state.showMenu);
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
    this.setState({ showGroupDialog: true });
  }
  onGroupDialogClose() {
    this.setState({ showGroupDialog: false });
  }
  onGroupSelect(actionGroupIds) {
    this.setState({ groupIds: actionGroupIds });
    this.props.actions.GroupSelect(actionGroupIds);

    this.setState({ showGroupDialog: false });
  }

  render() {
    const GroupIcon = () => (
      <IconButton onClick={this.onGroupDialogOpen}>
        <Group color={white} />
      </IconButton>
    );

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
              <div className={'l_header_search'}>
                <div className={'l_header_search_icon'}>
                  <Search
                    color={white}
                    style={{ width: 30, height: 30, marginTop: 8, marginLeft: 16 }}
                  />
                </div>
                <div className={'l_header_search_input'}>
                  <TextField
                    id="text-header-search"
                    hintText="検索"
                    hintStyle={{ color: white }}
                    underlineShow={false}
                    style={{ zIndex: 300, color: '#fff' }}
                  />
                </div>
              </div>
            </ToolbarGroup>
            <ToolbarGroup lastChild>
              <GroupIcon />
              <Profile />
            </ToolbarGroup>
          </Toolbar>
        </Paper>

        <Drawer
          isOpen={this.state.showMenu}
          onPageTransition={this.onPageTransition}
        />

        <GroupDialog
          isOpen={this.state.showGroupDialog}
          onSubmit={this.onGroupSelect}
          onClose={this.onGroupDialogClose}
        />


        {this.props.children}

      </div>
    );
  }
}

App.propTypes = {
  actions: React.PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return state.Base;
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(baseActions, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

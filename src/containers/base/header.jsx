import React, { PropTypes } from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';

// Material-UI Components
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import { indigo500, deepPurple500, white } from 'material-ui/styles/colors';
// Header SVG-Icon
import Dehaze from 'material-ui/svg-icons/image/dehaze';
import Group from 'material-ui/svg-icons/social/group';
import Search from 'material-ui/svg-icons/action/search';
import Person from 'material-ui/svg-icons/social/person';

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

const Header = (props) => {
  let headerColor = indigo500;
  if (props.pageTitle === '勤務明細') {
    headerColor = deepPurple500;
  }

  return (
    <Paper zDepth={2} className={'l_header_override'}>
      <Toolbar className={'l_header_override'} style={{ backgroundColor: headerColor }}>
        <ToolbarGroup firstChild>
          <IconButton
            onTouchTap={props.handleShowSideMenu}
            className={'l_menu_iconbutton'}
          >
            <Dehaze color={white} />
          </IconButton>
          <ToolbarTitle
            text={props.pageTitle}
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
          <IconButton onClick={() => props.handleShowDialog(true)}>
            <Group color={white} />
          </IconButton>
          <ToolbarSeparator />
          <Profile />
        </ToolbarGroup>
      </Toolbar>
    </Paper>
  );
};

Header.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  handleShowSideMenu: PropTypes.func.isRequired,
  handleShowDialog: PropTypes.func.isRequired,
};

export default Header;

import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

// Material-UI Components
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
// SideMenu SVG-Icon
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ContentSend from 'material-ui/svg-icons/content/send';
// stylus
import './base.styl';

const SideMenu = props =>
  <Drawer
    open={props.isOpen}
    width={232}
    containerClassName={'l_drawer_override'}
  >
    <List>
      <Subheader>勤怠管理</Subheader>
      <NavLink to="/attendance">
        <ListItem
          primaryText={'勤務明細'}
          onClick={() => props.handlePageTransition('勤務明細')}
          leftIcon={<ActionGrade />}
        />
      </NavLink>
      <NavLink to="/apply">
        <ListItem
          primaryText={'申請一覧'}
          onClick={() => props.handlePageTransition('申請一覧')}
          leftIcon={<ContentSend />}
        />
      </NavLink>
      <Divider />
      <Subheader>承認</Subheader>
      <NavLink to="/apply">
        <ListItem
          primaryText={'承認一覧'}
          onClick={() => props.handlePageTransition('承認一覧')}
          leftIcon={<ContentInbox />}
        />
      </NavLink>
      <Divider />
      <Subheader>マスタメンテ</Subheader>
      <NavLink to="/apply">
        <ListItem primaryText="Maintainance" leftIcon={<ContentDrafts />} />
      </NavLink>
    </List>
  </Drawer>
;

SideMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handlePageTransition: PropTypes.func.isRequired,
};

export default SideMenu;

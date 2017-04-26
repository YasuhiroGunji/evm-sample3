import React, { PropTypes } from 'react';
import { Link } from 'react-router';

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
      <Link to="/attendance">
        <ListItem
          id={'link_attendance'}
          primaryText={'勤務明細'}
          onClick={() => props.handlePageTransition('勤務明細')}
          leftIcon={<ActionGrade />}
        />
      </Link>
      <Link to="/apply">
        <ListItem
          primaryText={'申請一覧'}
          onClick={() => props.handlePageTransition('申請一覧')}
          leftIcon={<ContentSend />}
        />
      </Link>
      <Divider />
      <Subheader>承認</Subheader>
      <Link to="/apply">
        <ListItem
          primaryText={'承認一覧'}
          onClick={() => props.handlePageTransition('承認一覧')}
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
;

SideMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handlePageTransition: PropTypes.func.isRequired,
};

export default SideMenu;

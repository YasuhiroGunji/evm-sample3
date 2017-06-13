import React from 'react';
import PropTypes from 'prop-types';
import CSSTransitionGroup from 'react-addons-css-transition-group';

import Avatar from 'material-ui/Avatar';
import Iconbutton from 'material-ui/IconButton';
import { List } from 'material-ui/List';
import { yellow600, green500 } from 'material-ui/styles/colors';

import Zangyo from '../images/zangyo';
import Hensoku from '../images/hensoku';
import ApplItem from './ApplItem';
import ApplItemDetail from './ApplItemDetail';


const ApplList = (props) => {
  const { applList, onDelete, handleOpen, handleClose, initialEdit } = props;

  return (
    <div className={'l_list_container'}>
      <div className="l_list_header">
        <div>
          <Iconbutton style={{ padding: 0 }}>
            <Avatar icon={<Zangyo />} backgroundColor={yellow600} />
          </Iconbutton>
          <Iconbutton style={{ padding: 0 }}>
            <Avatar icon={<Hensoku />} backgroundColor={green500} />
          </Iconbutton>
        </div>
      </div>
      <List>
        <CSSTransitionGroup
          transitionName={'example'}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
        >
          {applList.map((item) => {
            if (item.ShowDetail) {
              return (
                <ApplItemDetail
                  key={item.ApplId}
                  item={item}
                  onDelete={onDelete}
                  handleClose={handleClose}
                  initialEdit={initialEdit}
                />
              );
            }
            return (
              <ApplItem
                key={item.ApplId}
                item={item}
                onDelete={onDelete}
                handleOpen={handleOpen}
              />
            );
          })}
        </CSSTransitionGroup>
      </List>
    </div>
  );
};

ApplList.propTypes = {
  applList: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDelete: PropTypes.func.isRequired,
  handleOpen: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
  initialEdit: PropTypes.func.isRequired,
};

export default ApplList;

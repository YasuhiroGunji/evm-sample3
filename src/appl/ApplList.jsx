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


const ApplList = (props) => {
  const { applList, onDelete, handleOpen, handleClose } = props;

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
          {applList.map(item => (
            <ApplItem
              key={item.ApplId}
              item={item}
              onDelete={onDelete}
              handleOpen={handleOpen}
              handleClose={handleClose}
            />
          ))}
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
};

export default ApplList;

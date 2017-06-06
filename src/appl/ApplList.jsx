import React, { Component } from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import { List } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Iconbutton from 'material-ui/IconButton';
import { yellow600, green500 } from 'material-ui/styles/colors';

import Zangyo from '../images/zangyo';
import Hensoku from '../images/hensoku';
import ApplItem from './ApplItem';

export default class ApplList extends Component {
  constructor(props) {
    super(props);
    this.state = this.props;
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ ApplicationList: nextProps.ApplicationList });
  }

  render() {
    let applicationList = [];
    if (this.state.ApplicationList) {
      applicationList = this.state.ApplicationList.map((item) => {
        return (
          <ApplItem
            key={item.ApplId}
            item={item}
            onDelete={this.state.onDelete}
            handleOpen={this.state.handleOpen}
            handleClose={this.state.handleClose}
          />
        );
      });
    }

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
            {applicationList}
          </CSSTransitionGroup>
        </List>
      </div>
    );
  }
}

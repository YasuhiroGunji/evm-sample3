import React, { Component } from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import { List } from 'material-ui/List';

import ApplItem from './item';

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
      applicationList = this.state.ApplicationList.map(item =>
        <ApplItem
          key={item.ApplicationId}
          Item={item}
          onDelete={this.state.onDelete}
          handleOpen={this.state.handleOpen}
          handleClose={this.state.handleClose}
        />);
    }

    return (
      <div className={'l_list_container'}>
        <div className="l_list_header">
          <span>ヘッダー</span>
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

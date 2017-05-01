import React, { Component, PropTypes } from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import { List, ListItem } from 'material-ui/List';
import Card from '../common/card';
import CardDetail from '../common/carddetail';

import ApplicationItem from './item';

export default class ApplicationList extends Component {
  constructor(props) {
    super(props);
    this.state = this.props;
  }

  render() {
    const applicationList = this.state.ApplicationList.map(item =>
      <ApplicationItem
        key={item.ApplicationId}
        Item={item}
        handleDelete={this.state.handleDelete}
        handleClose={this.state.handleClose}
      />);
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

ApplicationList.PropTypes = {
  ApplicationList: PropTypes.arrayOf({
    Id: PropTypes.number.isRequired,
    EmpId: PropTypes.string.isRequired,
    ScheduledDate: PropTypes.object.isRequired,
    CustomerCd: PropTypes.string.isRequired,
    ProjectCd: PropTypes.string.isRequired,
    WorkContent: PropTypes.string.isRequired,
    PlanStartTIme: PropTypes.string.isRequired,
    PlanEndTime: PropTypes.string.isRequired,
    OvertimeStart: PropTypes.string.isRequired,
    OvertimeEnd: PropTypes.string.isRequired,
    OverTime: PropTypes.string.isRequired,
    LateOverTime: PropTypes.string.isRequired,
  }),
  handleDelete: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
};

import React, { Component, PropTypes } from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import { List } from 'material-ui/List';

import Card from '../common/card';

export default class ApplyList extends Component {

  render() {
    return (
      <div className="content">

        <div className="l_week_container">
          <div className="l_week_item">
            今週
          </div>
        </div>

        <List>
          <CSSTransitionGroup
            transitionName="sample"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}
          >
            { this.props.applyList.map(
              (applyItem, index) => <Card key={index} applyItem={applyItem} />
            )}
          </CSSTransitionGroup>
        </List>

        <div className="l_week_container">
          <div className="l_week_item">
            先週
          </div>
        </div>
      </div>
    );
  }
}

ApplyList.PropTypes = {
  applyList: PropTypes.arrayOf({
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
};

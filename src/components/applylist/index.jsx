import React, { Component, PropTypes } from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import { List, ListItem } from 'material-ui/List';

import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';
import {grey400, yellow600, grey500, darkBlack, lightBlack} from 'material-ui/styles/colors';

import Card from '../common/card';

export default class ApplyList extends Component {

  render() {
    return (
      <div className="content">
        <List>
          <CSSTransitionGroup
            transitionName="sample"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}
          >
            <Paper zDepth={2}>
              <ListItem
                onClick={() => this.ShowDetail()}
                leftAvatar={<Avatar icon={<FileFolder />} backgroundColor={yellow600} />}
                primaryText={'2017/02/23'}
              >
              </ListItem>
            </Paper>
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

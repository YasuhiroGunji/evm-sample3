import React, { PropTypes } from 'react';

import Paper from 'material-ui/Paper';
import { ListItem } from 'material-ui/List';
import LinearProgress from 'material-ui/LinearProgress';

import { grey400, yellow600, grey500, darkBlack, lightBlack } from 'material-ui/styles/colors';

import * as Common from '../../actions/Common';

export default class ComCardDetail extends React.Component {

  constructor(props) {
    super(props);
    this.state = this.props;
  }

  CloseDetail() {
    this.setState(this.state.showDetail);
  }

  render() {
    return (
      <div>
        <Paper zDepth={2}>
          <ListItem
            onClick={() => this.ShowDetail()}
          />
        </Paper>
        <LinearProgress mode="indeterminate" />
      </div>
    );
  }
}

ComCardDetail.propTypes = {
  applyItem: PropTypes.shape({
    ApplyId: PropTypes.number.isRequired,
    ScheduledDate: PropTypes.string.isRequired,
    CustomerCd: PropTypes.string.isRequired,
    ProjectCd: PropTypes.string.isRequired,
    WorkContent: PropTypes.string.isRequired,
    OvertimeStart: PropTypes.number,
    OvertimeEnd: PropTypes.number,
    OvertimeActualStart: PropTypes.number,
    OvertimeActualEnd: PropTypes.number,
    IrregularStart: PropTypes.number,
    IrregularEnd: PropTypes.number,
    IrregularActualStart: PropTypes.number,
    IrregularActualEnd: PropTypes.number,
    OverTime: PropTypes.string,
    LateOverTime: PropTypes.string,
  }).isRequired,
};

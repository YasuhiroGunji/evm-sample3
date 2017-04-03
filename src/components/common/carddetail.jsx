import React, { PropTypes } from 'react';

import Paper from 'material-ui/Paper';
import { ListItem } from 'material-ui/List';
// import LinearProgress from 'material-ui/LinearProgress';

import { grey400, yellow600, grey500, darkBlack, lightBlack } from 'material-ui/styles/colors';

import * as Common from '../../actions/Common';

const style = {
  expand: {
    marginTop: 30,
    marginBottom: 30,
    marginLeft: -20,
    marginRight: -20,
  },
};

export default class ComCardDetail extends React.Component {

  constructor(props) {
    super(props);
    this.state = this.props;
  }

  render() {
    const item = this.props.applyItem;
    return (
      <div>
        <Paper zDepth={2} style={style.expand}>
          <ListItem
            onClick={() => this.props.handleClose(item.ApplyId)}
          >
            <div className={'md_card_content'}>
              <div className={'md_card_title'}>
                <div>{`${item.ScheduledDate}${item.CustomerCd}/${item.ProjectCd}`}</div>
                <div>{`${item.WorkContent}`}</div>
              </div>
            </div>
            <div>
              <div>
                <span>予定：</span>
                <span>{item.OvertimeStart}～{item.OvertimeEnd}</span>
                <span>普通：</span>
                <span>{item.OverTime} 深夜：</span>
                <span>{item.LateOverTime}</span>
              </div>
              <div>
                <span>実績：</span>
                <span>{item.OvertimeActualStart}～{item.OvertimeActualEnd}</span>
              </div>
            </div>
          </ListItem>
        </Paper>
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
    OvertimeStart: PropTypes.string,
    OvertimeEnd: PropTypes.string,
    OvertimeActualStart: PropTypes.string,
    OvertimeActualEnd: PropTypes.string,
    IrregularStart: PropTypes.string,
    IrregularEnd: PropTypes.string,
    IrregularActualStart: PropTypes.string,
    IrregularActualEnd: PropTypes.string,
    OverTime: PropTypes.string,
    LateOverTime: PropTypes.string,
  }).isRequired,
  handleClose: PropTypes.func.isRequired,
};

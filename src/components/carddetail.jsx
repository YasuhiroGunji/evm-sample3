import React from 'react';
import PropTypes from 'prop-types';

import Paper from 'material-ui/Paper';
import { ListItem } from 'material-ui/List';
// import LinearProgress from 'material-ui/LinearProgress';

import { grey400, yellow600, grey500, darkBlack, lightBlack } from 'material-ui/styles/colors';

const style = {
  expand: {
    marginTop: 30,
    marginBottom: 30,
    marginLeft: -20,
    marginRight: -20,
  },
};

export default class CardDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props;
  }

  render() {
    const item = this.props.Item;

    return (
      <div>
        <Paper zDepth={2} style={style.expand}>
          <ListItem
            onClick={() => this.props.handleClose(item.ApplicationId)}
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

CardDetail.propTypes = {
  Item: PropTypes.shape({
    ApplicationId: PropTypes.number.isRequired,
    ApplicationCd: PropTypes.number.isRequired,
    ScheduledDate: PropTypes.string.isRequired,
    CustomerCd: PropTypes.string.isRequired,
    ProjectCd: PropTypes.string.isRequired,
    OvertimeStart: PropTypes.number,
    OvertimeEnd: PropTypes.number,
    OvertimeActualStart: PropTypes.number,
    OvertimeActualEnd: PropTypes.number,
    IrregularStart: PropTypes.number,
    IrregularEnd: PropTypes.number,
    IrregularActualStart: PropTypes.number,
    IrregularActualEnd: PropTypes.number,
    OverTime: PropTypes.number,
    LateOverTime: PropTypes.number,
    WorkContent: PropTypes.string.isRequired,
    ShowDetail: PropTypes.bool,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
};

import React, { PropTypes } from 'react';
import ClassSet from 'react-classset';
import Paper from 'material-ui/Paper';
import { ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';

import Delete from 'material-ui/svg-icons/action/delete';
import Edit from 'material-ui/svg-icons/editor/mode-edit';
import FileFolder from 'material-ui/svg-icons/file/folder';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import { grey400, yellow600, grey500, darkBlack, lightBlack } from 'material-ui/styles/colors';

import * as Common from '../../actions/Common';

const iconButtonElement = (
  <IconButton
    touch
    tooltip="more"
    tooltipPosition="bottom-left"
  >
    <MoreVertIcon color={grey400} />
  </IconButton>
);

const RightIconMenu = (
  <IconMenu iconButtonElement={iconButtonElement}>
    <MenuItem>Reply</MenuItem>
    <MenuItem>Forward</MenuItem>
    <MenuItem>Delete</MenuItem>
  </IconMenu>
);

export default class ComCard extends React.Component {

  constructor(props) {
    super(props);
    this.state = this.props;
  }

  showDetail() {
    this.props.handleDetail(this.props.applyItem.ApplyId);
  }

  render() {
    const item = this.props.applyItem;
    const date = Common.DateFormatterMMdd(this.props.applyItem.ScheduledDate);

    return (
      <Paper zDepth={2} key={this.state.applyItem.ApplyId}>
        <ListItem
          onClick={() => this.showDetail()}
          leftAvatar={<Avatar icon={<FileFolder />} backgroundColor={yellow600} />}
          rightIconButton={RightIconMenu}
          primaryText={
            <div className={'md_card_content'}>
              <div className={'md_card_title'}>
                <div>{`${date}${item.CustomerCd}/${item.ProjectCd}`}</div>
                <div>{`${item.WorkContent}`}</div>
              </div>
            </div>
          }
          secondaryText={
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
          }
        />
      </Paper>
    );
  }
}

ComCard.propTypes = {
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
    ShowDetail: PropTypes.bool,
  }).isRequired,
  handleDetail: PropTypes.func.isRequired,
};

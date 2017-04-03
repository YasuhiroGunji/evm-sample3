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

export default class ComCard extends React.Component {

  constructor(props) {
    super(props);
    this.state = this.props;
  }

  render() {
    const item = this.props.applyItem;
    return (
      <Paper zDepth={2} className={'md_card'}>
        <div className={'md_card_icon'}>
          <IconButton
            tooltip={'delete'}
            tooltipPosition={'bottom-left'}
            onClick={() => this.props.handleDelete(item.ApplyId)}
          >
            <Delete color={grey400} />
          </IconButton>
        </div>
        <ListItem
          onClick={() => this.props.handleDetail(item.ApplyId)}
          leftAvatar={<Avatar icon={<FileFolder />} backgroundColor={yellow600} />}
          primaryText={
            <div className={'md_card_content'}>
              <div className={'md_card_title'}>
                <div>{`${item.ScheduledDate}${item.CustomerCd}/${item.ProjectCd}`}</div>
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
    ShowDetail: PropTypes.bool,
  }).isRequired,
  handleDetail: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

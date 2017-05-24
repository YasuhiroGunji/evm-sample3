import React from 'react';
import PropTypes from 'prop-types';

// material-ui component
import Paper from 'material-ui/Paper';
import { ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';

// svg-icon
import Delete from 'material-ui/svg-icons/action/delete';
import FileFolder from 'material-ui/svg-icons/file/folder';
import Zangyo from './zangyo';

// color
import { grey400, yellow600 } from 'material-ui/styles/colors';



export default class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props;
  }

  render() {
    const item = this.props.Item;

    return (
      <div>
        <Paper zDepth={2} className={'md_card'}>

          <div className={'md_card_icon'}>
            <IconButton
              tooltip={'delete'}
              tooltipPosition={'bottom-left'}
              onClick={() => this.props.onDelete(item.ApplicationId)}
            >
              <Delete color={grey400} />
            </IconButton>
          </div>

          <ListItem
            onClick={() => this.props.handleOpen(item.ApplicationId)}
            leftAvatar={<Avatar icon={<FileFolder />} backgroundColor={yellow600} />}
            primaryText={
              <div className={'md_card_content'}>
                <div className={'md_card_title'}>
                  <div>{`${item.ScheduledDate}    ${item.CustomerCd}/${item.ProjectCd}    ${item.WorkContent}`}</div>
                </div>
              </div>
            }
            secondaryText={
              <div>
                <div>
                  <span>予定：</span>
                  <span>{item.OvertimeStart}～{item.OvertimeEnd}</span>
                  <span>普通：</span>
                  <span>{item.NomalOvertimeHrs} 深夜：</span>
                  <span>{item.LateOvertimeHrs}</span>
                </div>
                <div>
                  <span>実績：</span>
                  <span>{item.OvertimeActualStart}～{item.OvertimeActualEnd}</span>
                </div>
              </div>
            }
          />
        </Paper>
      </div>
    );
  }
}

Card.propTypes = {
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
  handleOpen: PropTypes.func.isRequired,
};

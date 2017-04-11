import * as React from 'react';
import ClassSet from 'react-classset';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import { List } from 'material-ui/List';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

import Card from '../../../components/common/card';
import CardDetail from '../../../components/common/carddetail';
import Snackbar from '../../../components/common/snackbar';
import * as applyActions from '../../../actions/Apply';
import * as commonActions from '../../../actions/Common';

import './applystyle.styl';


class Apply extends React.Component {

  constructor(props) {
    super(props);
    this.state = this.props;

    this.onDelete = this.onDelete.bind(this);
    this.ShowDetail = this.ShowDetail.bind(this);
    this.CloseDetail = this.CloseDetail.bind(this);
  }

  componentDidMount() {
    if (this.props.applyList == null || this.props.applyList.length === 0) {
      this.props.applyActionBind.Init('42015');
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ applyList: nextProps.applyList });
    this.setState({ showMenu: nextProps.showMenu });
    this.setState({ showForm: nextProps.showForm });
  }

  onSubmit(e) {
    e.preventDefault();

    const applyForm = {};
    const yyyyMM = commonActions.StringFormatterSlashyyyyMM(this.state.applyForm.MonthValue + '');
    const dd = commonActions.ZeroFill(this.state.applyForm.DayValue);

    applyForm.ApplyId = this.state.applyList.length;
    applyForm.EmpId = '42015';
    applyForm.ScheduledDate = commonActions.DateFormatter(`${yyyyMM}/${dd}`);
    applyForm.CustomerCd = this.state.applyForm.CustomerCd;
    applyForm.ProjectCd = this.state.applyForm.ProjectCd;
    applyForm.OvertimeStart = this.state.applyForm.OvertimeStart;
    applyForm.OvertimeEnd = this.state.applyForm.OvertimeEnd;
    applyForm.OvertimeActualStart = this.state.applyForm.OvertimeActualStart;
    applyForm.OvertimeActualEnd = this.state.applyForm.OvertimeActualEnd;
    applyForm.IrregularStart = this.state.applyForm.IrregularStart;
    applyForm.IrregularEnd = this.state.applyForm.IrregularEnd;
    applyForm.IrregularActualStart = this.state.applyForm.IrregularActualStart;
    applyForm.IrregularActualEnd = this.state.applyForm.IrregularActualEnd;
    applyForm.WorkContent = this.state.applyForm.WorkContent;
    applyForm.ShowDetail = false;

    const newList = this.state.applyList.slice();
    newList.unshift(applyForm);
    this.setState({ applyList: newList });

    this.props.applyActionBind.Submit(applyForm);
  }

  onDelete(applyId) {
    const newList = this.state.applyList.slice();
    const i = this.state.applyList.findIndex(item => item.ApplyId === applyId);

    // TODO：モーダルダイアログ処理実装予定
    newList.splice(i, 1);
    this.setState({ applyList: newList });
  }

  ShowForm() {
    this.props.applyActionBind.ShowForm(!this.props.showForm);
  }

  ShowDetail(applyId) {
    const newList = this.state.applyList.slice();
    newList.map(item => item.ShowDetail = false);

    const i = this.state.applyList.findIndex(item => item.ApplyId === applyId);
    newList[i].ShowDetail = true;
    this.setState({ applyList: newList });
  }

  CloseDetail(applyId) {
    const newList = this.state.applyList.slice();
    const i = this.state.applyList.findIndex(item => item.ApplyId === applyId);
    newList[i].ShowDetail = false;
    this.setState({ applyList: newList });
  }

  handleDdlChange(propertyName, event, index, value) {
    const applyForm = this.state.applyForm;
    applyForm[propertyName] = value;
    this.setState({ applyForm });
  }

  handleTextChange(propertyName, event) {
    const applyForm = this.state.applyForm;
    applyForm[propertyName] = event.target.value;
    this.setState({ applyForm });
  }

  renderApplyList() {
    if (!this.state.applyList) {
      return;
    }
    return this.state.applyList.map((applyItem) => {
      if (applyItem.ShowDetail) {
        return (
          <CardDetail
            key={applyItem.ApplyId}
            className={'example'}
            applyItem={applyItem}
            handleDelete={this.onDelete}
            handleClose={this.CloseDetail}
          />
        );
      }
      return (
        <Card
          key={applyItem.ApplyId}
          className={'example'}
          applyItem={applyItem}
          handleDelete={this.onDelete}
          handleDetail={this.ShowDetail}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <div
          className={ClassSet({
            l_apply_container: true,
            is_open_menu: this.props.showMenu,
            is_open_form: this.props.showForm,
          })}
        >
          <div className="l_apply_header">
            <span>aaaa</span>
          </div>
          <div className={'l_list_container'}>
            <List>
              <div className={'l_week_item'}>
                <div>今月</div>
              </div>

              <CSSTransitionGroup
                transitionName={'example'}
                transitionEnterTimeout={500}
                transitionLeaveTimeout={500}
              >
                {this.renderApplyList()}
              </CSSTransitionGroup>
            </List>
          </div>

          <div className={'l_floating_button'}>
            <FloatingActionButton
              zDepth={3}
              secondary
              style={{ marginRight: 8 }} onClick={() => this.ShowForm()}
            >
              <ContentAdd />
            </FloatingActionButton>
          </div>

          <Paper
            className={ClassSet({
              l_form_container: true,
              is_open_form: this.state.showForm,
            })}
            zDepth={2}
          >
            <div className="l_form_header">
              <span>残業申請</span>
            </div>
            <div className="l_form_content">
              <div className="l_form_row">
                <DropDownMenu value={this.state.applyForm.MonthValue} onChange={this.handleDdlChange.bind(this, 'MonthValue')} >
                  <MenuItem value={201702} primaryText="2017/02" />
                  <MenuItem value={201703} primaryText="2017/03" />
                  <MenuItem value={201704} primaryText="2017/04" />
                </DropDownMenu>
                <DropDownMenu value={this.state.applyForm.DayValue} onChange={this.handleDdlChange.bind(this, 'DayValue')} >
                  <MenuItem value={6} primaryText="06(月)" />
                  <MenuItem value={7} primaryText="07(火)" />
                  <MenuItem value={8} primaryText="08(水)" />
                  <MenuItem value={9} primaryText="09(木)" />
                  <MenuItem value={10} primaryText="10(金)" />
                  <MenuItem value={11} primaryText="11(土)" />
                  <MenuItem value={12} primaryText="12(日)" />
                </DropDownMenu>
              </div>
              <div className="l_form_row">
                <TextField
                  hintText=""
                  floatingLabelText="顧客コード"
                  value={this.state.applyForm.CustomerCd}
                  onChange={this.handleTextChange}
                  style={{ width: 150 }}
                />
                <TextField
                  hintText=""
                  floatingLabelText="プロジェクトコード"
                  value={this.state.applyForm.ProjectCd}
                  onChange={this.handleTextChange.bind(this, 'ProjectCd')}
                  style={{ width: 150 }}
                />
              </div>
              <div className="l_form_row">
                <TextField
                  hintText="00:00"
                  floatingLabelText="作業開始時間"
                  value={this.state.applyForm.OvertimeStart}
                  onChange={this.handleTextChange.bind(this, 'OvertimeStart')}
                />
              </div>
              <div className="l_form_row">
                <TextField
                  hintText=""
                  floatingLabelText="作業終了時間"
                  value={this.state.applyForm.OvertimeEnd}
                  onChange={this.handleTextChange.bind(this, 'OvertimeEnd')}
                />
              </div>
              <div className="l_form_row">
                <TextField
                  hintText=""
                  floatingLabelText="作業内容"
                  multiLine
                  rows={1}
                  rowsMax={5}
                  value={this.state.applyForm.WorkContent}
                  onChange={this.handleTextChange.bind(this, 'WorkContent')}
                />
              </div>

            </div>

            <Paper zDepth={1} className={'l_form_footer'}>
              <RaisedButton
                label={'申請'}
                primary={false}
                secondary={true}
                disabled={false}
                style={{ marginRight: 8 }}
                onTouchTap={e => this.onSubmit(e)}
              />
            </Paper>
          </Paper>

          <Snackbar snackbarOpen={this.props.snackbarOpen} action={this.props.applyActionBind} />
        </div>
      </div>
    );
  }
}

Apply.propTypes = {
  applyList: React.PropTypes.array,
  applyForm: React.PropTypes.object,
  empId: React.PropTypes.number,
  showForm: React.PropTypes.bool.isRequired,
  showMenu: React.PropTypes.bool.isRequired,
  snackbarOpen: React.PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  const { applyForm, applyList, empId, showForm, snackbarOpen } = state.Apply;
  const { showMenu } = state.Base;
  return {
    applyForm, applyList, empId, showForm, snackbarOpen, showMenu,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    applyActionBind: bindActionCreators(applyActions, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Apply);

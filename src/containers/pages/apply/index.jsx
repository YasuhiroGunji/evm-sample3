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
import DatePicker from 'material-ui/DatePicker';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

import Card from '../../../components/common/card';
import CardDetail from '../../../components/common/carddetail';
import Snackbar from '../../../components/common/snackbar';
import * as applyActions from '../../../actions/Apply';

import {grey400, yellow600, grey500, teal500, darkBlack, lightBlack} from 'material-ui/styles/colors';

import './applystyle.styl';


class Apply extends React.Component {

  constructor(props) {
    super(props);
    this.state = this.props;

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

  onSubmit() {
    const applyForm = {};
    applyForm.ApplyId = this.state.applyList.length + 1;
    applyForm.ScheduledDate = this.state.applyForm.ScheduledDate;
    applyForm.CustomerCd = this.state.applyForm.CustomerCd;
    applyForm.ProjectCd = this.state.applyForm.ProjectCd;
    applyForm.OvertimeStart = this.state.applyForm.OvertimeStart;
    applyForm.OvertimeStart = this.state.applyForm.OvertimeEnd;
    applyForm.WorkContent = this.state.applyForm.WorkContent;

    this.props.applyActionBind.Submit(applyForm);
  }

  ShowForm() {
    this.props.applyActionBind.ShowForm(!this.props.showForm);
  }

  ShowDetail = (applyId) => {
    let newList = this.state.applyList.slice();
    const i = this.state.applyList.findIndex(item => item.ApplyId === applyId);
    newList[i].ShowDetail = true;
    this.setState({ applyList: newList });
  }

  handleDateChange(e, date) {
    const applyForm = this.state.applyForm;
    applyForm.ScheduledDate = date;
    this.setState({ applyForm });
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
    return this.state.applyList.map(
      (applyItem) => {
        if (applyItem.ShowDetail) {
          return <CardDetail key={applyItem.ApplyId} applyItem={applyItem} />;
        }
        return <Card key={applyItem.ApplyId} applyItem={applyItem} handleDetail={this.ShowDetail} />;
      },
    );
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

          <div className={'l_list_container'}>
            <List>
              <div className={'l_week_item'}>
                <div>今月</div>
              </div>

              <CSSTransitionGroup
                transitionName="example"
                transitionEnterTimeout={500}
                transitionLeaveTimeout={300}
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

          <div
            className={ClassSet({
              l_form_container: true,
              is_open_form: this.state.showForm,
            })}
          >
            <Paper zDepth={2} className={'l_form_header'}>
              <div className="l_form_row">
                <span>残業申請</span>
              </div>
            </Paper>

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
                />
              </div>
              <div className="l_form_row">
                <TextField
                  hintText=""
                  floatingLabelText="プロジェクトコード"
                  value={this.state.applyForm.ProjectCd}
                  onChange={this.handleTextChange.bind(this, 'ProjectCd')}
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

            <Paper zDepth={2} className={'l_form_footer'}>
              <RaisedButton
                label={'Cancel'}
                style={{ marginRight: 8 }}
                onTouchTap={() => this.onCancel()}
              />
              <RaisedButton
                label={'Submit'}
                primary
                style={{ marginRight: 8 }}
                onTouchTap={() => this.onSubmit()}
              />
            </Paper>
          </div>

          <Snackbar snackbarOpen={this.props.snackbarOpen} action={this.props.applyActionBind} />
        </div>
      </div>
    );
  }
}

Apply.propTypes = {
  applyList: React.PropTypes.array,
  applyForm: React.PropTypes.object,
  applyActionBind: React.PropTypes.object.isRequired,
  showForm: React.PropTypes.bool.isRequired,
  showMenu: React.PropTypes.bool.isRequired,
  snackbarOpen: React.PropTypes.bool.isRequired,
};

/*class PaperContent extends React.Component {
  render() {
    return (
      <div className={'md_card_content'}>
        <div className={'md_card_title'}>
          <span>2017/02/24</span>
          <span>IKD/KFS6</span>
          <span>画面開発ddddddddddddddddddd</span>
        </div>
        <div className={'md_card_detail'}>
          <span>18:00-23:00</span>
          <span>普通：3.5</span>
          <span>深夜：1.0</span>
        </div>
      </div>
    );
  }
}*/

function mapStateToProps(state) {
  const { empId, showForm, applyList, applyForm, applyActionBind, snackbarOpen } = state.Apply;
  const { showMenu } = state.Base;
  return {
    empId, showForm, applyList, applyForm, applyActionBind, snackbarOpen, showMenu,
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

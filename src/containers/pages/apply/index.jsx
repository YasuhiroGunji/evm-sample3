import * as React from 'react';
import ClassSet from 'react-classset';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import ApplyList from '../../../components/applylist/index';
import ApplyForm from '../../../components/applyform/index';
import Card from '../../../components/common/card';
import Snackbar from '../../../components/common/snackbar';
import * as applyActions from '../../../actions/Apply';
import * as commonActions from '../../../actions/Common';

import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import { List, ListItem } from 'material-ui/List';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';

import {grey400, yellow600, grey500, teal500, darkBlack, lightBlack} from 'material-ui/styles/colors';

import './applystyle.styl';


class Apply extends React.Component {

  constructor(props) {
    super();
    this.state = props;
  }

  componentDidMount() {
    if (this.props.applyList == null || this.props.applyList.length === 0) {
      this.props.applyActionBind.Init('42015');
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ showMenu: nextProps.showMenu });
    this.setState({ showForm: nextProps.showForm });
  }

  onSubmit() {
    const applyForm = {};
    applyForm.id = this.CreateKey(applyForm);
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
  ShowDetail(key) {
    const applyItem = this.state.applyList;
    this.props.applyActionBind.ShowDetail(!this.props.showForm);
  }
  CreateKey(item) {

    if (item == 'undefined') return 0;
    const id = this.state.empId;
    const date = new Date();
    const year = date.getFullYear();
    let month = date.getMonth() + 1;
    if (month < 10) {
      month = `0${month}`;
    }
    let day = date.getDate();
    if (date < 10) {
      day = `0${day}`;
    }
    const hour = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const key = `${id}${year}${month}${day}${hour}${minutes}${seconds}`;

    return key;
  };

  handleDateChange(e, date) {
    const applyForm = this.state.applyForm;
    applyForm.ScheduledDate = date;
    this.setState({ applyForm });
  }
  handleTextChange(propertyName, event) {
    const applyForm = this.state.applyForm;
    applyForm[propertyName] = event.target.value;
    this.setState({ applyForm });
  }

  render() {
    var count = 100
    var applyItems = this.props.applyList.map((applyItem, index) =>
                        <Card key={applyItem.id} applyItem={applyItem} />);
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
              <Paper zDepth={2} className={'l_apply_item'}>
                <ListItem
                  onClick={() => this.ShowDetail(this)}
                  leftAvatar={<Avatar icon={<FileFolder />}
                  backgroundColor={yellow600} />}
                >
                  <PaperContent />
                </ListItem>
              </Paper>
              <CSSTransitionGroup
                transitionName="example"
                transitionEnterTimeout={500}
                transitionLeaveTimeout={300}
              >
                {applyItems}
              </CSSTransitionGroup>
            </List>
          </div>
          <div className='l_floating_button'>
            <FloatingActionButton
              zDepth={3}
              secondary
              style={{ marginRight: 8 }} onClick={() => this.ShowForm()}
            >
              <ContentAdd />
            </FloatingActionButton>
          </div>
          {/*<ApplyForm applyForm={this.props.applyForm} action={this.props.applyActionBind} />*/}
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
                <DatePicker
                  hintText="申請日"
                  floatingLabelText="申請日"
                  autoOk
                  defaultDate={this.state.applyForm.ScheduledDate}
                  value={this.state.applyForm.ScheduledDate}
                  onChange={this.handleDateChange}
                />
              </div>
              <div className="l_form_row">
                <TextField
                  hintText=""
                  floatingLabelText="顧客コード"
                  value={this.state.applyForm.CustomerCd}
                  onChange={this.handleTextChange.bind(this, 'CustomerCd')}
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
  snackbarOpen: React.PropTypes.bool.isRequired,
};

class PaperContent extends React.Component {
  render() {
    const applyType = 1;
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
}

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

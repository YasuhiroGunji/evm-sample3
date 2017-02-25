import * as React from 'react';
import ClassSet from 'react-classset';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import ApplyList from '../../../components/applylist/index';
import ApplyForm from '../../../components/applyform/index';
import Snackbar from '../../../components/common/snackbar';
import * as applyActions from '../../../actions/Apply';

import CSSTransitionGroup from 'react-addons-css-transition-group';
import { List, ListItem } from 'material-ui/List';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';

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

  onSubmit() {
    const applyForm = {};
    applyForm.id = 1;
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
    return (
      <div className={'l_apply_container'}>
        <Paper zDepth={2} className={'l_apply_header'}>
          <div><span>申請一覧</span></div>
        </Paper>
        <div className={'l_list_container'}>
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
        </div>
        {/*<div className='l_floating_button'>
          <FloatingActionButton
            zDepth={3}
            secondary
            style={{ marginRight: 8 }} onClick={() => this.ShowForm()}
          >
            <ContentAdd />
          </FloatingActionButton>
        </div>*/}
        {/*<ApplyForm applyForm={this.props.applyForm} action={this.props.applyActionBind} />*/}
        <div className={'l_form_container'}>
        
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

function mapStateToProps(state) {
  const { showForm, applyList, applyForm, applyActionBind, snackbarOpen } = state.Apply;
  return {
    showForm, applyList, applyForm, applyActionBind, snackbarOpen,
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

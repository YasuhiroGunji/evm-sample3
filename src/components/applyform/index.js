import React, { Component, PropTypes } from 'react';

import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';

// import * as applyActions from '../../actions/Apply';

const style = {
  marginStyle:{
    marginRight: 8,
  }
};

export default class ApplyForm extends Component {

  static propTypes = {
    applyForm : PropTypes.shape({
      ScheduledDate: PropTypes.object.isRequired,
      CustomerCd: PropTypes.string.isRequired,
      ProjectCd: PropTypes.string.isRequired,
      OvertimeStart: PropTypes.string.isRequired,
      OvertimeEnd: PropTypes.string.isRequired,
      WorkContent: PropTypes.string.isRequired,
    })
  }
  
  constructor(props) {
    super(props);
    this.state = this.props;
  }

  handleDateChange = (e, date) => {
    const applyForm = this.state.applyForm;
    applyForm['ScheduledDate'] = date;
    this.setState({ ApplyForm: applyForm });
  }
  handleTextChange = (propertyName, event) => {
    const applyForm = this.state.applyForm;
    applyForm[propertyName] = event.target.value;
    this.setState({ applyForm: applyForm });
  }
  onSubmit = () => {
    const applyActionBind = this.props.action;

    const applyForm = new Object();
    applyForm["id"] = 1;
    applyForm["ScheduledDate"] = this.state.applyForm.ScheduledDate;
    applyForm["CustomerCd"] = this.state.applyForm.CustomerCd;
    applyForm["ProjectCd"] = this.state.applyForm.ProjectCd;
    applyForm["OvertimeStart"] = this.state.applyForm.OvertimeStart;
    applyForm["OvertimeStart"] = this.state.applyForm.OvertimeEnd;
    applyForm["WorkContent"] = this.state.applyForm.WorkContent;

    applyActionBind.submit(applyForm);
  }; 

  render() {
    return(
      <Paper zDepth={2}>

        <div className="l_applyform_header">
          <div className="l_form_row">
            
          </div>
        </div>

        <div className="l_form_container">
          <div className="l_form_row">
            <DatePicker
              hintText="申請日"
              floatingLabelText="申請日"
              autoOk={true} 
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
              onChange={this.handleTextChange.bind(this, "CustomerCd")}
            />
          </div>
          <div className="l_form_row">
            <TextField
              hintText=""
              floatingLabelText="プロジェクトコード"
              value={this.state.applyForm.ProjectCd}
              onChange={this.handleTextChange.bind(this, "ProjectCd")}
            />
          </div>
          <div className="l_form_row">
            <TextField
              hintText="00:00"
              floatingLabelText="作業開始時間"
              value={this.state.applyForm.OvertimeStart}
              onChange={this.handleTextChange.bind(this, "OvertimeStart")}
            />
          </div>
          <div className="l_form_row">
            <TextField
              hintText=""
              floatingLabelText="作業終了時間"
              value={this.state.applyForm.OvertimeEnd}
              onChange={this.handleTextChange.bind(this, "OvertimeEnd")}
            />
          </div>
          <div className="l_form_row">
            <TextField
              hintText=""
              floatingLabelText="作業内容"
              multiLine={true}
              rows={1}
              rowsMax={5}
              value={this.state.applyForm.WorkContent}
              onChange={this.handleTextChange.bind(this, "WorkContent")}
            />
          </div>
          <div className="l_form_row md_form_button">
            <RaisedButton 
              label="Cancel" 
              style={style.marginStyle}
            />
            <RaisedButton 
              label="Submit" 
              primary={true} 
              style={style.marginStyle}
              onTouchTap={() => this.onSubmit()}
            />
          </div>
        </div>

      </Paper>
    )
  };
}
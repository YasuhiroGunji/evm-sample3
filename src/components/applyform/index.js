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
      date: PropTypes.object.isRequired,
      kokyakuCd: PropTypes.string.isRequired,
      projectCd: PropTypes.string.isRequired,
      startTime: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  }
  
  constructor(props) {
    super(props);
    this.state = this.props;
  }

  handleDateChange = (e, date) => {
    const applyForm = this.state.applyForm;
    applyForm['date'] = date;
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
    applyForm["date"] = this.state.applyForm.date;
    applyForm["kokyakuCd"] = this.state.applyForm.kokyakuCd;
    applyForm["projectCd"] = this.state.applyForm.projectCd;
    applyForm["startTime"] = this.state.applyForm.startTime;
    applyForm["text"] = this.state.applyForm.text;

    applyActionBind.submit(applyForm);
  }; 
  // render {
  //   return (
  //     <div>
  //       <input type="text" onChange={this.handleChange.bind(this, 'firstName')} value={this.state.contact.firstName}/>
  //       <input type="text" onChange={this.handleChange.bind(this, 'lastName')} value={this.state.contact.lastName}/>
  //       <input type="text" onChange={this.handleChange.bind(this, 'phone')} value={this.state.contact.lastName}/>
  //     </div>
  //   );
  // }

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
              defaultDate={this.state.applyForm.date}
              value={this.state.applyForm.date}
              ref="date"
              onChange={this.handleDateChange}
            />
          </div>
          <div className="l_form_row">
            <TextField
              hintText=""
              floatingLabelText="顧客コード"
              value={this.state.applyForm.kokyakuCd}
              ref="kokyakuCd"
              onChange={this.handleTextChange.bind(this, 'kokyakuCd')}
            />
          </div>
          <div className="l_form_row">
            <TextField
              hintText=""
              floatingLabelText="プロジェクトコード"
              value={this.state.applyForm.projectCd}
              ref="projectCd"
              onChange={this.handleTextChange.bind(this, 'projectCd')}
            />
          </div>
          <div className="l_form_row">
            <TextField
              hintText=""
              floatingLabelText="作業開始時間"
              value={this.state.applyForm.startTime}
              ref="startTime"
              onChange={this.handleTextChange.bind(this, 'startTime')}
            />
          </div>
          <div className="l_form_row">
            <TextField
              hintText=""
              floatingLabelText="作業内容"
              multiLine={true}
              rows={1}
              rowsMax={5}
              value={this.state.applyForm.text}
              ref="text"
              onChange={this.handleTextChange.bind(this, 'text')}
            />
          </div>
          <div className="l_form_row md_form_button">
            <RaisedButton label="Cancel" style={style.marginStyle} />
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
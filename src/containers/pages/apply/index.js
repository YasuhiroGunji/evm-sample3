import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ApplyList from '../../../components/applylist'

import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';

import * as applyActions from '../../../actions/Apply';

import './applystyle.styl';

const style = {
  marginStyle:{
    marginRight: 8,
  }
};

class Apply extends Component {

  constructor(props) {
    super(props);

    this.state = { applyForm: this.props.apply.applyForm };
  }

  onSubmit() {
    const { applyActionBind } = this.props.apply;

    const applyForm = new Object();
    applyForm["date"] = this.state.applyForm.date;
    applyForm["kokyakuCd"] = this.state.applyForm.kokyakuCd;
    applyForm["projectCd"] = this.state.applyForm.projectCd;
    applyForm["startTime"] = this.state.applyForm.startTime;
    applyForm["text"] = this.state.applyForm.text;

    applyActionBind.submit(applyForm);
  }; 

  handleDateChange = (x, event) => {
    console.log(event);
    this.setState({
      applyForm: Object.assign({}, this.state.applyForm, {
        date: event.target.value
      })
    });
  };

  handleKokyakuCdChange = () => {
    this.setState({
      applyForm: Object.assign({}, this.state.applyForm, {
        kokyakuCd: event.target.value
      })
    });
  };

  render() {
    return (
      <div className="l_flex_container">

        <div className="l_flex_box">

          <ApplyList applyList={ this.props.apply.applyList } />

        </div>

        <div className="l_flex_box">

          <div className="content">

            <Paper zDepth={3}>

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
                    ref="date"
                    onChange={(x, event) => this.handleDateChange(x, event)}
                  />
                </div>
                <div className="l_form_row">
                  <TextField
                    hintText=""
                    floatingLabelText="顧客コード"
                    value={this.state.applyForm.kokyakuCd}
                    ref="kokyakuCd"
                    onChange={(x, event) => this.handleKokyakuCdChange(x, event)}
                  />
                </div>
                <div className="l_form_row">
                  <TextField
                    hintText=""
                    floatingLabelText="プロジェクトコード"
                    value={this.state.applyForm.projectCd}
                    ref="projectCd"
                  />
                </div>
                <div className="l_form_row">
                  <TextField
                    hintText=""
                    floatingLabelText="作業開始時間"
                    value={this.state.applyForm.startTime}
                    ref="startTime"
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
          </div>
        </div>
      </div>
    )
  };
}

Apply.propTypes = {
  apply: PropTypes.shape({
    applyList: PropTypes.arrayOf(
      React.PropTypes.object
      // applyItem: PropTypes.shape({
      //   date: PropTypes.object.isRequired,
      //   workItem: PropTypes.string.isRequired,
      //   kokyakuCd: PropTypes.string.isRequired,
      //   projectCd: PropTypes.string.isRequired,
      //   planStartTIme: PropTypes.string.isRequired,
      //   planEndTime: PropTypes.string.isRequired,
      //   actualStartTime: PropTypes.string.isRequired,
      //   actualEndTIme: PropTypes.string.isRequired,
      //   overTime: PropTypes.string.isRequired,
      //   lateOverTime: PropTypes.string.isRequired,
      // )
    ),
    applyForm : PropTypes.shape({
        date: PropTypes.object.isRequired,
        kokyakuCd: PropTypes.string.isRequired,
        projectCd: PropTypes.string.isRequired,
        startTime: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
    }),
    submit: PropTypes.func,
  })
}

function mapStateToProps( state ){
  const {
    apply
  } = state.Apply;
  return  {
    apply
  };
}

function mapDispatchToProps( dispatch ) {
  return {
    applyActionBind: bindActionCreators(applyActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Apply);

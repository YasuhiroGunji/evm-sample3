import React, { PropTypes } from 'react';
import ClassSet from 'react-classset';

// material-ui component
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
// component
import DropDown from '../common/dropdown';
import TextBox from '../common/textbox';
import TextArea from '../common/textarea';
// enum
import { APPL_CD } from '../../const/Enum';
// actions
import * as Util from '../../actions/Util';

import './form.styl';

export default class OvertimeForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = this.props;

    this.handleDdlChange = this.handleDdlChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleDdlChange(propertyName, event, index, value) {
    const newForm = this.state.applicationForm;
    newForm[propertyName] = value;
    newForm.NomalOvertimeHrs =
      Util.CalcOvertimeHrs(
        newForm.OvertimeStart, newForm.OvertimeEnd);
    this.setState({ applicationForm: newForm });
  }

  handleTextChange(propertyName, event) {
    const newForm = this.state.applicationForm;
    newForm[propertyName] = event.target.value;
    this.setState({ applicationForm: newForm });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleSubmit(APPL_CD.OVERTIME, this.state.applicationForm);
  }

  render() {
    const monthData = [
      { text: '2017/02', value: 201702 },
      { text: '2017/03', value: 201703 },
      { text: '2017/04', value: 201704 },
    ];
    const dayData = [
      { text: '6(月)', value: 6 },
      { text: '7(火)', value: 7 },
      { text: '8(水)', value: 8 },
      { text: '9(木)', value: 9 },
      { text: '10(金)', value: 10 },
      { text: '11(土)', value: 11 },
      { text: '12(日)', value: 12 },
    ];
    const timeData = [
      { text: '18:00', value: 1800 },
      { text: '18:30', value: 1830 },
      { text: '19:00', value: 1900 },
      { text: '19:30', value: 1930 },
      { text: '20:00', value: 2000 },
      { text: '20:30', value: 2030 },
      { text: '21:00', value: 2100 },
      { text: '21:30', value: 2130 },
      { text: '22:00', value: 2200 },
      { text: '22:30', value: 2230 },
      { text: '23:00', value: 2300 },
      { text: '23:30', value: 2330 },
      { text: '24:00', value: 2400 },
      { text: '24:30', value: 2430 },
      { text: '25:00', value: 2500 },
      { text: '25:30', value: 2530 },
      { text: '26:00', value: 2600 },
      { text: '26:30', value: 2630 },
      { text: '27:00', value: 2700 },
      { text: '27:30', value: 2730 },
      { text: '28:00', value: 2800 },
      { text: '28:30', value: 2830 },
      { text: '29:00', value: 2900 },
      { text: '29:30', value: 2930 },
    ];

    return (
      <Paper
        className={ClassSet({
          l_form_container: true,
          is_open_form: this.props.showForm,
        })}
        zDepth={2}
      >
        <div className="l_form_header">
          <span>残業申請</span>
        </div>
        <div className="l_form_content">
          <div className="l_form_row">
            <DropDown
              label="申請月"
              propertyName="MonthValue"
              selectValue={this.state.applicationForm.MonthValue}
              data={monthData}
              handleDdlChange={this.handleDdlChange}
            />
            <DropDown
              label="申請日"
              propertyName="DayValue"
              selectValue={this.state.applicationForm.DayValue}
              data={dayData}
              handleDdlChange={this.handleDdlChange}
            />
          </div>
          <div className="l_form_row">
            <TextBox
              label="顧客コード"
              propertyName="CustomerCd"
              value={this.state.applicationForm.CustomerCd}
              handleTextChange={this.handleTextChange}
            />
            <TextBox
              label="プロジェクトコード"
              value={this.state.applicationForm.ProjectCd}
              propertyName="ProjectCd"
              handleTextChange={this.handleTextChange}
            />
          </div>
          <div className="l_form_row">
            <TextArea
              label="作業内容"
              propertyName="WorkContent"
              value={this.state.applicationForm.WorkContent}
              handleTextChange={this.handleTextChange}
            />
          </div>
          <div className="l_form_row">
            <DropDown
              label="残業予定時間"
              propertyName="OvertimeStart"
              selectValue={this.state.applicationForm.OvertimeStart}
              data={timeData}
              handleDdlChange={this.handleDdlChange}
            />
            <DropDown
              label=" "
              propertyName="OvertimeEnd"
              selectValue={this.state.applicationForm.OvertimeEnd}
              data={timeData}
              handleDdlChange={this.handleDdlChange}
            />
          </div>
          <div className="l_form_row">
            <DropDown
              label="残業実績時間"
              propertyName="OvertimeActualStart"
              selectValue={this.state.applicationForm.OvertimeActualStart}
              data={timeData}
              handleDdlChange={this.handleDdlChange}
              disabled={true}
            />
            <DropDown
              label="残業実績時間"
              propertyName="OvertimeActualEnd"
              selectValue={this.state.applicationForm.OvertimeActualEnd}
              data={timeData}
              handleDdlChange={this.handleDdlChange}
              disabled={true}
            />
          </div>
          <div className="l_form_row">
            <span>残業実績：</span>
            <span>{this.props.applicationForm.NomalOvertimeHrs}</span>
            <span>残業実績(深夜)：</span>
            <span>{this.props.applicationForm.LateOvertimeHrs}</span>
          </div>

        </div>

        <Paper zDepth={1} className={'l_form_footer'}>
          <RaisedButton
            label={'申請'}
            primary={false}
            secondary={true}
            disabled={false}
            onTouchTap={e => this.handleSubmit(e, APPL_CD.OVERTIME)}
          />
        </Paper>

      </Paper>
    );
  }
}

OvertimeForm.propTypes = {
  showForm: PropTypes.bool.isRequired,
  applicationForm: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

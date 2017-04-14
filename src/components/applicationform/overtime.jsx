import React, { PropTypes } from 'react';
import ClassSet from 'react-classset';

import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

import DropDown from '../common/dropdown';
import TextBox from '../common/textbox';
import TextArea from '../common/textarea';
import { APPL_CD } from '../../const/Enum';

import './form.styl';

export default class OvertimeForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = this.props;
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
              selectValue={this.props.applicationForm.MonthValue}
              data={monthData}
              handleDdlChange={this.props.handleDdlChange}
            />
            <DropDown
              label="申請日"
              propertyName="DayValue"
              selectValue={this.props.applicationForm.DayValue}
              data={dayData}
              handleDdlChange={this.props.handleDdlChange}
            />
          </div>
          <div className="l_form_row">
            <TextBox
              label="顧客コード"
              propertyName="CustomerCd"
              value={this.props.applicationForm.CustomerCd}
              handleTextChange={this.props.handleTextChange}
            />
            <TextBox
              label="プロジェクトコード"
              value={this.props.applicationForm.ProjectCd}
              propertyName="ProjectCd"
              handleTextChange={this.props.handleTextChange}
            />
          </div>
          <div className="l_form_row">
            <TextArea
              label="作業内容"
              propertyName="WorkContent"
              value={this.props.applicationForm.WorkContent}
              handleTextChange={this.props.handleTextChange}
            />
          </div>
          <div className="l_form_row">
            <DropDown
              label="残業予定時間"
              propertyName="OvertimeStart"
              selectValue={this.props.applicationForm.OvertimeStart}
              data={timeData}
              handleDdlChange={this.props.handleDdlChange}
            />
            <DropDown
              label=" "
              propertyName="OvertimeEnd"
              selectValue={this.props.applicationForm.OvertimeEnd}
              data={timeData}
              handleDdlChange={this.props.handleDdlChange}
            />
          </div>
          <div className="l_form_row">
            <DropDown
              label="残業実績時間"
              propertyName="OvertimeActualStart"
              selectValue={this.props.applicationForm.OvertimeActualStart}
              data={timeData}
              handleDdlChange={this.props.handleDdlChange}
              disabled={true}
            />
            <DropDown
              label="残業実績時間"
              propertyName="OvertimeActualEnd"
              selectValue={this.props.applicationForm.OvertimeActualEnd}
              data={timeData}
              handleDdlChange={this.props.handleDdlChange}
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
            onTouchTap={e => this.props.handleSubmit(e, APPL_CD.OVERTIME)}
          />
        </Paper>

      </Paper>
    );
  }
}

OvertimeForm.propTypes = {
  showForm: PropTypes.bool.isRequired,
  applicationForm: PropTypes.object.isRequired,
  handleDdlChange: PropTypes.func.isRequired,
  handleTextChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

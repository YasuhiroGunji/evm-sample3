import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

// material-ui component
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';

// component
import DropDown from '../../components/dropdown';
import TextBox from '../../components/textbox';
import TextArea from '../../components/textarea';
import { renderTextField, renderSelectField, renderTextAreaField } from './FormFields';
// actions
import * as Util from '../../utils/Common';
import * as validate from '../../utils/Validate';
import * as nomalize from '../../utils/Nomalize';

import './form.styl';

const FormOvertime = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props;

  const monthData = [
    { text: '2017/02', value: 201702 },
    { text: '2017/03', value: 201703 },
    { text: '2017/04', value: 201704 },
  ];
  const monthItems = monthData.map(item => (
    <MenuItem key={item.value} value={item.value} primaryText={item.text} />
  ));
  const dayData = [
    { text: '6(月)', value: 6 },
    { text: '7(火)', value: 7 },
    { text: '8(水)', value: 8 },
    { text: '9(木)', value: 9 },
    { text: '10(金)', value: 10 },
    { text: '11(土)', value: 11 },
    { text: '12(日)', value: 12 },
  ];
  const dayItems = dayData.map(item => (
    <MenuItem key={item.value} value={item.value} primaryText={item.text} />
  ));

  return (
    <Paper zDepth={2}>
      <form onSubmit={e => handleSubmit(e)}>
        <div className="l_form_header">
          <span>残業申請</span>
        </div>
        <div className="l_form_content">
          <div className="l_form_row">
            <Field
              name="MonthValue"
              component={renderSelectField}
              label="申請月"
              validate={[validate.required]}
            >
              {monthItems}
            </Field>
            <Field
              name="DayValue"
              component={renderSelectField}
              label="申請日"
            >
              {dayItems}
            </Field>
          </div>
          <div className="l_form_row">
            <Field
              name="CustomerCd"
              component={renderTextField}
              label="顧客コード"
              validate={[validate.required]}
            />
          </div>
          <div className="l_form_row">
            <Field
              name="ProjectCd"
              component={renderTextField}
              label="プロジェクトコード"
            />
          </div>
          <div className="l_form_row">
            <Field
              name="WorkContent"
              component={renderTextAreaField}
              label="作業内容"
            />
          </div>
          <div className="l_form_row">
            <Field
              name="OvertimeStart"
              component={renderTextField}
              label="残業予定時間"
              nomalize={[nomalize.Time, nomalize.MaxLength(4)]}
            />
            <Field
              name="OvertimeEnd"
              component={renderTextField}
              label="残業予定時間"
            />
          </div>
        </div>

        <Paper zDepth={1} className={'l_form_footer'}>
          <RaisedButton
            label={'申請'}
            secondary
            disabled={pristine || submitting}
            type="submit"
            className={'button'}
          />
          <RaisedButton
            label="Clear"
            disabled={pristine || submitting}
            onTouchTap={reset}
          />
        </Paper>
      </form>
    </Paper>
  );
};

export default reduxForm({
  form: 'Overtime', // a unique identifier for this form
  validate,
  // asyncValidate,
},
)(FormOvertime);

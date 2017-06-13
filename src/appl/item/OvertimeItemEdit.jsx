import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import * as actions from '../ApplAction';
// material-ui component
import Avatar from 'material-ui/Avatar';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
// color
import { yellow600 } from 'material-ui/styles/colors';
// svg-icon
import Zangyo from '../../images/zangyo';

// component
import { renderTextField, renderTextAreaField } from '../form/FormFields';
// actions
import * as common from '../../utils/Common';
import * as validate from '../../utils/Validate';
import * as normalize from '../../utils/Normalize';

const style = {
  container: {
    position: 'relative',
  },
  form: {
    paddingTop: 20,
    paddingLeft: 100,
    paddingBottom: 20,
    paddingRight: 100,
  },
  icon: {
    position: 'absolute',
    padding: 20,
    top: 0,
    left: 0,
    svgsize: {
      width: 60,
      height: 60,
    },
  },
  footer: {
    paddingTop: 10,
    paddingLeft: 100,
    paddingBottom: 10,
    paddingRight: 100,
    backgroundColor: '#f3f3f3',
  },
};

class OvertimeItemEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props;
    this.handleBlur = this.handleBlur.bind(this);
  }

  // componentWillMount() {
  //   this.props.initialEdit(this.props.item);
  // }

  handleBlur(e) {
    const fromtime = this.OvertimeActualStartRef.value;
    const { nomalHrs, lateHrs } = common.CalcOvertimeHrs(fromtime, e.target.value);
    this.props.change('NomalOvertimeHrs', nomalHrs);
    this.props.change('LateOvertimeHrs', lateHrs);
  }

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;
    return (
      <form onSubmit={e => handleSubmit(e)} style={style.container}>

        <div style={style.icon}>
          <Avatar icon={<Zangyo />} style={style.icon.svgsize} backgroundColor={yellow600} />
        </div>

        <div style={style.form}>
          <div>
            <Field
              name="CustomerCd"
              component={renderTextField}
              label="顧客コード"
            />
            <Field
              name="ProjectCd"
              component={renderTextField}
              label="プロジェクトコード"
            />
          </div>
          <div>
            <Field
              name="WorkContent"
              component={renderTextAreaField}
              label="作業内容"
              validate={[validate.required]}
            />
          </div>
          <div>
            <Field
              name="OvertimeStart"
              component={renderTextField}
              label="残業予定From"
              validate={[validate.required]}
              format={normalize.Time}
              normalize={normalize.Time}
            />
            <Field
              name="OvertimeEnd"
              component={renderTextField}
              label="残業予定To"
              validate={[validate.required]}
              normalize={normalize.Time}
            />
          </div>
          <div>
            <Field
              name="OvertimeActualStart"
              ref={(c) => { this.OvertimeActualStartRef = c; }}
              component={renderTextField}
              label="残業実績From"
              normalize={normalize.Time}
              withRef
            />
            <Field
              name="OvertimeActualEnd"
              component={renderTextField}
              label="残業実績To"
              normalize={normalize.Time}
              onBlur={e => this.handleBlur(e)}
            />
          </div>
          <div>
            <Field
              name="NomalOvertimeHrs"
              component={renderTextField}
              label="普通残業"
              format={normalize.Hrs}
              disabled
            />
            <Field
              name="LateOvertimeHrs"
              component={renderTextField}
              label="深夜残業"
              format={normalize.Hrs}
              disabled
            />
          </div>
        </div>

        <Paper style={style.footer}>
          <RaisedButton
            label={'更新'}
            secondary
            disabled={pristine || submitting}
            type="submit"
          />
        </Paper>
      </form>
    );
  }
}

OvertimeItemEdit.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  reset: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
  change: PropTypes.func.isRequired,
  item: PropTypes.objectOf(PropTypes.any).isRequired,
  initialEdit: PropTypes.func.isRequired,
};

function mapStateToProps(state, ownProps) {
  return {
    initialValues: {
      CustomerCd: ownProps.item.CustomerCd,
    },
  };
}

export default reduxForm({
  form: 'OvertimeEdit',
  enableReinitialize: true,
}, mapStateToProps, actions)(OvertimeItemEdit);

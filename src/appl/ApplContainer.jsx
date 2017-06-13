import React from 'react';
import PropTypes from 'prop-types';
import ClassSet from 'react-classset';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// custom component
import List from './ApplList';
import FloatingActionButton from './ApplFloatingActionButton';
import FormOvertime from './form/FormOvertime';
import Snackbar from '../components/snackbar';
// actions
import * as applyActions from './ApplAction';
// style
import './Appl.styl';

class Application extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props;
  }

  componentDidMount() {
    if (this.props.ApplList == null || this.props.ApplList.length === 0) {
      this.state.actions.Init(this.state.EmpId);
    }
  }

  render() {
    return (
      <div
        className={ClassSet({
          l_apply_container: true,
          is_open_menu: this.props.ShowSideMenu,
        })}
      >

        <List
          applList={this.props.ApplList}
          onDelete={this.state.actions.DeleteApplication}
          handleOpen={this.state.actions.OpenListItem}
          handleClose={this.state.actions.CloseListItem}
          initialEdit={this.state.actions.InitialEdit}
        />

        <FloatingActionButton
          handleShowForm={this.state.actions.ShowForm}
        />

        <div
          className={ClassSet({
            l_form_container: true,
            is_open_form: this.props.ShowForm,
          })}
        >
          <FormOvertime
            applicationForm={this.state.ApplicationForm}
            onSubmit={this.state.actions.OvertimeSubmit}
          />
        </div>

        <Snackbar
          snackbarOpen={this.props.SnackbarOpen}
          action={this.state.actions}
        />
      </div>
    );
  }
}

Application.propTypes = {
  ApplList: PropTypes.arrayOf(PropTypes.object).isRequired,
  ShowForm: PropTypes.bool.isRequired,
  ShowSideMenu: PropTypes.bool.isRequired,
  SnackbarOpen: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  const { ApplicationForm, ApplList, EmpId, ShowForm, SnackbarOpen } = state.Application;
  const { ShowSideMenu } = state.Base;
  return {
    ApplicationForm, ApplList, EmpId, ShowForm, SnackbarOpen, ShowSideMenu,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(applyActions, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Application);

import React from 'react';
import PropTypes from 'prop-types';
import ClassSet from 'react-classset';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// custom component
import ApplList from '../../../components/applicationlist/list';
import FloatingActionButton from '../../../components/floatingactionbutton';
import OvertimeForm from '../../../components/applicationform/overtime';
import Snackbar from '../../../components/common/snackbar';
// actions
import * as applyActions from '../../../actions/Application';
// style
import './application.styl';

import Form from './test';

class Application extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props;
  }

  componentDidMount() {
    if (this.props.ApplicationList == null || this.props.ApplicationList.length === 0) {
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

        <ApplList
          ApplicationList={this.props.ApplicationList}
          onDelete={this.state.actions.DeleteApplication}
          handleOpen={this.state.actions.OpenListItem}
          handleClose={this.state.actions.CloseListItem}
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
          <OvertimeForm
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
  ApplicationList: PropTypes.arrayOf(PropTypes.object).isRequired,
  ShowForm: PropTypes.bool.isRequired,
  ShowSideMenu: PropTypes.bool.isRequired,
  SnackbarOpen: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  const { ApplicationForm, ApplicationList, EmpId, ShowForm, SnackbarOpen } = state.Application;
  const { ShowSideMenu } = state.Base;
  return {
    ApplicationForm, ApplicationList, EmpId, ShowForm, SnackbarOpen, ShowSideMenu,
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

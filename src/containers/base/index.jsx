import * as React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Route, Switch } from 'react-router-dom';

// custom components
import GroupDialog from './dialog';
import Header from './header';
import SideMenu from './sidemenu';
import Attendance from '../pages/attendance/index';
import Application from '../pages/application/index';
// ActionCreator
import * as baseActions from '../../actions/Base';
// stylus
import './base.styl';

class Base extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props;
  }

  render() {
    return (
      <div className="l_wrapper">

        <Header
          pageTitle={this.props.PageTitle}
          handleShowSideMenu={this.props.actions.ShowSideMenu}
          handleShowDialog={this.props.actions.ShowGroupDialog}
        />

        <SideMenu
          isOpen={this.props.ShowSideMenu}
          handlePageTransition={this.props.actions.PageTransition}
        />

        <GroupDialog
          isOpen={this.props.ShowGroupDialog}
          hsndleSubmit={this.props.actions.GroupSubmit}
          handleShowDialog={this.props.actions.ShowGroupDialog}
        />

        <Switch>
          <Route path='/attendance' component={Attendance} />
          <Route path='/apply' component={Application} />
        </Switch>

      </div>
    );
  }
}

Base.propTypes = {
  actions: PropTypes.object.isRequired,
  ShowSideMenu: PropTypes.bool.isRequired,
  PageTitle: PropTypes.string.isRequired,
  ShowGroupDialog: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  return state.Base;
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(baseActions, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Base);

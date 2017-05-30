import * as React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Route, Switch } from 'react-router-dom';

// custom components
import GroupDialog from './dialog';
import Header from './header';
import SideMenu from './sidemenu';
import Attendance from '../atnd/AtndContainer';
import Application from '../appl/ApplContainer';
// ActionCreator
import * as baseActions from './BaseAction';

import './Base.styl';

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
          handleShowSideMenu={this.state.actions.ShowSideMenu}
          handleShowDialog={this.state.actions.ShowGroupDialog}
        />

        <SideMenu
          isOpen={this.props.ShowSideMenu}
          handlePageTransition={this.state.actions.PageTransition}
        />

        <GroupDialog
          isOpen={this.props.ShowGroupDialog}
          hsndleSubmit={this.state.actions.GroupSubmit}
          handleShowDialog={this.state.actions.ShowGroupDialog}
        />

        <Switch>
          <Route path="/attendance" component={Attendance} />
          <Route path="/apply" component={Application} />
        </Switch>

      </div>
    );
  }
}

Base.propTypes = {
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

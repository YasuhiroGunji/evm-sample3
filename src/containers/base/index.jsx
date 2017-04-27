import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// custom control
import GroupDialog from './dialog';
import Header from './header';
import SideMenu from './sidemenu';
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

        {this.props.children}

      </div>
    );
  }
}

Base.propTypes = {
  actions: React.PropTypes.object.isRequired,
  ShowSideMenu: React.PropTypes.bool.isRequired,
  PageTitle: React.PropTypes.string.isRequired,
  ShowGroupDialog: React.PropTypes.bool.isRequired,
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

import React, { PropTypes } from 'react';
import ClassSet from 'react-classset';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CSSTransitionGroup from 'react-addons-css-transition-group';

// material-ui component
import { List } from 'material-ui/List';
// component
import Card from '../../../components/common/card';
import CardDetail from '../../../components/common/carddetail';
import FloatingActionButton from '../../../components/floatingactionbutton';
import OvertimeForm from '../../../components/applicationform/overtime';
import Snackbar from '../../../components/common/snackbar';
// actions
import * as applyActions from '../../../actions/Application';
// style
import './application.styl';


class Application extends React.Component {

  constructor(props) {
    super(props);
    this.state = this.props;

    this.onDelete = this.onDelete.bind(this);
    this.ShowDetail = this.ShowDetail.bind(this);
    this.CloseDetail = this.CloseDetail.bind(this);
  }

  componentDidMount() {
    if (this.props.ApplicationList == null || this.props.ApplicationList.length === 0) {
      this.props.actions.Init(this.props.EmpId);
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ ApplicationList: nextProps.ApplicationList });
  }

  onDelete(applicationId) {
    // TODO: モーダルダイアログ処理実装予定
    // TODO: サーバー通信処理実装予定
    this.props.actions.DeleteApplication(this.props.ApplicationList, applicationId);
  }

  ShowDetail(applicationId) {
    const newList = this.state.ApplicationList.map((item) => {
      const newItem = item;

      if (newItem.ApplicationId === applicationId) {
        newItem.ShowDetail = true;
        return newItem;
      }

      newItem.ShowDetail = false;
      return newItem;
    });

    this.setState({ ApplicationList: newList });
  }

  CloseDetail(applicationId) {
    const newList = this.state.ApplicationList.slice();
    const i = this.state.ApplicationList.findIndex(item =>
      item.ApplicationId === applicationId);
    newList[i].ShowDetail = false;
    this.setState({ ApplicationList: newList });
  }

  render() {
    const applicationList = this.props.ApplicationList.map((item) => {
      if (item.ShowDetail) {
        return (
          <CardDetail
            key={item.ApplicationId}
            className={'example'}
            ApplicationItem={item}
            handleDelete={this.onDelete}
            handleCloseDetail={this.CloseDetail}
          />
        );
      }

      return (
        <Card
          key={item.ApplicationId}
          className={'example'}
          ApplicationItem={item}
          handleDelete={this.onDelete}
          handleOpenDetail={this.ShowDetail}
        />
      );
    });

    return (
      <div
        className={ClassSet({
          l_apply_container: true,
          is_open_menu: this.props.ShowSideMenu,
        })}
      >

        <div className={'l_list_container'}>
          <div className="l_list_header">
            <span>ヘッダー</span>
          </div>
          <List>
            <CSSTransitionGroup
              transitionName={'example'}
              transitionEnterTimeout={500}
              transitionLeaveTimeout={500}
            >
              {applicationList}
            </CSSTransitionGroup>
          </List>
        </div>


        <FloatingActionButton
          handleShowForm={this.props.actions.ShowForm}
        />

        <div
          className={ClassSet({
            l_form_container: true,
            is_open_form: this.props.ShowForm,
          })}
        >
          <OvertimeForm
            applicationForm={this.props.ApplicationForm}
            onSubmit={this.props.actions.OvertimeSubmit}
          />
        </div>

        <Snackbar
          snackbarOpen={this.props.SnackbarOpen}
          action={this.props.actions}
        />
      </div>
    );
  }
}

Application.propTypes = {
  ApplicationList: PropTypes.array,
  ApplicationForm: PropTypes.object,
  actions: PropTypes.object.isRequired,
  EmpId: PropTypes.number.isRequired,
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

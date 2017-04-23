import * as React from 'react';
import ClassSet from 'react-classset';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CSSTransitionGroup from 'react-addons-css-transition-group';

// material-ui component
import FloatingActionButton from 'material-ui/FloatingActionButton';
import { List } from 'material-ui/List';
// component
import Card from '../../../components/common/card';
import CardDetail from '../../../components/common/carddetail';
import Snackbar from '../../../components/common/snackbar';
import OvertimeForm from '../../../components/applicationform/overtime';
// svg-icon
import ContentAdd from 'material-ui/svg-icons/content/add';
// actions
import * as applyActions from '../../../actions/Application';
// enum
import { APPL_CD } from '../../../const/Enum';

// style
import './application.styl';


class Application extends React.Component {

  constructor(props) {
    super(props);
    this.state = this.props;

    this.onSubmit = this.onSubmit.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.ShowForm = this.ShowForm.bind(this);
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
    this.setState({ ShowMenu: nextProps.ShowMenu });
  }

  onSubmit(applicationCd, form) {
    switch (applicationCd) {

      case APPL_CD.OVERTIME:
        this.props.actions.OvertimeSubmit(form);
        break;

      default:
        break;
    }
  }

  onDelete(applicationId) {
    // TODO: モーダルダイアログ処理実装予定
    // TODO: サーバー通信処理実装予定
    this.props.actions.DeleteApplication(this.props.ApplicationList, applicationId);
  }

  ShowForm() {
    this.setState({ ShowForm: !this.state.ShowForm });
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
          is_open_menu: this.props.ShowMenu,
        })}
      >
        <div className="l_apply_header">
          <span>ヘッダー</span>
        </div>

        <div className={'l_list_container'}>
          <List>
            <div className={'l_week_item'}>
              <div>今月</div>
            </div>

            <CSSTransitionGroup
              transitionName={'example'}
              transitionEnterTimeout={500}
              transitionLeaveTimeout={500}
            >
              {applicationList}
            </CSSTransitionGroup>
          </List>
        </div>

        <div className={'l_floating_button'}>
          <FloatingActionButton
            zDepth={3}
            secondary
            style={{ marginRight: 8 }}
            onClick={this.ShowForm}
          >
            <ContentAdd />
          </FloatingActionButton>
        </div>

        <div
          className={ClassSet({
            l_form_container: true,
            is_open_form: this.state.ShowForm,
          })}
        >
          <OvertimeForm
            applicationForm={this.props.ApplicationForm}
            handleSubmit={this.onSubmit}
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
  ApplicationList: React.PropTypes.array,
  ApplicationForm: React.PropTypes.object,
  actions: React.PropTypes.object.isRequired,
  EmpId: React.PropTypes.number.isRequired,
  ShowMenu: React.PropTypes.bool.isRequired,
  SnackbarOpen: React.PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  const { ApplicationForm, ApplicationList, EmpId, ShowForm, SnackbarOpen } = state.Application;
  const { ShowMenu } = state.Base;
  return {
    ApplicationForm, ApplicationList, EmpId, ShowForm, SnackbarOpen, ShowMenu,
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

import * as React from 'react';
import ClassSet from 'react-classset';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import IconButton from 'material-ui/IconButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import ApplyList from '../../../components/applylist';
import ApplyForm from '../../../components/applyform';
import Snackbar from '../../../components/common/snackbar';
import * as applyActions from '../../../actions/Apply';

import './applystyle.styl';

class Apply extends React.Component {

  constructor(props) {
    super(props);
  }
  
  ShowForm() {
    this.props.applyActionBind.ShowForm(!this.props.showForm);
  }

  componentDidMount() {
    if (this.props.applyList == null || this.props.applyList.length == 0) {
      this.props.applyActionBind.Init("42015");
    }
  }
  
  render() {
    return (
      <div className="l_apply_container">
        <div className="l_list_container">
          <ApplyList applyList={ this.props.applyList } />
        </div>
        <div className="l_floating_button">
          <FloatingActionButton
            zDepth={3}
            secondary={true} 
            style={{marginRight: 8}} onClick={() => this.ShowForm()}>
            <ContentAdd />
          </FloatingActionButton>
        </div>
        <div className={ClassSet({
          l_applyform: true,
          is_active: this.props.showForm
        })}>
          <ApplyForm applyForm={this.props.applyForm} action={this.props.applyActionBind} />
        </div>
        <Snackbar snackbarOpen={this.props.snackbarOpen} action={this.props.applyActionBind} />
      </div> 
    )
  };
}

function mapStateToProps(state){
  const { showForm, applyList, applyForm, applyActionBind, snackbarOpen } = state.Apply;
  return  {
    showForm, applyList, applyForm, applyActionBind, snackbarOpen
  };
}

function mapDispatchToProps(dispatch) {
  return {
    applyActionBind: bindActionCreators(applyActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Apply);

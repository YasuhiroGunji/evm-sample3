import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import IconButton from 'material-ui/IconButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import ApplyList from '../../../components/applylist';
import ApplyForm from '../../../components/applyform';
import * as applyActions from '../../../actions/Apply';

import './applystyle.styl';

class Apply extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      showForm: false, 
      formClass: "l_applyform" 
    };
  }
  
  OpenForm() {
    const isOpen = !this.state.showForm
    this.setState({showForm: isOpen});
    this.setState({formClass: "l_applyform" + ((isOpen) ? " is_active" : "")});  
  }

  componentDidMount() {
    if (this.props.applyList == null || this.props.applyList.length == 0) {
      const bindActionCreators = this.props.applyActionBind;
      bindActionCreators.init("42015");
    }
  }
  
  render() {
    return (
      <div className="l_apply_container">
        <div className="l_list_container">
          <ApplyList applyList={ this.props.applyList } />
        </div>
        <div className="l_floating_button">
          <FloatingActionButton secondary={true} style={{marginRight: 8}} zDepth={3} onClick={() => this.OpenForm()}>
            <ContentAdd />
          </FloatingActionButton>
        </div>
        <div className={this.state.formClass}>
          <ApplyForm applyForm={ this.props.applyForm } action={ this.props.applyActionBind } />
        </div>
      </div> 
    )
  };
}

function mapStateToProps(state){
  const { applyList, applyForm, applyActionBind } = state.Apply;
  return  {
    applyList, applyForm, applyActionBind
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

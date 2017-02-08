import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ApplyList from '../../../components/applylist';
import ApplyForm from '../../../components/applyform';
import * as applyActions from '../../../actions/Apply';

import './applystyle.styl';

class Apply extends Component {
  
  static propTypes = {
    applyList: PropTypes.arrayOf(
      React.PropTypes.object
    ),
    applyForm : React.PropTypes.object
  }
  
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    const bindActionCreators = this.props.applyActionBind;
    bindActionCreators.init("42015");
  }

  render() {
    return (
      <div className="l_flex_container">
        <div className="l_flex_box">
          <ApplyList applyList={ this.props.applyList } />
        </div>
        <div className="l_flex_box">
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

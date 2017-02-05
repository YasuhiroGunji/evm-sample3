import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ApplyList from '../../../components/applylist';
import ApplyForm from '../../../components/applyform';
import * as applyActions from '../../../actions/Apply';

import './applystyle.styl';

class Apply extends Component {
  
  static propTypes = {
    apply: PropTypes.shape({
      applyList: PropTypes.arrayOf(
        React.PropTypes.object
      ),
      applyForm : PropTypes.shape({
          date: PropTypes.object.isRequired,
          kokyakuCd: PropTypes.string.isRequired,
          projectCd: PropTypes.string.isRequired,
          startTime: PropTypes.string.isRequired,
          text: PropTypes.string.isRequired,
      })
    })
  }
  
  constructor(props) {
    super(props);
    this.state = this.props.apply;
  }

  render() {
    return (
      <div className="l_flex_container">
        <div className="l_flex_box">
          <ApplyList applyList={ this.state.applyList } />
        </div>
        <div className="l_flex_box">
          <ApplyForm applyForm={ this.state.applyForm } />
        </div>
      </div>
    )
  };
}

function mapStateToProps( state ){
  const apply = state.Apply.apply;
  return  {
    apply
  };
}

function mapDispatchToProps( dispatch ) {
  return {
    applyActionBind: bindActionCreators(applyActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Apply);

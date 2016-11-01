// import { connect } from 'react-redux';
// import React, { Component, PropTypes } from 'react';
// import {bindActionCreators } from 'redux';

// import Top from './components/Top';
// import * as topActions from '../actions/top';

// class TopContainer extends Component {
//     constructor(props) {
//         super(props);
        
//         this.handleOnClickSendDMail = this.handleOnClickSendDMail.bind(this);
//     }

//     handleOnClickSendDMail() {
//         const { topActionBind } = this.props;

//         topActionBind.sendDMail();
//     }

//     render () {
//         const { isFatherAlive, isMoeAkiba } = this.props;

//         return (
//             <div>
//                 <Top 
//                     isFatherAlive = {isFatherAlive }
//                     isMoeAkiba = { isMoeAkiba }
//                     onClickSendDMail = { this.handleOnClickSedDMail }
//                 />
//             </div>
//         );
//     }
// };

// function mapStateToProps( state ) {
//     const { isFatherAlive, isMoeAkiba } = this.props.top;
//     return {
//         isFatherAlive,
//         isMoeAkiba,
//     }
// }
// function mapDispatchToProps( dispatch ) {
//     return {
//         topActionBind: bindActionCreators(topActions, dispatch)
//     };
// }

// export default connect (
//     mapStateToProps,
//     mapDispatchToProps
// )(TopContainer);

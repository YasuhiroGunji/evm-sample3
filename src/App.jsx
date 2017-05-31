import * as React from 'react';
import Base from './base/BaseContainer';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props;
  }
  render() {
    return (
      <Base />
    );
  }
}

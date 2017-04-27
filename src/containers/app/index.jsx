import * as React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props;
  }
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import './reset.css';

import Routes from './routes';
import Store from './store/configstore';

injectTapEventPlugin();

class Root extends Component {
  render() {
    return (
      <Provider store={Store}>
        <MuiThemeProvider>
          <Routes />
        </MuiThemeProvider>
      </Provider>
    );
  }
}

render(<Root />, document.getElementById('main'));

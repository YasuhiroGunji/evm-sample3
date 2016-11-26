import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import Routes from './routes';
import Store from './store/configstore';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

import './reset.css';

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
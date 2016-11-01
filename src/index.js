import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import App from './containers/app';
import Top from './containers/pages/top';
import Attendance from './containers/pages/attendance';
import Apply from './containers/pages/apply';

import ApplyList from './components/applylist';
import ApplyForm from './components/applyform';
import Detail from './components/detail';
import Overwork from './components/overwork';


injectTapEventPlugin();

import './reset.css';

class Root extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Router history={hashHistory}>
          <Route path="/" component={App}>
            <IndexRoute component={Top} />
            <Route path="/attendance" component={Attendance} />
            <Route path="/apply" component={Apply}>
              <Route path="/apply/applylist" component={ApplyList} />
              <Route path="/apply/applyform" component={ApplyForm} />
            </Route>
          </Route>
        </Router>
      </MuiThemeProvider>
    );
  }
}

render(<Root />, document.getElementById('main'));


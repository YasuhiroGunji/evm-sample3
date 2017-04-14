import * as React from 'react';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';

import App from './containers/app/index';
import Attendance from './containers/pages/attendance/index';
import Application from './containers/pages/application/index';

export default () =>
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Application} />
      <Route path="/attendance" component={Attendance} />
      <Route path="/apply" component={Application} />
    </Route>
  </Router>
;

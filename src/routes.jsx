import * as React from 'react';
// import { Route, Router, IndexRoute, hashHistory } from 'react-router';
import { HashRouter, Route, Switch } from 'react-router-dom';

import App from './containers/app/index';
import Base from './containers/base/index';
import Attendance from './containers/pages/attendance/index';
import Application from './containers/pages/application/index';

export default () =>
  <HashRouter>
    <Route path="/" component={App} />
  </HashRouter>
;

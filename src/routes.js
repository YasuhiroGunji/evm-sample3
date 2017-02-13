import React from 'react';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';

import App from './containers/app';
import Top from './containers/pages/top';
import Attendance from './containers/pages/attendance';
import Apply from './containers/pages/apply';

import ApplyList from './components/applylist';
import ApplyForm from './components/applyform';
import Detail from './components/detail';
import Overwork from './components/overwork';

export default () => {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Apply} />
        <Route path="/attendance" component={Attendance} />
        <Route path="/apply" component={Apply}>
        </Route>
      </Route>
    </Router>
  );
};

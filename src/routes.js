import React from 'react'; 
import { Route, Router,  IndexRoute, hashHistory } from 'react-router';

import App from './containers/app';
import Top from './containers/pages/top';
import Attendance from './containers/pages/attendance';
import Apply from './containers/pages/apply';

import ApplyList from './components/applylist';
import ApplyForm from './components/applyform';
import Detail from './components/detail';
import Overwork from './components/overwork';

export default (store) => {

return (
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
  )
}
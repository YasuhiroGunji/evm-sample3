import { createStore, combineReducers, applyMiddleware } from 'redux';

import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { reducer as reduxFormReducer } from 'redux-form';

import Application from './appl/ApplReducer';
import Attendance from './atnd/AtndReducer';
import Base from './base/BaseReducer';

const store = applyMiddleware(thunkMiddleware, createLogger());

const reducers = combineReducers({
  Application,
  Attendance,
  Base,
  form: reduxFormReducer,
});

export default createStore(reducers, {}, store);

import { createStore, combineReducers, applyMiddleware } from 'redux';

import thunkMiddleware from 'redux-thunk';
// import createLogger from 'redux-logger';
import { createLogger } from 'redux-logger';
import { reducer as MaterialUiForm } from 'redux-form';

import Application from './reducers/Application';
import Attendance from './reducers/Attendance';
import Base from './reducers/Base';

const store = applyMiddleware(thunkMiddleware, createLogger());

const reducers = combineReducers({
  Application,
  Attendance,
  Base,
});

export default createStore(reducers, {}, store);

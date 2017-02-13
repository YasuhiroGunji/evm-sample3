import { createStore, combineReducers, applyMiddleware } from 'redux';

import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

import Apply from './reducers/Apply';

const store = applyMiddleware(thunkMiddleware, createLogger());

const reducers = combineReducers({
  Apply,
});

export default createStore(reducers, {}, store);

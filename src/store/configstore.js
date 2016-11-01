import { createStore, combineReducers, applyMiddleware } from 'redux';

import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

import Text from '../reducers/text';

const store = applyMiddleware(thunkMiddleware,createLogger());

const reducers = combineReducers({
  Text
});

export default createStore(reducers, {}, store);

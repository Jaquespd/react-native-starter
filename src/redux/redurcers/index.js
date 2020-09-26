import {combineReducers} from 'redux';
import {todoReducer} from './todo';
import auth from './auth';

const reducers = combineReducers({
  todoReducer,
  auth,
});

export {reducers};

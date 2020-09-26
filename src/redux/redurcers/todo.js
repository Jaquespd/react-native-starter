import {ACTIONS} from '../types';

const INITIAL_STATE = {
  tasks: [],
};

const todoReducer = (state = INITIAL_STATE, action) => {
  const {payload, type} = action;
  const {tasks} = state;
  switch (type) {
    case ACTIONS.TODO_ADD:
      return {...state, tasks: [...tasks, payload]};
    case ACTIONS.TODO_GET_ALL:
      return {...state, tasks: payload};
    case ACTIONS.TODO_REMOVE:
      return {...state, tasks: tasks.filter((task) => task !== payload)};
    default:
      return state;
  }
};

export {todoReducer};

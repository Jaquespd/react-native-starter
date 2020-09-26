import {ACTIONS} from '../redux/types';

const todoActions = {
  add: (task) => ({
    payload: task,
    type: ACTIONS.TODO_ADD,
  }),
  getAll: (tasks) => ({
    payload: tasks,
    type: ACTIONS.TODO_GET_ALL,
  }),
  remove: (task) => ({
    payload: task,
    type: ACTIONS.TODO_REMOVE,
  }),
};

const auth = {
  signInRequest: (userId) => ({
    payload: userId,
    type: ACTIONS.AUTH_SIGN_IN_REQUEST,
  }),
  signInSuccess: (profile) => ({
    payload: profile,
    type: ACTIONS.AUTH_SIGN_IN_SUCCESS,
  }),
  signFailure: () => ({
    type: ACTIONS.AUTH_SIGN_FAILURE,
  }),
  signOut: () => ({
    type: ACTIONS.AUTH_SIGN_OUT,
  }),
  toggleTheme: () => ({
    type: ACTIONS.PROFILE_TOGGLE_THEME,
  }),
};

export {todoActions, auth};

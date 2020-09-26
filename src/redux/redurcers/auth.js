import produce from 'immer';

import {ACTIONS} from '../types';

const INITIAL_STATE = {
  token: null,
  signed: false,
  loading: false,
  isDarkTheme: false,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case ACTIONS.AUTH_SIGN_IN_REQUEST: {
        draft.loading = true;
        break;
      }
      case ACTIONS.AUTH_SIGN_IN_SUCCESS: {
        draft.signed = true;
        draft.loading = false;
        break;
      }

      case ACTIONS.AUTH_SIGN_FAILURE: {
        draft.loading = false;
        break;
      }

      case ACTIONS.AUTH_SIGN_OUT: {
        draft.signed = false;
        break;
      }

      case ACTIONS.PROFILE_TOGGLE_THEME: {
        draft.isDarkTheme = !draft.isDarkTheme;
        break;
      }

      default:
    }
  });
}
